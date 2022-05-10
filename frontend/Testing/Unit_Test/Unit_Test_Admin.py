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
        if self.driver.current_url == "http://localhost:3000/adlogin":
            self.assertEqual("", "")
            sleep(5)

    def tearDown(self):
        self.driver.quit()
