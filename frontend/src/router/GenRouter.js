import {useRoutes} from "react-router-dom";
import React from 'react'
import Homepage from "../Components/homepage/Homepage"
import LogIn from "../Components/login";
import SignUp from "../Components/signup";
import NoMatch from "../Components/nomatch";
import DetailContentProvider from "../Components/Detail/DetailContentProvider";
import Account from "../Components/account";
import FPassword from "../Components/FPassword";
import AdminOrderList from "../Components/admin/AdminOrderList";
import Dashboard from "../Components/admin/Dashboard";
import AdminUserList from "../Components/admin/AdminUserList";
import AdminGiftList from "../Components/admin/AdminGiftList";
import AddItemForm from "../Components/admin/AddItemForm";
import BeforeEach from "./BeforEach";

import Payc from "../Components/Pay/Payc";
import Customers from "../Components/customers";
import Gifts from "../Components/gift";
import MainBody from "../Components/homepage/MainBody";
import WishContentProvider from "../Components/wishlist/WishContentProvider";
import CategoryW from "../Components/wishlist/CategoryW";
import OrderP from "../Components/Order/OrderP";
import MyOrder from "../Components/Order/MyOrder";
import CreateOrder from "../Components/Order/CreateOrder";
import DashItem from "../Components/admin/dashboard/dash";
import OrderDetail from "../Components/Order/OrderDetail";
import AdminLogIn from "../Components/admin/login";
import AdminSignUp from "../Components/admin/signup";
import Test from "../Components/normal/Test";
import Orders from "../Components/order";
import WishListDetail from "../Components/Detail/WishListDetail";
import WishForm from "../Components/wishlist/WishForm";

const routes = [
    {
        path: '/',
        auth: false,
        role: ["user", "admin"],
        component: Homepage,
        children: [
            {
                path: '',
                auth: false,
                role: ["user", "admin"],
                component: MainBody

            },
            // {
            //     path: '/cart',
            //     auth: false,
            //     role: ["user", "admin"],
            //     component: Cart
            // },
            {
                path: '/account',
                auth: true,
                role: ["user"],
                component: Account
            },
            {
                path: '/wish',
                auth: true,
                component: WishContentProvider,
                role: ["user"],
                children: [
                    {
                        path: '/wish',
                        auth: true,
                        component: CategoryW

                    }, {
                        path: '/wish/wishForm',
                        auth: true,
                        role: ["user"],
                        component: WishForm
                    }, {
                        path: '/wish/wishlist/:id',
                        auth: false,
                        role: ["user"],
                        component: WishListDetail
                    },

                ]
            },
            {
                path: '/order',
                auth: true,
                component: OrderP,
                role: ["user"],
                children: [
                    {
                        path: '/order/myorder',
                        auth: true,
                        role: ["user"],
                        component: MyOrder
                    },
                    {
                        path: '/order/createOrder/:id',
                        auth: true,
                        role: ["user"],
                        component: CreateOrder
                    },
                    {
                        path: '/order/pay',
                        auth: true,
                        role: ["user"],
                        component: Payc
                    },
                    {
                        path: '/order/orderDetail/:number',
                        auth: true,
                        role: ["user"],
                        component: OrderDetail
                    }
                ]
            },
            {
                path: '/gift/:id',
                auth: false,
                role: ["user", "admin"],
                component: DetailContentProvider
            }, {
                path: '/test',
                auth: false,
                role: ["user", "admin"],
                component: Test
            }
        ]
    }, {
        path: '/login',
        auth: false,
        role: ["user", "admin"],
        component: LogIn
    }, {
        path: '/signup',
        auth: false,
        role: ["user", "admin"],
        component: SignUp
    },

    {
        path: '/findpwd',
        auth: false,
        role: ["user", "admin"],
        component: FPassword
    },
    {
        path: '/paytest',
        auth: true,
        role: ["user"],
        component: Payc
    },

    {
        path: '/adlogin',
        auth: false,
        component: AdminLogIn,
        role: ["user", "admin"],
    },
    {
        path: '/adsignup',
        auth: false,
        component: AdminSignUp,
        role: ["user", "admin"],
    },
    {
        path: '/admin',
        auth: true,
        component: Dashboard,
        role: ["admin"],
        children: [
            {
                path: '',
                auth: true,
                component: DashItem,
                role: ["admin"],
            },
            {
                path: '/admin/order',
                auth: true,
                component: AdminOrderList,
                role: ["admin"],
            },
            {
                path: '/admin/user',
                auth: true,
                component: AdminUserList,
                role: ["admin"],
            },
            {
                path: '/admin/gift',
                auth: true,
                component: AdminGiftList,
                role: ["admin"],
            },
            {
                path: '/admin/gui',
                auth: true,
                component: Gifts,
                role: ["admin"],
            },
            {
                path: '/admin/cui',
                auth: true,
                component: Customers,
                role: ["admin"],
            },
            {
                path: '/admin/oui',
                auth: true,
                component: Orders,
                role: ["admin"],
            },
            {
                path: '/admin/addItem',
                auth: true,
                component: AddItemForm,
                role: ["admin"],
            },
        ]
    },
    {
        path: '/*',
        auth: false,
        role: ["user", "admin"],
        component: NoMatch
    },
]

//根据路径获取路由
const checkAuth = (routers, path) => {
    for (const data of routers) {
        if (data.path === path) return data
        if (data.children) {
            const res = checkAuth(data.children, path)
            if (res) return res
        }
    }
    return null
}
// 路由处理方式
const generateRouter = (routers) => {
    return routers.map((item) => {
        if (item.children) {
            item.children = generateRouter(item.children)
        }

        item.element =

            <BeforeEach>
                <item.component/>
            </BeforeEach>


        return item
    })
}

const Router = () => useRoutes(generateRouter(routes))

const checkRouterAuth = (path) => {
    return checkAuth(routes, path)
}


export {Router, checkRouterAuth}
