import unittest
from time import sleep

from selenium import webdriver

from frontend.Testing.chrome_options import chrome_options


class TestAdmin(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome(options=chrome_options)  # 不显示浏览器，静默模式
        # self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000/administer")
        if self.driver.current_url == "http://localhost:3000/adlogin":
            driver = self.driver
            driver.find_element_by_xpath('//*[@id="email"]').clear()
            driver.find_element_by_xpath('//*[@id="email"]').send_keys("12345@giftshop.com")
            driver.find_element_by_xpath('//*[@id="password"]').clear()
            driver.find_element_by_xpath('//*[@id="password"]').send_keys("12345678")
            driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
            sleep(5)

    def dashboard(self):
        driver = self.driver
        curr_url = driver.current_url
        driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/nav/div[1]').click()
        self.assertEqual(curr_url, "http://localhost:3000/administer")
        sleep(1)


    def accountManagement(self):
        driver = self.driver
        driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/nav/div[2]').click()
        sleep(1)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/administer/cui")

    def GiftManagement(self):
        driver = self.driver
        driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/nav/div[3]').click()
        sleep(1)
        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/administer/gui")

    def OrderManagement(self):
        driver = self.driver
        driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/nav/div[4]').click()

        curr_url = driver.current_url
        self.assertEqual(curr_url, "http://localhost:3000/administer/oui")

    def addGift(self):
        driver = self.driver
        driver.find_element_by_xpath(
            '//*[@id="root"]/div/div/div/nav/div[3]').click()
        sleep(100)
        if self.driver.current_url == "http://localhost:3000/administer/gui":
            driver.find_element_by_xpath(
                '//*[@id="root"]/div/main/main/div/div[1]/div[1]/div/button[1]').click()
            sleep(10)
            driver.find_element_by_xpath('//*[@id="mui-40"]"]').send_keys("gift name")
            driver.find_element_by_xpath('//*[@id="mui-11"]').send_keys("123")
            driver.find_element_by_xpath('//*[@id="mui-13"]').send_keys("80")
            driver.find_element_by_xpath('//*[@id="mui-14"]').send_keys("gift description")
            driver.find_element_by_xpath('//*[@id="mui-924288226"]').send_keys("Birthday")
            driver.find_element_by_xpath('//*[@id="mui-556043016"]').send_keys("Male")
            driver.find_element_by_xpath('//*[@id="mui-630284639"]').send_keys("Young")
            driver.find_element_by_xpath('/html/body/div[2]/div[3]/div/div[14]/div[2]/div/div/input').send_keys("S")
            driver.find_element_by_xpath('/html/body/div[2]/div[3]/div/div[14]/div[3]/div/div/input').send_keys("300")
            driver.find_element_by_xpath('//*[@id="mui-18"]').send_keys("url123")
            curr_url = driver.current_url
            self.assertEqual(curr_url, "http://localhost:3000/administer/gui")



    def tearDown(self):
        self.driver.quit()
