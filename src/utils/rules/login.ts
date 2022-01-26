/*
 * @Author: your name
 * @Date: 2022-01-26 17:34:10
 * @LastEditTime: 2022-01-26 19:18:44
 * @LastEditors: Please set LastEditors
 * @Description: 登录校验规则模块
 */
import { Rule } from 'antd/lib/form'

const userIdRules: Array<Rule> = [
    { 
        required: true, 
        message: '请输入用户名!' 
    }
]

const passwdRules: Array<Rule> = [
    { 
        required: true, 
        message: '请输入密码!' 
    }
]

export default {
    userIdRules,
    passwdRules
}