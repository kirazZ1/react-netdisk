/*
 * @Author: your name
 * @Date: 2022-01-26 14:44:04
 * @LastEditTime: 2022-01-26 14:53:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-netdisk\src\pages\404\index.ts
 */
import { Result, Button } from 'antd'

function NotFound(){
    return (
        <Result
            status="404"
            title="404"
            subTitle="页面走丢了捏~~"
            extra={<Button type="primary">返回登录页面</Button>}
        />
    )
}

export default NotFound