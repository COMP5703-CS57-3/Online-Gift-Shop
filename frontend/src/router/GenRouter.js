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
import CategoryG from "../Components/Category/CategoryG";
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

const routes = [
    {
        path: '/',
        auth: false,
        component: Homepage,
        children: [
            {
                path: '',
                auth: false,
                component: MainBody

            },
            {
                path: '/cart',
                auth: false,
                component: Cart
            },
            {
                path: '/wishlist',
                auth: true,
                component: WishList
            }
        ]
    },{
        path: '/wish',
        auth: false,
        component: WishContentProvider,
        children: [
            {
                path: '',
                auth: false,
                component: CategoryW

            },
        ]
    },
    {
        path: '/wishlist/:wishlist_id',
        auth: false,
        component: WishListContentProvider
    }, {
        path: '/cart/:id',
        auth: false,
        component: DetailContentProvider
    }, {
        path: '/wishForm',
        auth: false,
        component: WishFormProvider
    }, {
        path: '/login',
        auth: false,
        component: LogIn
    }, {
        path: '/signup',
        auth: false,
        component: SignUp
    },
    {
        path: '/account',
        auth: true,
        component: Account
    },
    {
        path: '/findpwd',
        auth: true,
        component: FPassword
    },
    {
        path: '/paytest',
        auth: false,
        component: Payc
    },
    {
        path: '/cus',
        auth: false,
        component: Customers
    },
    {
        path: '/admin',
        auth: true,
        component: Dashboard,
        children: [
            {
                path: '/admin/order',
                auth: true,
                component: AdminOrderList
            },
            {
                path: '/admin/user',
                auth: true,
                component: AdminUserList
            },
            {
                path: '/admin/gift',
                auth: true,
                component: AdminGiftList
            },
            {
                path: '/admin/giftui',
                auth: false,
                component: Gifts
            },
            {
                path: '/admin/addItem',
                auth: true,
                component: AddItemForm
            },
        ]
    },
    {
        path: '/*',
        auth: false,
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
        item.element = <div
        >
            {/* 把懒加载的异步路由变成组件装载进去 */}
            {/*<BeforeEach/>*/}
            <item.component >
            </item.component>

        </div>

        return item
    })
}

const Router = () => useRoutes(generateRouter(routes))

const checkRouterAuth = (path) => {
    return checkAuth(routes, path)
}
export {Router, checkRouterAuth}
