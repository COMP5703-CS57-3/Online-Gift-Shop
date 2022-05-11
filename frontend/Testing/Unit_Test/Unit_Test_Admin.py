import unittest
from time import sleep

from selenium import webdriver

from frontend.Testing.chrome_options import chrome_options


class TestAdmin(unittest.TestCase):
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

    def tearDown(self):
        self.driver.quit()
