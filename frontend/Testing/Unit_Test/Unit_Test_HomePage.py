import random
import unittest
from time import sleep

from selenium import webdriver
from selenium.webdriver import Keys

class TestCategory(unittest.TestCase):
    def setUp(self):
        # self.driver = webdriver.Chrome(options=chrome_options)  # 不显示浏览器，静默模式
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.driver.refresh()
        self.driver.get("http://localhost:3000")
        if self.driver.current_url == "http://localhost:3000/login":
            self.driver.find_element_by_xpath('//*[@id="email"]').clear()
            self.driver.find_element_by_xpath('//*[@id="email"]').send_keys("111@qq.com")
            self.driver.find_element_by_xpath('//*[@id="password"]').clear()
            self.driver.find_element_by_xpath('//*[@id="password"]').send_keys("1234")
            self.driver.find_element_by_xpath('//*[@id="root"]/main/div/form/button').click()
            sleep(5)
# --------------单次点击----------------------------------------------------------------------------
    def top_HotProduct(self):
        """Only choose HotProduct"""
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[1]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Electronics,Other,Young")     #预期结果
        sleep(2)

    def top_UsualGift_Clothing(self):
        """Only choose UsualGift_Clothing """
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[2]').click()
        self.driver.find_element_by_xpath('//*[@id="Clothing"]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Clothing,Female,Youth")     #预期结果
        sleep(2)

    def top_UsualGift_Shoe(self):
        """Only choose UsualGift_Shoe"""
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[2]').click()
        self.driver.find_element_by_xpath('//*[@id="Shoe"]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Shoe,Male,Elderly")     #预期结果
        sleep(2)

    def top_UsualGift_Electronics(self):
        """Only choose UsualGift_Clothing """
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[2]').click()
        self.driver.find_element_by_xpath('//*[@id="Electronics"]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Electronics,Female,Elderly")     #预期结果
        sleep(2)

    def top_UsualGift_Birthday(self):
        """Only choose UsualGift_Birthday """
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[3]').click()
        self.driver.find_element_by_xpath('//*[@id="Birthday"]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Birthday,Male,Juvenile")     #预期结果
        sleep(2)

    def top_UsualGift_Wedding(self):
        """Only choose UsualGift_Wedding """
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[3]').click()
        self.driver.find_element_by_xpath('//*[@id="Wedding"]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/h1').text
        self.assertEqual(UC_Text, "no gifts or network problem")     #预期结果
        sleep(2)

    def top_UsualGift_Christmas(self):
        """Only choose UsualGift_Christmas """
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[4]').click()
        self.driver.find_element_by_xpath('//*[@id="Christmas"]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Christmas,Other,Young")     #预期结果
        sleep(2)

    def top_UsualGift_Easter_Day(self):
        """Only choose UsualGift_Easter Day """
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[4]').click()
        self.driver.find_element_by_xpath('//*[@id="Easter Day"]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/h1').text
        self.assertEqual(UC_Text, "no gifts or network problem")     #预期结果
        sleep(2)

    def top_UsualGift_New_Year(self):
        """Only choose UsualGift_New Year """
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[5]').click()
        self.driver.find_element_by_xpath('//*[@id="New Year"]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/h1').text
        self.assertEqual(UC_Text, "no gifts or network problem")     #预期结果
        sleep(2)

    def top_UsualGift_Graduate(self):
        """Only choose UsualGift_Graduate """
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[5]').click()
        self.driver.find_element_by_xpath('//*[@id="Graduate"]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Graduate,Female,Youth")     #预期结果
        sleep(2)

    def top_UsualGift_Other(self):
        """Only choose UsualGif Other """
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[6]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "0,0,0")     #预期结果
        sleep(2)

    def side_UsualGift_Male_Juvenile(self):
        """Only choose UsualGift_Male_Juvenile """
        sleep(5)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        self.driver.find_element_by_xpath('//*[@id="mui-2-2"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Clothing,Male,Juvenile")     #预期结果
        sleep(2)

    def side_UsualGift_Male_Youth(self):
        """Only choose UsualGift_Male_Youth """
        sleep(5)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-3"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Birthday,Male,Youth")     #预期结果
        sleep(2)

    def side_UsualGift_Male_Elderly(self):
        """Only choose UsualGift_Male_Elderly """
        sleep(5)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-4"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Shoe,Male,Elderly")     #预期结果
        sleep(2)

    def side_UsualGift_Female_Juvenile(self):
        """Only choose UsualGift_Female_Juvenile"""
        sleep(5)
        self.driver.refresh()
        sleep(5)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-6"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Birthday,Female,Juvenile")     #预期结果
        sleep(2)

    def side_UsualGift_Female_Youth(self):
        """Only choose UsualGift_Female_Youth """
        sleep(6)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-7"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Clothing,Female,Youth")     #预期结果
        sleep(2)

    def side_UsualGift_Female_Elderly(self):
        """Only choose UsualGift_Female_Elderly """
        sleep(5)
        self.driver.refresh()
        sleep(5)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-9"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Clothing,Female,Elderly")     #预期结果
        sleep(2)

    def side_UsualGift_Other_Juvenile(self):
        """Only choose UsualGift_Other_Juvenile"""
        sleep(5)
        self.driver.refresh()
        sleep(5)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-10"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Other,Other,Juvenile")     #预期结果
        sleep(2)

    def side_UsualGift_Other_Youth(self):
        """Only choose UsualGift_Other_Youth"""
        sleep(5)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-11"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "WeddingCelebration,Other,Youth")     #预期结果
        sleep(2)

    def side_UsualGift_Other_Elderly(self):
        """Only choose UsualGift_Other_Elderly"""
        sleep(5)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-12"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "EasterDay,Other,Elderly")     #预期结果
        sleep(2)

