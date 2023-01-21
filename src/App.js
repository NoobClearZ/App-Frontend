import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './pages/main'
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Main/>}></Route>
    </Routes>
  )
}

export default App;
