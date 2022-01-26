/*
 * @Author: your name
 * @Date: 2022-01-26 08:12:46
 * @LastEditTime: 2022-01-26 15:22:59
 * @LastEditors: Please set LastEditors
 * @Description: 鉴权路由组件
 */
import { useEffect } from 'react'
import { Route, Navigate } from 'react-router-dom'

import { message } from 'antd';

interface props {
    children: JSX.Element;
    isAuth: () => boolean;
}

export const ProtectedRoute = (props: props) => {
    //鉴权API调用
    if (props.isAuth()) {
        return props.children
    } else {
        useEffect(() => message.error("请先登录！", 1))
        return <Navigate to={'/login'} replace />
    }
}
