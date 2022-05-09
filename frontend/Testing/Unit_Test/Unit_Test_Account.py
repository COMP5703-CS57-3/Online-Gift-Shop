import unittest
from time import sleep

from selenium import webdriver

from frontend.Testing.chrome_options import chrome_options


class TestAccount(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome(options=chrome_options)  # 不显示浏览器，静默模式
        # self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/account")
        if self.driver.current_url == "http://localhost:3000/login":
            self.driver.find_element_by_xpath('//*[@id="email"]').clear()
            self.driver.find_element_by_xpath('//*[@id="email"]').send_keys("2910842215@qq.com")
            self.driver.find_element_by_xpath('//*[@id="password"]').clear()
            self.driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345678")
            self.driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
            sleep(5)

    def normal(self):
        """Is present"""
        driver = self.driver
        sleep(10)
        self.assertNotEqual(driver.find_element_by_xpath('//*[@id="mui-2"]').get_attribute("value"), "")
        self.assertNotEqual(driver.find_element_by_xpath('//*[@id="mui-3"]').get_attribute("value"), "")
        self.assertNotEqual(driver.find_element_by_xpath('//*[@id="mui-6"]').get_attribute("value"), "")
        self.assertNotEqual(
            driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/main/div/div/div[1]/div[1]/div[1]/div/h5').get_attribute("value"),
            "")
        self.assertNotEqual(
            driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/main/div/div/div[1]/div[1]/div[1]/div/p[1]').get_attribute("value"),
            "")

    def change_information(self):
        """Can change information"""
        driver = self.driver

        driver.find_element_by_xpath(
            '//*[@id="root"]/div/div[2]/main/div/div/div[2]/form/div/div[3]/div/div/button').click()
        self.assertEqual(driver.find_element_by_xpath(
            '//*[@id="root"]/div/div[2]/main/div/div/div[2]/form/div/div[3]/div/div/button[1]').text, "SAVE DETAILS")
        driver.find_element_by_xpath(
            '//*[@id="root"]/div/div[2]/main/div/div/div[2]/form/div/div[3]/div/div/button[2]').click()
        self.assertEqual(driver.find_element_by_xpath(
            '//*[@id="root"]/div/div[2]/main/div/div/div[2]/form/div/div[3]/div/div/button[1]').text, "CHANGE PROFILES")

    def change_information_with_bad_input(self):
        """Cannot change information with invalid nick name or phone number"""
        driver = self.driver
        driver.find_element_by_xpath(
            '//*[@id="root"]/div/div[2]/main/div/div/div[2]/form/div/div[3]/div/div/button').click()
        driver.find_element_by_xpath('//*[@id="mui-2"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-2"]').send_keys("a")
        driver.find_element_by_xpath('//*[@id="mui-6"]').clear()
        driver.find_element_by_xpath('//*[@id="mui-6"]').send_keys('a')
        driver.find_element_by_xpath(
            '//*[@id="root"]/div/div[2]/main/div/div/div[2]/form/div/div[3]/div/div/button[1]').click()
        sleep(1)
        self.assertEqual(driver.find_element_by_xpath('//*[@id="mui-2-helper-text"]').text,
                         "* Nick name should be at least 4 characters")
        self.assertEqual(driver.find_element_by_xpath('//*[@id="mui-6-helper-text"]').text,
                         "* Please input a valid phone number")

    def tearDown(self):
        self.driver.quit()
