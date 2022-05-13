import random
import unittest
from time import sleep

from selenium import webdriver
from selenium.webdriver import Keys

class TestWhlistList(unittest.TestCase):
    def setUp(self):
        # self.driver = webdriver.Chrome(options=chrome_options)  # 不显示浏览器，静默模式
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000")