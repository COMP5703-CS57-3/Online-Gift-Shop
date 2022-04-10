import {useRoutes} from "react-router-dom";
import React, {Suspense} from 'react'
import Homepage from "../homepage/Homepage"
import LogIn from "../login";
import SignUp from "../signup";
import NoMatch from "../nomatch";
import Cart from "../Cart/Cart";
import DetailContentProvider from "../Detail/DetailContentProvider";
import Account from "../account";
import WishList from "../wishlist/WishList";
import WishListContentProvider from "../Detail/WishListContentProvider";
import WishFormProvider from "../wishlist/WishFormProvider";
import CategoryG from "../Category/CategoryG";
import FPassword from "../FPassword";
import AdminOrderList from "../admin/AdminOrderList";
import Dashboard from "../admin/Dashboard";
import AdminUserList from "../admin/AdminUserList";
import AdminGiftList from "../admin/AdminGiftList";
import AddItemForm from "../admin/AddItemForm";

const routes = [
    {
        path: '/',
        auth: false,
        component: Homepage,
        children: [
            {
                path: '',
                auth: false,
                component: CategoryG

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
        path: '/*',
        auth: false,
        component: NoMatch
    },
    {
        path: '/admin',
        auth: true,
        component: Dashboard,
        children: [
            {
                path: 'order',
                auth: true,
                component: AdminOrderList
            },
            {
                path: 'user',
                auth: true,
                component: AdminUserList
            },
            {
                path: 'gift',
                auth: true,
                component: AdminGiftList
            },
            {
                path: 'addItem',
                auth: true,
                component: AddItemForm
            },
        ]
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
        item.element = <Suspense fallback={
            <div>Loading...</div>
        }>
            {/* 把懒加载的异步路由变成组件装载进去 */}
            <item.component/>
        </Suspense>
        return item
    })
}

const Router = () => useRoutes(generateRouter(routes))

const checkRouterAuth = (path) => {
    return checkAuth(routes, path)
}
export {Router, checkRouterAuth}
