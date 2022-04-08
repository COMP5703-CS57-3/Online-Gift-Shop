import pprint
import random
from functools import reduce

import requests
from lxml import etree
from bs4 import BeautifulSoup

import pymysql
from sqlalchemy import create_engine


import pandas as pd

shop = "https://scandinaviangifts.com/tvars-030/"


def get_gift_page(http="https://scandinaviangifts.com/candy-and-treats/"):
    response = str(requests.get(http).text)
    html = etree.HTML(response)  # 初始化生成一个XPath解析对象
    soup = BeautifulSoup(response, 'html.parser')

    urls = [i.a["href"] for i in soup.find_all("h4", class_="card-title")]
    # print(urls)
    return urls


def get_info(url):
    def random_discount(p):
        s = 100
        if random.random() > 0.7:
            s = random.randint(20, 99)
            p = p * s / 100
        return s, p

    def random_size_sale():
        each_sales = []
        each_income = []
        for i in range(len(size)):
            each_sales.append(random.randint(0, sales - sum(each_sales)))
        each_income = [round(sum([random_discount(price)[1] for j in range(i)]), 2) for i in each_sales]
        return each_sales, each_income

    response = str(requests.get(url).text)
    html = etree.HTML(response)  # 初始化生成一个XPath解析对象
    soup = BeautifulSoup(response, 'html.parser')
    title = html.xpath('//html/body/div[7]/div[1]/div/div[1]/section[1]/div/h1/text()')[0]
    price = eval(html.xpath('//html/body/div[7]/div[1]/div/div[1]/section[1]/div/div[4]/div/span/text()')[0][1:])
    img = soup.find_all("figure", class_="productView-image")[0].a['href']
    size = [i.get_text() for i in soup.find_all("span", class_="form-option-variant")]
    size = ["normal"] if len(size) == 0 else size
    des = soup.find_all("div", class_="tab-content is-active")[0].get_text()
    # print(title, price, img, size, des)
    dis_state, dis_price = random_discount(price)
    sales = random.randint(0, 999)
    size_sales, size_income = random_size_sale()
    income = round(sum([random_discount(price)[1] for i in range(sales)]), 2)
    size_stock = [random.randint(0, 999) for i in range(len(size))]
    return {
        "gift_name": title,
        "gift_price": price,
        "gift_discount_price": dis_price,
        "gift_discount_state": str(dis_state) + "%",
        "gift_description": des,
        "gift_category": "",
        "gift_side_category1": "",
        "gift_side_category2": "",
        "gift_cover_url": img,
        "gift_show_url1": "",
        "gift_show_url2": "",
        "gift_show_url3": "",
        "gift_show_url4": "",
        "gift_sales": sales,
        "gift_income": income,
        "gift_size": [{"size": size[i],
                       "stock": size_stock[i],
                       "this_size_sales": size_sales[i],
                       "this_size_income": size_income[i]} for i in range(len(size))]

    }


def loop_get(shop, times=-1):
    response = str(requests.get(shop).text)
    soup = BeautifulSoup(response, 'html.parser')
    https = [i["href"] for i in soup.find_all("a", class_="navPage-subMenu-action navPages-action")]
    res = []
    for http in https:
        # print (http,"http")
        urls = get_gift_page(http)
        # print(urls)
        urls = [urls[i] for i in range(0, len(urls), 3)]
        if len(urls) > 200:
            urls = urls[:200]
        for url in urls:
            # print(url,"url")
            info = get_info(url)

            res.append(info)
            # print(res)

            if times != -1 and len(res) == times:
                return res
    return res


res = (loop_get(shop, 20))
# pprint.pprint(res)
run_function = lambda x, y: x if y in x else x + [y]
res = reduce(run_function, [[], ] + res)
# get_gift_page()

# 连接数据库查询当前表中的数据
engine = create_engine(
    'mysql+pymysql://ZhengLi:Comp5703;@database-comp5703-cs57-3.cvbkv8f5esm6.us-east-1.rds.amazonaws.com:3306' + '/comp5703',
    echo=False,
    connect_args={'charset': 'utf8'})
sql1 = 'SELECT count(id) FROM `gifts`'
sql2 = 'SELECT count(id) FROM `size`'
already_num1 = pd.read_sql_query(sql1, engine)['count(id)'][0]
already_num2 = pd.read_sql_query(sql2, engine)['count(id)'][0]
print(already_num1, already_num2)

# 整理爬取的数据结果
columns_one = list(res[0].keys())[:-1]
columns_one.insert(0, 'id')
columns_two = ['id','gift_id', 'size', 'stock', 'this_size_sales', 'this_size_income']
data_1 = []  # gifts表的全部数据
data_2 = []  # size表的全部数据
for i in res:
    all_data = list(i.values())
    table1_data = all_data[:-1]
    table1_data.insert(0, already_num1 + 1)
    data_1.append(table1_data)
    table2_data = all_data[-1]
    for j in table2_data:
        data2_ = list(j.values())
        data2_.insert(0, already_num1 + 1)
        data2_.insert(0, already_num2 + 1)
        data_2.append(data2_)
        already_num2 += 1
    already_num1 += 1
dataset1 = pd.DataFrame(data_1, columns=columns_one)
dataset2 = pd.DataFrame(data_2, columns=columns_two)

# 写入数据
dataset1.to_sql(name='gifts', con=engine, if_exists='append', index=False, index_label=False)
dataset2.to_sql(name='size', con=engine, if_exists='append', index=False, index_label=False)

engine.dispose()  # 关闭连接
