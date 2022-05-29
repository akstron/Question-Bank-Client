import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import SignUp from './pages/signup'
import AddQuestion from './pages/addQuestion'
import Questions from './pages/questions'
import Home from './pages/home'
import { UserProvider } from './contexts/UserContext';
import ProtectedRoutes from "./config/ProtectedRoutes";
import CheckUser from "./config/checkUser";
import MyDashBoard from "./pages/dashboard";
import UserDashboard from "./pages/userDashboard";
import ShowQuestion from "./pages/showquestion";


function App() {

  return (
    <UserProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={
        <CheckUser>
           <Login/>
        </CheckUser>
        }/>
        <Route path='/signup' element={
          <CheckUser>
            <SignUp/>
          </CheckUser>
        }/>

        <Route path='/home' element={<Home/>}/>
        <Route path= '/addQuestion' element={
         <ProtectedRoutes>
            <AddQuestion/>
          </ProtectedRoutes>
          }/>
        
        <Route path= '/questions' element={
        <ProtectedRoutes>
          <Questions/>
        </ProtectedRoutes> 
        }/>

        <Route path="/dashboard/me" element={
          <ProtectedRoutes>
          <MyDashBoard/>
          </ProtectedRoutes>
        }>
        </Route>

        <Route path="/dashboard/:userId" element={
          <ProtectedRoutes>
          <UserDashboard/>
          </ProtectedRoutes>
        }>
        </Route>

        <Route path="/showQuestion/:id" element={
          <ShowQuestion/>
        }>
        </Route>
        
      </Routes>

      
      </BrowserRouter>
    </UserProvider>
  )
}

export default App;
