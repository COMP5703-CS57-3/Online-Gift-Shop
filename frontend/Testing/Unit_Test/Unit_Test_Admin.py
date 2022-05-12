import unittest
from time import sleep

from selenium import webdriver

from frontend.Testing.chrome_options import chrome_options


class TestAdminLogin(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.get("http://localhost:3000/administer")

    def normal(self):
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("12345@giftshop.com")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345678")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(5)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/administer")
        sleep(1)

    def good_username_bad_password(self):
        """Cannot login with correct username and bad password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("12345@giftshop.com")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345677")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(8)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "Please input correct password")  # 预期测试结果
        sleep(1)

    def incorrect_username_good_password(self):
        """Cannot login with incorrect username and correct password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("123123@giftshop.com")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345678")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(8)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "User not exit")  # 预期测试结果
        sleep(1)

    def bad_username_good_password(self):
        """Cannot login with bad username and correct password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("12345")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345678")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(3)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "please input valid Email")  # 预期测试结果
        sleep(1)

    def empty_username_empty_password(self):
        """Cannot login with empty username and empty password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(3)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "please input password")  # 预期测试结果
        sleep(1)

    def bad_username_empty_password(self):
        """Cannot login with empty username and empty password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("1")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(3)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "please input password")  # 预期测试结果
        sleep(1)

    def empty_username_bad_password(self):
        """Cannot login with empty username and empty password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("1")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(3)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "please input valid Email")  # 预期测试结果
        sleep(1)

    def go_to_sign_up(self):
        """Click and go to signup page"""
        driver = self.driver

        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/div[3]/div/a').click()
        sleep(3)
        self.assertEqual(driver.current_url, "http://localhost:3000/adsignup")  # 预期测试结果
        sleep(1)

    def tearDown(self):
        self.driver.quit()
