/*
 * @Author: your name
 * @Date: 2022-01-25 16:04:29
 * @LastEditTime: 2022-01-25 21:30:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-netdisk\src\pages\login\index.tsx
 */
import './index.less'
import { Input, Button } from 'antd'
import { UserOutlined, LockOutlined, GithubFilled, MailOutlined } from '@ant-design/icons';
import logo from '../../logo.svg'


function Login() {


  return (
    <div>
      <div className="login">
        <div className="login_card">
          <div className="login_card_content">
            <div style={{textAlign:"center",marginTop:20}}>
              <img className="login_card_content_logo"  src={logo}/>
            </div>

            <div className="login_card_content_form">
              <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
              <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} style={{marginTop:10}} />
            </div>
            <Button style={{marginTop:20}} type="primary" block>
              登录
            </Button>

            <div className="login_card_content_bottom">
              <div style={{marginRight:20}}>
                <a href="https://github.com/kirazZ1"><GithubFilled style={{fontSize :30,color:"#9b9b9b"}} /></a>
              </div>
              <div style={{marginLeft:20}}>
                <MailOutlined style={{fontSize :30,color:"#9b9b9b"}} />
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