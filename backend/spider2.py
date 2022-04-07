import pprint
import random
from functools import reduce

import requests
from lxml import etree
from bs4 import BeautifulSoup

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


def loop_get(shop, times=1):
    response = str(requests.get(shop).text)
    soup = BeautifulSoup(response, 'html.parser')
    https = [i["href"] for i in soup.find_all("a", class_="navPage-subMenu-action navPages-action")]
    res = []
    for http in https:
        # print (http,"http")
        urls = get_gift_page(http)
        # print(urls)
        for url in urls:
            # print(url,"url")
            info = get_info(url)

            res.append(info)
            # print(res)

            if times != -1 and len(res) == times:
                return res
    return res


res = (loop_get(shop, 3))
pprint.pprint(res)
run_function = lambda x, y: x if y in x else x + [y]
res = reduce(run_function, [[], ] + res)
# get_gift_page()
