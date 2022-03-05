import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import SignUp from './pages/signup'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
