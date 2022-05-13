import random
import unittest
from time import sleep

from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

from frontend.Testing.Unit_Test.Unit_Test_Login import chrome_options


class TestWhlistList(unittest.TestCase):
    def setUp(self):
        # self.driver = webdriver.Chrome(options=chrome_options)  # 不显示浏览器，静默模式
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/wish/wishForm")
        if self.driver.current_url == "http://localhost:3000/login":
            self.driver.find_element_by_xpath('//*[@id="email"]').clear()
            self.driver.find_element_by_xpath('//*[@id="email"]').send_keys("111@qq.com")
            self.driver.find_element_by_xpath('//*[@id="password"]').clear()
            self.driver.find_element_by_xpath('//*[@id="password"]').send_keys("1234")
            self.driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
            sleep(5)

    # self.driver.implicitly_wait(10)

    def normal(self):
        """Can generated normal wlishlist"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="titleP"]').clear()
        driver.find_element_by_xpath('//*[@id="titleP"]').send_keys("test two")
        driver.find_element_by_xpath('//*[@id="firstP"]').clear()
        driver.find_element_by_xpath('//*[@id="firstP"]').send_keys("reni")
        driver.find_element_by_xpath('//*[@id="lastP"]').clear()
        driver.find_element_by_xpath('//*[@id="lastP"]').send_keys("niei")
        driver.find_element_by_xpath('//*[@id="desprops"]').clear()
        driver.find_element_by_xpath('//*[@id="desprops"]').send_keys("this wlishlist is for test")

        driver.find_element_by_xpath('//*[@id="country"]').clear()
        selectCountry = driver.find_element_by_xpath('//*[@id="country"]')
        selectCountry.click()
        sleep(2)
        driver.find_element_by_xpath('//*[@id="country"]').send_keys("Australia")
        driver.find_element_by_xpath('//*[@id="country"]').send_keys(Keys.ENTER)
        sleep(2)
        # 这里需要选取州的值，但是不能使用回车进行确定
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
        selectAddress = driver.find_element_by_xpath('//*[@id="combo-box-demo"]')
        selectAddress.click()
        sleep(2)
        # driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
        driver.find_element_by_css_selector("[value = 'New South Wales']").click()
        # driver.find_element_by_link_text("New South Wales")
        sleep(2)
        driver.find_element_by_xpath('//*[@id="adderss"]').clear()
        driver.find_element_by_xpath('//*[@id="adderss"]').send_keys("noemwr test dsop")
        driver.find_element_by_xpath('//*[@id="phone"]').clear()
        driver.find_element_by_xpath('//*[@id="phone"]').send_keys("12222112133")
        driver.find_element_by_xpath('//*[@id="postcode"]').clear()
        driver.find_element_by_xpath('//*[@id="postcode"]').send_keys("518993")
        driver.find_element_by_xpath('//*[@id="time"]').clear()
        driver.find_element_by_xpath('//*[@id="time"]').send_keys("05192022")
        driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div/form/div[5]/button').click()
        sleep(5)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
        sleep(1)


    # def bad_input_Special_Symbol(self):
    #     """Generate Wishlist--Special Symbol Input """
    #     driver = self.driver
    #     driver.find_element_by_xpath('//*[@id="titleP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="titleP"]').send_keys("test two")
    #     driver.find_element_by_xpath('//*[@id="firstP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="firstP"]').send_keys("reni")
    #     driver.find_element_by_xpath('//*[@id="lastP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="lastP"]').send_keys("niei")
    #     driver.find_element_by_xpath('//*[@id="desprops"]').clear()
    #     driver.find_element_by_xpath('//*[@id="desprops"]').send_keys("this wlishlist is for test")
    #     driver.find_element_by_xpath('//*[@id="country"]').clear()
    #     driver.find_element_by_xpath('//*[@id="country"]').send_keys("Australia")
    #     sleep(2)
    #     driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
    #     driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
    #     sleep(2)
    #     driver.find_element_by_xpath('//*[@id="adderss"]').clear()
    #     driver.find_element_by_xpath('//*[@id="adderss"]').send_keys("noemwr test dsop")
    #     driver.find_element_by_xpath('//*[@id="phone"]').clear()
    #     driver.find_element_by_xpath('//*[@id="phone"]').send_keys("12222112133")
    #     driver.find_element_by_xpath('//*[@id="postcode"]').clear()
    #     driver.find_element_by_xpath('//*[@id="postcode"]').send_keys("518993")
    #     driver.find_element_by_xpath('//*[@id="time"]').clear()
    #     driver.find_element_by_xpath('//*[@id="time"]').send_keys("05192022")
    #     driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div/form/div[5]/button').click()
    #     sleep(5)
    #     curr_url = driver.current_url
    #     self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
    #     sleep(1)
    #
    #
    # def bad_input_pure_digital_input(self):
    #     """Generate wishlist - pure digital input"""
    #     driver = self.driver
    #     driver.find_element_by_xpath('//*[@id="titleP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="titleP"]').send_keys("test two")
    #     driver.find_element_by_xpath('//*[@id="firstP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="firstP"]').send_keys("reni")
    #     driver.find_element_by_xpath('//*[@id="lastP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="lastP"]').send_keys("niei")
    #     driver.find_element_by_xpath('//*[@id="desprops"]').clear()
    #     driver.find_element_by_xpath('//*[@id="desprops"]').send_keys("this wlishlist is for test")
    #     driver.find_element_by_xpath('//*[@id="country"]').clear()
    #     driver.find_element_by_xpath('//*[@id="country"]').send_keys("Australia")
    #     driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
    #     driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
    #     driver.find_element_by_xpath('//*[@id="adderss"]').clear()
    #     driver.find_element_by_xpath('//*[@id="adderss"]').send_keys("noemwr test dsop")
    #     driver.find_element_by_xpath('//*[@id="phone"]').clear()
    #     driver.find_element_by_xpath('//*[@id="phone"]').send_keys("12222112133")
    #     driver.find_element_by_xpath('//*[@id="postcode"]').clear()
    #     driver.find_element_by_xpath('//*[@id="postcode"]').send_keys("518993")
    #     driver.find_element_by_xpath('//*[@id="time"]').clear()
    #     driver.find_element_by_xpath('//*[@id="time"]').send_keys("05192022")
    #     driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div/form/div[5]/button').click()
    #     sleep(5)
    #     curr_url = driver.current_url
    #     self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
    #     sleep(1)
    #
    #
    # def bad_input_Pure_English_Input(self):
    #     """Generate Wishlist--Pure_English_Input"""
    #     driver = self.driver
    #     driver.find_element_by_xpath('//*[@id="titleP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="titleP"]').send_keys("test two")
    #     driver.find_element_by_xpath('//*[@id="firstP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="firstP"]').send_keys("reni")
    #     driver.find_element_by_xpath('//*[@id="lastP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="lastP"]').send_keys("niei")
    #     driver.find_element_by_xpath('//*[@id="desprops"]').clear()
    #     driver.find_element_by_xpath('//*[@id="desprops"]').send_keys("this wlishlist is for test")
    #     driver.find_element_by_xpath('//*[@id="country"]').clear()
    #     driver.find_element_by_xpath('//*[@id="country"]').send_keys("Australia")
    #     driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
    #     driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
    #     driver.find_element_by_xpath('//*[@id="adderss"]').clear()
    #     driver.find_element_by_xpath('//*[@id="adderss"]').send_keys("noemwr test dsop")
    #     driver.find_element_by_xpath('//*[@id="phone"]').clear()
    #     driver.find_element_by_xpath('//*[@id="phone"]').send_keys("12222112133")
    #     driver.find_element_by_xpath('//*[@id="postcode"]').clear()
    #     driver.find_element_by_xpath('//*[@id="postcode"]').send_keys("518993")
    #     driver.find_element_by_xpath('//*[@id="time"]').clear()
    #     driver.find_element_by_xpath('//*[@id="time"]').send_keys("05192022")
    #     driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div/form/div[5]/button').click()
    #     sleep(5)
    #     curr_url = driver.current_url
    #     self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
    #     sleep(1)
    #
    #
    # def bad_input_pure_Number_and_English_Combination_Input(self):
    #     """Generate Wish List--Number_and_English_Combination_Input"""
    #     driver = self.driver
    #     driver.find_element_by_xpath('//*[@id="titleP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="titleP"]').send_keys("test two")
    #     driver.find_element_by_xpath('//*[@id="firstP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="firstP"]').send_keys("reni")
    #     driver.find_element_by_xpath('//*[@id="lastP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="lastP"]').send_keys("niei")
    #     driver.find_element_by_xpath('//*[@id="desprops"]').clear()
    #     driver.find_element_by_xpath('//*[@id="desprops"]').send_keys("this wlishlist is for test")
    #     driver.find_element_by_xpath('//*[@id="country"]').clear()
    #     driver.find_element_by_xpath('//*[@id="country"]').send_keys("Australia")
    #     driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
    #     driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
    #     driver.find_element_by_xpath('//*[@id="adderss"]').clear()
    #     driver.find_element_by_xpath('//*[@id="adderss"]').send_keys("noemwr test dsop")
    #     driver.find_element_by_xpath('//*[@id="phone"]').clear()
    #     driver.find_element_by_xpath('//*[@id="phone"]').send_keys("12222112133")
    #     driver.find_element_by_xpath('//*[@id="postcode"]').clear()
    #     driver.find_element_by_xpath('//*[@id="postcode"]').send_keys("518993")
    #     driver.find_element_by_xpath('//*[@id="time"]').clear()
    #     driver.find_element_by_xpath('//*[@id="time"]').send_keys("05192022")
    #     driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div/form/div[5]/button').click()
    #     sleep(5)
    #     curr_url = driver.current_url
    #     self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
    #     sleep(1)
    #
    #
    # def bad_input_Special_Symbol_English_Combination_Input(self):
    #     """Generate Wish List--Special_Symbol_English_Combination_Input"""
    #     driver = self.driver
    #     driver.find_element_by_xpath('//*[@id="titleP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="titleP"]').send_keys("test two")
    #     driver.find_element_by_xpath('//*[@id="firstP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="firstP"]').send_keys("reni")
    #     driver.find_element_by_xpath('//*[@id="lastP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="lastP"]').send_keys("niei")
    #     driver.find_element_by_xpath('//*[@id="desprops"]').clear()
    #     driver.find_element_by_xpath('//*[@id="desprops"]').send_keys("this wlishlist is for test")
    #     driver.find_element_by_xpath('//*[@id="country"]').clear()
    #     driver.find_element_by_xpath('//*[@id="country"]').send_keys("Australia")
    #     driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
    #     driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
    #     driver.find_element_by_xpath('//*[@id="adderss"]').clear()
    #     driver.find_element_by_xpath('//*[@id="adderss"]').send_keys("noemwr test dsop")
    #     driver.find_element_by_xpath('//*[@id="phone"]').clear()
    #     driver.find_element_by_xpath('//*[@id="phone"]').send_keys("12222112133")
    #     driver.find_element_by_xpath('//*[@id="postcode"]').clear()
    #     driver.find_element_by_xpath('//*[@id="postcode"]').send_keys("518993")
    #     driver.find_element_by_xpath('//*[@id="time"]').clear()
    #     driver.find_element_by_xpath('//*[@id="time"]').send_keys("05192022")
    #     driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div/form/div[5]/button').click()
    #     sleep(10)
    #     curr_url = driver.current_url
    #     self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
    #     sleep(1)
    #
    #
    # def bad_input_no_input(self):
    #     """Generate wishlist - no_input"""
    #     driver = self.driver
    #     driver.find_element_by_xpath('//*[@id="titleP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="titleP"]').send_keys("test two")
    #     driver.find_element_by_xpath('//*[@id="firstP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="firstP"]').send_keys("reni")
    #     driver.find_element_by_xpath('//*[@id="lastP"]').clear()
    #     driver.find_element_by_xpath('//*[@id="lastP"]').send_keys("niei")
    #     driver.find_element_by_xpath('//*[@id="desprops"]').clear()
    #     driver.find_element_by_xpath('//*[@id="desprops"]').send_keys("this wlishlist is for test")
    #     driver.find_element_by_xpath('//*[@id="country"]').clear()
    #     driver.find_element_by_xpath('//*[@id="country"]').send_keys("Australia")
    #     driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
    #     driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
    #     driver.find_element_by_xpath('//*[@id="adderss"]').clear()
    #     driver.find_element_by_xpath('//*[@id="adderss"]').send_keys("noemwr test dsop")
    #     driver.find_element_by_xpath('//*[@id="phone"]').clear()
    #     driver.find_element_by_xpath('//*[@id="phone"]').send_keys("12222112133")
    #     driver.find_element_by_xpath('//*[@id="postcode"]').clear()
    #     driver.find_element_by_xpath('//*[@id="postcode"]').send_keys("518993")
    #     driver.find_element_by_xpath('//*[@id="time"]').clear()
    #     driver.find_element_by_xpath('//*[@id="time"]').send_keys("05192022")
    #     driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div/form/div[5]/button').click()
    #     sleep(5)
    #     curr_url = driver.current_url
    #     self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
    #     sleep(1)


    def tearDown(self):
        self.driver.quit()

if __name__ == '__main__':
    # print()
    print(list(set(dir(TestWhlistList)) ^ set(dir(unittest.TestCase))))