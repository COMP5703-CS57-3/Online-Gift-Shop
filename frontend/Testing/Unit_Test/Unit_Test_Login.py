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
    def good_username_bad_password(self):
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

    def incorrect_username_good_password(self):
        """Login with incorrect username and correct password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("2910842225@qq.com")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345678")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(5)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "User did not exit, please sign up first")  # 预期测试结果
        sleep(1)

    def bad_username_good_password(self):
        """Login with bad username and correct password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("2910842225")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345678")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(5)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "please input valid Email")  # 预期测试结果
        sleep(1)

    def empty_username_empty_password(self):
        """Login with empty username and empty password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(5)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "please input password")  # 预期测试结果
        sleep(1)

    def bad_username_empty_password(self):
        """Login with empty username and empty password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("1")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(5)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "please input password")  # 预期测试结果
        sleep(1)

    def empty_username_bad_password(self):
        """Login with empty username and empty password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("1")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(5)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "please input valid Email")  # 预期测试结果
        sleep(1)

    def tearDown(self):
        self.driver.quit()


if __name__ == '__main__':
    # print()
    print(list(set(dir(TestLogin)) ^ set(dir(unittest.TestCase))))
