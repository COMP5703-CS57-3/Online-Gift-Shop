import {useRoutes} from "react-router-dom";
import React from 'react'
import Homepage from "../Components/homepage/Homepage"
import LogIn from "../Components/login";
import SignUp from "../Components/signup";
import NoMatch from "../Components/nomatch";
import Cart from "../Components/Cart/Cart";
import DetailContentProvider from "../Components/Detail/DetailContentProvider";
import Account from "../Components/account";
import WishList from "../Components/wishlist/WishList";
import WishListContentProvider from "../Components/Detail/WishListContentProvider";
import WishFormProvider from "../Components/wishlist/WishFormProvider";
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

const routes = [
    {
        path: '/',
        auth: false,
        role:["user","admin"],
        component: Homepage,
        children: [
            {
                path: '',
                auth: false,
                role: ["user", "admin"],
                component: MainBody

            },
            {
                path: '/cart',
                auth: false,
                role: ["user", "admin"],
                component: Cart
            },
            {
                path: '/wishlist',
                auth: true,
                role: ["user", "admin"],

                component: WishList
            }
        ]
    }, {
        path: '/wish',
        auth: false,
        component: WishContentProvider,
        role:["user","admin"],
        children: [
            {
                path: '',
                auth: false,
                component: CategoryW

            },
        ]
    },
    {
        path: '/wishlist/:id',
        auth: false,
        role:["user","admin"],
        component: WishListContentProvider
    }, {
        path: '/cart/:id',
        auth: false,
        role:["user","admin"],
        component: DetailContentProvider
    }, {
        path: '/wishForm',
        auth: false,
        role:["user","admin"],
        component: WishFormProvider
    }, {
        path: '/login',
        auth: false,
        role:["user","admin"],
        component: LogIn
    }, {
        path: '/signup',
        auth: false,
        role:["user","admin"],
        component: SignUp
    },
    {
        path: '/account',
        auth: true,
        role:["user","admin"],
        component: Account
    },
    {
        path: '/findpwd',
        auth: false,
        role:["user","admin"],
        component: FPassword
    },
    {
        path: '/paytest',
        auth: false,
        role:["user","admin"],
        component: Payc
    },
    {
        path: '/order',
        auth: false,
        component: OrderP,
        role:["user","admin"],
        children: [
            {
                path: '/order/myorder',
                auth: false,
                role: ["user", "admin"],
                component: MyOrder
            },
            {
                path: '/order/createOrder/:id',
                auth: false,
                role: ["user", "admin"],
                component: CreateOrder
            },
            {
                path: '/order/pay',
                auth: false,
                role: ["user", "admin"],
                component: Payc
            },
            {
                path: '/order/orderDetail/:number',
                auth: false,
                role: ["user", "admin"],
                component: OrderDetail
            }
        ]
    },
    {
        path: '/admin',
        auth: true,
        component: Dashboard,
        role:["admin"],
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
                auth: false,
                component: Gifts,
                role: ["admin"],
            },
            {
                path: '/admin/cui',
                auth: false,
                component: Customers,
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
        role:["user","admin"],
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

            <BeforeEach >
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
