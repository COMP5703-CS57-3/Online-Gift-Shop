from HTMLTestRunner import HTMLTestRunner  # 导入生成HTML报告的包

from Unit_Test.Unit_Test_Login import *

test_dir = './Unit_Test'

if __name__ == '__main__':
    testunit = unittest.TestSuite()  # 生成单元测试流程
    testunit.addTest(TestLogin("normal"))
    testunit.addTest(TestLogin("bad_password"))  # 加载测试用例
    fp = open('./unittest.html', 'wb')  # 创建测试报告，以写的方式存入某个路径
    runner = HTMLTestRunner(
        stream=fp,
        title="Online Gift Shop Testing",
        description="Testing Results："
    )
    runner.run(testunit)
    fp.close()
