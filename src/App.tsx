/*
 * @Author: your name
 * @Date: 2022-01-25 15:17:39
 * @LastEditTime: 2022-01-25 19:12:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-netdisk\src\App.tsx
 */

import Login from "./pages/login"
import { Route, Routes} from 'react-router-dom';
import './App.css'
function App() {


  return (
    <div className="App">
     <Routes>
       <Route path="/login" element={Login()}/>
     </Routes>
    </div>
  )
}

export default App
