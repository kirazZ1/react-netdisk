/*
 * @Author: KiraZz1
 * @Date: 2022-01-25 15:17:39
 * @LastEditTime: 2022-01-26 15:23:24
 * @LastEditors: Please set LastEditors
 * @Description: App.tsx
 */

import Login from "./pages/login"
import { Route, Routes} from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute'
import { isAuth } from './utils/auth'
import NotFound  from './pages/404'
import Dashboard from './pages/dashboard'
import './App.css'
function App() {


  return (
    <div className="App">
     <Routes>
       <Route path="/login" element={<Login/>}/>
       <Route path="/dashboard" element={
         <ProtectedRoute isAuth={isAuth}>
           <Dashboard/>
         </ProtectedRoute>
       }></Route>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
    </div>
  )
}

export default App
