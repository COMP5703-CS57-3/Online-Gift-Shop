import random
import unittest
from time import sleep

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

from frontend.Testing.Unit_Test.Unit_Test_Login import chrome_options


class TestWhlistList(unittest.TestCase):
    def setUp(self):
        # self.driver = webdriver.Chrome(options=chrome_options)  # 不显示浏览器，静默模式
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/wish/wishForm")
        if self.driver.current_url == "http://localhost:3000/login":
            self.driver.find_element_by_xpath('//*[@id="email"]').clear()
            self.driver.find_element_by_xpath('//*[@id="email"]').send_keys("2910842215@qq.com")
            self.driver.find_element_by_xpath('//*[@id="password"]').clear()
            self.driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345678")
            self.driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
            sleep(5)

    # self.driver.implicitly_wait(10)

    def normal(self):
        """Can generated normal wlishlist"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="mui-5"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-5"]').send_keys("test two")
        driver.find_element_by_xpath('//*[@id="mui-6"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-6"]').send_keys("reni")
        driver.find_element_by_xpath('//*[@id="mui-7"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-7"]').send_keys("niei")
        driver.find_element_by_xpath('//*[@id="mui-8"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-8"]').send_keys("this wlishlist is for test")
        driver.find_element_by_xpath('//*[@id="mui-10"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-10"]').send_keys("Australia")
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("noemwr test dsop")
        driver.find_element_by_xpath('//*[@id="mui-12"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-12"]').send_keys("12222112133")
        driver.find_element_by_xpath('//*[@id="mui-13"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-13"]').send_keys("518993")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("05192022")
        sleep(5)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
        sleep(1)

    # driver.find_element_by_partial_link_text("CSDN").click()
    # sleep(5)
    def bad_input_Special_Symbol(self):
        """Generate Wishlist--Special Symbol Input """
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="mui-5"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-5"]').send_keys("#@!$!#!@#!")
        driver.find_element_by_xpath('//*[@id="mui-6"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-6"]').send_keys("$#@$$#%@")
        driver.find_element_by_xpath('//*[@id="mui-7"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-7"]').send_keys("$#@$@!#!@#!")
        driver.find_element_by_xpath('//*[@id="mui-8"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-8"]').send_keys("$#@$##!@#!@!#")
        driver.find_element_by_xpath('//*[@id="mui-10"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-10"]').send_keys("Australia")
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("#!$$!@#!@#!@")
        driver.find_element_by_xpath('//*[@id="mui-12"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-12"]').send_keys("$#@%@!#@!")
        driver.find_element_by_xpath('//*[@id="mui-13"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-13"]').send_keys("$#@!@#!@")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("$#%$##@#!#@!")
        sleep(5)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
        sleep(1)


    def bad_input_pure_digital_input(self):
        """Generate wishlist - pure digital input"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="mui-5"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-5"]').send_keys("3213412312")
        driver.find_element_by_xpath('//*[@id="mui-6"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-6"]').send_keys("432413432342")
        driver.find_element_by_xpath('//*[@id="mui-7"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-7"]').send_keys("1432143253242")
        driver.find_element_by_xpath('//*[@id="mui-8"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-8"]').send_keys("3452431231")
        driver.find_element_by_xpath('//*[@id="mui-10"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-10"]').send_keys("423431321")
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("3424132131")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("432413112")
        driver.find_element_by_xpath('//*[@id="mui-12"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-12"]').send_keys("423324311311")
        driver.find_element_by_xpath('//*[@id="mui-13"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-13"]').send_keys("42313121")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("03221998")
        sleep(5)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
        sleep(1)


    def bad_input_Pure_English_Input(self):
        """Generate Wishlist--Pure_English_Input"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="mui-5"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-5"]').send_keys("test two")
        driver.find_element_by_xpath('//*[@id="mui-6"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-6"]').send_keys("reni")
        driver.find_element_by_xpath('//*[@id="mui-7"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-7"]').send_keys("niei")
        driver.find_element_by_xpath('//*[@id="mui-8"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-8"]').send_keys("this wlishlist is for test")
        driver.find_element_by_xpath('//*[@id="mui-10"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-10"]').send_keys("Australia")
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("noemwr test dsop")
        driver.find_element_by_xpath('//*[@id="mui-12"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-12"]').send_keys("12222112133")
        driver.find_element_by_xpath('//*[@id="mui-13"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-13"]').send_keys("518993")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("05192022")
        sleep(5)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
        sleep(1)


    def bad_input_pure_Number_and_English_Combination_Input(self):
        """Generate Wish List--Number_and_English_Combination_Input"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="mui-5"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-5"]').send_keys("test two")
        driver.find_element_by_xpath('//*[@id="mui-6"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-6"]').send_keys("reni")
        driver.find_element_by_xpath('//*[@id="mui-7"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-7"]').send_keys("niei")
        driver.find_element_by_xpath('//*[@id="mui-8"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-8"]').send_keys("this wlishlist is for test")
        driver.find_element_by_xpath('//*[@id="mui-10"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-10"]').send_keys("Australia")
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("noemwr test dsop")
        driver.find_element_by_xpath('//*[@id="mui-12"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-12"]').send_keys("12222112133")
        driver.find_element_by_xpath('//*[@id="mui-13"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-13"]').send_keys("518993")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("05192022")
        sleep(5)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
        sleep(1)


    def bad_input_Special_Symbol_English_Combination_Input(self):
        """Generate Wish List--Special_Symbol_English_Combination_Input"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="mui-5"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-5"]').send_keys("test two")
        driver.find_element_by_xpath('//*[@id="mui-6"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-6"]').send_keys("reni")
        driver.find_element_by_xpath('//*[@id="mui-7"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-7"]').send_keys("niei")
        driver.find_element_by_xpath('//*[@id="mui-8"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-8"]').send_keys("this wlishlist is for test")
        driver.find_element_by_xpath('//*[@id="mui-10"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-10"]').send_keys("Australia")
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("noemwr test dsop")
        driver.find_element_by_xpath('//*[@id="mui-12"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-12"]').send_keys("12222112133")
        driver.find_element_by_xpath('//*[@id="mui-13"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-13"]').send_keys("518993")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("05192022")
        sleep(10)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
        sleep(1)


    def bad_input_no_input(self):
        """Generate wishlist - no_input"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="mui-5"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-5"]').send_keys("test two")
        driver.find_element_by_xpath('//*[@id="mui-6"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-6"]').send_keys("reni")
        driver.find_element_by_xpath('//*[@id="mui-7"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-7"]').send_keys("niei")
        driver.find_element_by_xpath('//*[@id="mui-8"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-8"]').send_keys("this wlishlist is for test")
        driver.find_element_by_xpath('//*[@id="mui-10"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-10"]').send_keys("Australia")
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').clear()
        driver.find_element_by_xpath('//*[@id="combo-box-demo"]').send_keys("New South Wales")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("noemwr test dsop")
        driver.find_element_by_xpath('//*[@id="mui-12"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-12"]').send_keys("12222112133")
        driver.find_element_by_xpath('//*[@id="mui-13"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-13"]').send_keys("518993")
        driver.find_element_by_xpath('//*[@id="mui-11"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("05192022")
        sleep(5)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/wish")  # 预期测试结果
        sleep(1)


    def tearDown(self):
        self.driver.quit()

if __name__ == '__main__':
    # print()
    print(list(set(dir(TestWhlistList)) ^ set(dir(unittest.TestCase))))