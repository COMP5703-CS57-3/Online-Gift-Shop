import random
import unittest
from time import sleep

from selenium import webdriver


class TestLogin(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/login")

    # self.driver.implicitly_wait(10)

    def normal(self):
        """Can login with correct username and password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("2910842215@qq.com")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345678")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(5)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/")  # 预期测试结果
        sleep(1)

    # driver.find_element_by_partial_link_text("CSDN").click()
    # sleep(5)
    def good_username_bad_password(self):
        """Cannot login with correct username and bad password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("2910842215@qq.com")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345677")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(3)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "Please input correct password")  # 预期测试结果
        sleep(1)

    def incorrect_username_good_password(self):
        """Cannot login with incorrect username and correct password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("2910842225@qq.com")
        driver.find_element_by_xpath('//*[@id="password"]').clear()
        driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345678")
        driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
        sleep(3)
        dig_alert = driver.switch_to.alert

        self.assertEqual(dig_alert.text, "User did not exit, please sign up first")  # 预期测试结果
        sleep(1)

    def bad_username_good_password(self):
        """Cannot login with bad username and correct password"""
        driver = self.driver
        driver.find_element_by_xpath('//*[@id="email"]').clear()
        driver.find_element_by_xpath('//*[@id="email"]').send_keys("2910842225")
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

    def tearDown(self):
        self.driver.quit()


class TestSignUp(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/signup")

    def all_empty(self):
        """Cannot sign up with empty space"""
        driver = self.driver
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[1]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[1]/div/input').send_keys("")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[2]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[2]/div/input').send_keys("")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[3]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[3]/div/input').send_keys("")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[4]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[4]/div/input').send_keys("")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[5]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[5]/div/input').send_keys("")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/button').click()
        sleep(3)
        self.assertEqual(driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[1]/p').text, "* Nick name is empty")
        self.assertEqual(driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[2]/p').text, "* Email is empty")
        self.assertEqual(driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[3]/p').text, "* Phone number is empty")
        self.assertEqual(driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[4]/p').text, "* Password is empty")
        sleep(1)
    def bad_input(self):
        """Cannot sign up with bad nickname or invalid password or invalid E-mail or invalid phone number or incorrect confirm password """
        driver = self.driver
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[1]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[1]/div/input').send_keys("@@@@@@")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[2]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[2]/div/input').send_keys("12345")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[3]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[3]/div/input').send_keys("123123213")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[4]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[4]/div/input').send_keys("1234")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[5]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[5]/div/input').send_keys("12345")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/button').click()
        sleep(3)
        self.assertEqual(driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[1]/p').text, "* Nick name should only allow a-zA-z0-9_")
        self.assertEqual(driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[2]/p').text, "* Please input a valid email")
        self.assertEqual(driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[3]/p').text, "* Please input a valid phone number")
        self.assertEqual(driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[4]/p').text, "* Password must be more than eight characters")
        self.assertEqual(driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[5]/p').text, "* Please confirm your input")
        sleep(1)
    def normal(self):
        """Resister successfully after entering the required information"""
        driver = self.driver
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[1]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[1]/div/input').send_keys("Daniel")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[2]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[2]/div/input').send_keys(str(random.randint(10000000,99999999))+"@qq.com")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[3]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[3]/div/input').send_keys("18633617653")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[4]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[4]/div/input').send_keys("12345678")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[5]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[5]/div/input').send_keys("12345678")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/button').click()
        sleep(5)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/login")  # 预期测试结果
        sleep(1)

    def used_email(self):
        """Cannot resister with the email which is already used"""
        driver = self.driver
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[1]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[1]/div/input').send_keys("Daniel")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[2]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[2]/div/input').send_keys("2910842215@qq.com")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[3]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[3]/div/input').send_keys("18633617653")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[4]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[4]/div/input').send_keys("12345678")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[5]/div/input').clear()
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[5]/div/input').send_keys("12345678")
        driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/button').click()
        sleep(3)

        self.assertEqual(driver.find_element_by_xpath('/html/body/div[1]/div/main/div/form/div[2]/p').text,
                         "* This Email have been used, please change your email or login")
        sleep(1)

    def tearDown(self):
        self.driver.quit()


if __name__ == '__main__':
    # print()
    print(list(set(dir(TestLogin)) ^ set(dir(unittest.TestCase))))
