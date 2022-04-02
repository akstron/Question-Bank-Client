import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import SignUp from './pages/signup'
import AddQuestion from './pages/addQuestion'
import Questions from './pages/questions'
import Home from './pages/home'
import { useContext } from 'react';
import { UserContext, UserProvider } from './contexts/UserContext';
import { API } from "./config/backend";
import ProtectedRoutes from "./config/ProtectedRoutes";
import Loader from "./comp/loader";

function App() {

  
  // useEffect(() => {
  //   fetch("http://localhost:8000/api")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.message))
  //     .catch((err)=> console.log(err))
  // }, []);


  return (
    <UserProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path= '/addQuestion' element={
         
            <AddQuestion/>
        
          }/>
        
        <Route path= '/questions' element={
      
          <Questions/>
         
        }/>

        <Route path= '/loader' element={
              
              <Loader/>
            
            }/>
      </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App;
