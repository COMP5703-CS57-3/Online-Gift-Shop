import unittest
from time import sleep

from selenium import webdriver

from frontend.Testing.chrome_options import chrome_options


class TestAccount(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome(options=chrome_options)  # 不显示浏览器，静默模式
        # self.driver = webdriver.Chrome()
        self.driver.get("")

    def normal(self):
        """some description"""
        driver = self.driver
        sleep(8)
        self.assertEqual("", "")  # 预期测试结果

    def tearDown(self):
        self.driver.quit()