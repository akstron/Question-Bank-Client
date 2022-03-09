import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import SignUp from './pages/signup'
import AddQuestion from './pages/addquestion'
import Home from './pages/home'

function App() {

  
  // useEffect(() => {
  //   fetch("http://localhost:8000/api")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.message))
  //     .catch((err)=> console.log(err))
  // }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='addquestion' element={<AddQuestion/>}/>
      <Route path='home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;