#-----------------组合选项--------------------------------
    def top_Hotproduct_Male_Juvenile(self):
        """top_Hotproduct_Male_Juvenile"""
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[1]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        self.driver.find_element_by_xpath('//*[@id="mui-2-2"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Clothing,Male,Juvenile")     #预期结果
        sleep(2)

    def top_Clothing_Male_Youth(self):
        """top_Clothing_Male_Youth"""
        sleep(6)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[2]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="Clothing"]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-3"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Clothing,Male,Youth")     #预期结果
        sleep(2)

    def top_Shoe_Male_Elderly(self):
        """top_Shoe_Male_Elderly"""
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[2]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="Shoe"]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-4"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Shoe,Male,Elderly")     #预期结果
        sleep(2)

    def top_Electronics_Female_Juvenile(self):
        """top_Electronics_Female_Juvenile"""
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[2]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="Electronics"]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-6"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/h1').text
        self.assertEqual(UC_Text, "no gifts or network problem")     #预期结果
        sleep(2)

    def top_Birthday_Female_Youth(self):
        """top_Birthday_Female_Youth"""
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[3]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="Birthday"]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-7"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Birthday,Female,Youth")     #预期结果
        sleep(2)

    def top_Wedding_Female_Juvenile(self):
        """top_Wedding_Female_Juvenile"""
        sleep(5)
        self.driver.refresh()
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[3]').click()
        self.driver.find_element_by_xpath('//*[@id="Wedding"]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-6"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/h1').text
        self.assertEqual(UC_Text, "no gifts or network problem")     #预期结果
        sleep(2)

    def top_Christmas_Female_Juvenile(self):
        """top_Christmas_Female_Juvenile"""
        sleep(5)
        self.driver.refresh()
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[4]').click()
        self.driver.find_element_by_xpath('//*[@id="Christmas"]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="mui-2-6"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Christmas,Female,Juvenile")     #预期结果
        sleep(2)

    def top_NewYear_Other_Juvenile(self):
        """top_NewYear_Other_Juvenile"""
        sleep(5)
        self.driver.refresh()
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[5]').click()
        self.driver.find_element_by_xpath('//*[@id="New Year"]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        self.driver.find_element_by_xpath('//*[@id="mui-2-10"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/h1').text
        self.assertEqual(UC_Text, "no gifts or network problem")     #预期结果
        sleep(2)

    def top_Graduate_Female_Juvenile(self):
        """top_Graduate_Female_Juvenile"""
        sleep(5)
        self.driver.refresh()
        sleep(5)
        self.driver.find_element_by_xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div/div/div/button[5]').click()
        self.driver.find_element_by_xpath('//*[@id="Graduate"]').click()
        sleep(2)
        self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[1]/div[2]/div/div/button').click()
        self.driver.find_element_by_xpath('//*[@id="mui-2-6"]/div/div[2]').click()
        sleep(5)
        UC_Text = self.driver.find_element_by_xpath('//*[@id="root"]/div/div[2]/div/div[7]/div[2]/ul/div[1]/li/div/div/div[2]/div/div[1]').text
        self.assertEqual(UC_Text, "Graduate,Female,Juvenile")     #预期结果
        sleep(2)

    def tearDown(self):
                self.driver.quit()

if __name__ == '__main__':
    # print()
    print(list(set(dir(TestCategory)) ^ set(dir(unittest.TestCase))))