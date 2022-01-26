/*
 * @Author: KiraZz1
 * @Date: 2022-01-25 16:04:29
 * @LastEditTime: 2022-01-26 19:40:58
 * @LastEditors: Please set LastEditors
 * @Description: 登录页面
 */
import './index.less'
import { useState } from 'react'
import { Input, Button, Form, message } from 'antd'
import { UserOutlined, LockOutlined, GithubFilled, MailOutlined } from '@ant-design/icons'
import logo from '../../logo.svg'
import { loginRules } from '../../utils/rules'

const Item = Form.Item

const { userIdRules, passwdRules } = loginRules
function Login() {
  const [userId, setUserId] = useState("")
  const [passwd, setPasswd] = useState("")

  function changeValue(e: React.ChangeEvent<HTMLInputElement>, type: string) {
    if (type === "userId") {
      setUserId(e.target.value);
    } else {
      setPasswd(e.target.value);
    }
  }

  function onFinishFailed(err: any) {
    const { errorFields: [firstErr] } = err
    const { errors: [errMsg] } = firstErr
    message.error(errMsg)
  }

  function onFinish() {
    message.success("登陆成功!")
  }

  return (
    <div>
      <div className="login">
        <div className="login_card">
          <div className="login_card_content">
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <img className="login_card_content_logo" src={logo} />
            </div>
            <div className="login_card_content_form">
              <Form
                onFinishFailed={(err: any) => { onFinishFailed(err) }}
                onFinish={() => { onFinish() }}
              >
                <Item
                  name="userId"
                  rules={userIdRules}
                >
                  <Input placeholder="请输入用户名" value={userId} onChange={(e) => { changeValue(e, "userId") }} prefix={<UserOutlined />} />
                </Item>
                <Item
                  name="passwd"
                  rules={passwdRules}
                >
                  <Input.Password placeholder="请输入密码" value={passwd} onChange={(e) => { changeValue(e, "passwd") }} prefix={<LockOutlined />} />
                </Item>
                <Form.Item >
                  <Button type="primary" htmlType="submit" block>
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="login_card_content_bottom">
              <div style={{ marginRight: 20 }}>
                <a href="https://github.com/kirazZ1"><GithubFilled style={{ fontSize: 30, color: "#9b9b9b" }} /></a>
              </div>
              <div style={{ marginLeft: 20 }}>
                <MailOutlined style={{ fontSize: 30, color: "#9b9b9b" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login_footer">
      </div>
    </div>

  )
}

export default Login