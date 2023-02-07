import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './pages/main'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './components/Dashboard';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Main/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/register' element={<Register/>}></Route>
      <Route exact path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
  )
}

export default App;
