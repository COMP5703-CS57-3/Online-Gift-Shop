from HTMLTestRunner import HTMLTestRunner  # 导入生成HTML报告的包
from frontend.Testing.Unit_Test.Unit_Test_HomePage import TestWhlistList

from frontend.Testing.Unit_Test.Unit_Test_Login import *
from frontend.Testing.Unit_Test.Unit_Test_Account import *
from frontend.Testing.Unit_Test.Unit_Test_Admin import *
from frontend.Testing.Unit_Test.Unit_Test_AdminO import *

test_dir = './Unit_Test'

if __name__ == '__main__':
    testunit = unittest.TestSuite()  # 生成单元测试流程
    loginTestList = list(set(dir(TestLogin)) ^ set(dir(unittest.TestCase)))
    signupTestList = list(set(dir(TestSignUp)) ^ set(dir(unittest.TestCase)))
    forgetPwdTestList = list(set(dir(TestForgetPassword)) ^ set(dir(unittest.TestCase)))
    accountTestList = list(set(dir(TestAccount)) ^ set(dir(unittest.TestCase)))
    adminLoginTestList = list(set(dir(TestAdminLogin)) ^ set(dir(unittest.TestCase)))
    homepageTestList = list(set(dir(TestWhlistList)) ^ set(dir(unittest.TestCase)))
    adminTestList = list(set(dir(TestAdmin)) ^ set(dir(unittest.TestCase)))
    # for test in loginTestList:
    #     testunit.addTest(TestLogin(test))
    # for test in signupTestList:
    #     testunit.addTest(TestSignUp(test))
    # for test in adminLoginTestList:
    #     testunit.addTest(TestAdminLogin(test))
    for test in adminTestList:
          testunit.addTest(TestAdmin(test))
    # for test in forgetPwdTestList:
    #     # if test != "normal":
    #         testunit.addTest(TestForgetPassword(test))
    # for test in accountTestList:
    #     testunit.addTest(TestAccount(test))
    # for test in homepageTestList:
    #     testunit.addTest(TestWhlistList(test))
    # testunit.addTest(TestLogin("bad_password"))  # 加载测试用例
    fp = open('./unittest.html', 'wb')  # 创建测试报告，以写的方式存入某个路径
    runner = HTMLTestRunner(
        stream=fp,
        title="Online Gift Shop Testing",
        description="Testing Results："
    )
    runner.run(testunit)
    fp.close()
