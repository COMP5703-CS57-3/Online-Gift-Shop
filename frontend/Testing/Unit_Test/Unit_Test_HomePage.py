import random
import unittest
from time import sleep

from selenium import webdriver
from selenium.webdriver import Keys

class TestCategory(unittest.TestCase):
    def setUp(self):
        # self.driver = webdriver.Chrome(options=chrome_options)  # 不显示浏览器，静默模式
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000")
        if self.driver.current_url == "http://localhost:3000/login":
            self.driver.find_element_by_xpath('//*[@id="email"]').clear()
            self.driver.find_element_by_xpath('//*[@id="email"]').send_keys("111@qq.com")
            self.driver.find_element_by_xpath('//*[@id="password"]').clear()
            self.driver.find_element_by_xpath('//*[@id="password"]').send_keys("1234")
            self.driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
            sleep(5)

    def tearDown(self):
                self.driver.quit()

if __name__ == '__main__':
    # print()
    print(list(set(dir(TestCategory)) ^ set(dir(unittest.TestCase))))