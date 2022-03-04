import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login'


/* Some error with react router version 6. Renders blank pages. Should debug or downgrade the version*/
function App() {
  return (
    <Login/>
  )
}

export default App;
