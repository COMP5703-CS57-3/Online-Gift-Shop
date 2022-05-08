import unittest
from time import sleep

from selenium import webdriver


class TestLogin(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/login")

    # self.driver.implicitly_wait(10)

    def normal(self):
        """Login with correct username and password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("2910842215@qq.com")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345678")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(5)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/")  # 预期测试结果
        sleep(5)

    # driver.find_element_by_partial_link_text("CSDN").click()
    # sleep(5)
    def bad_password(self):
        """Login with correct username and bad password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("2910842215@qq.com")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345677")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(5)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "Please input correct password")  # 预期测试结果
        sleep(1)

    def tearDown(self):
        self.driver.quit()
