import '../styles/nav.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="nav">
        <h3 className="nav__heading">QuestionBank</h3>
        <div className="nav__links">
            <Link to="/questions" className="nav__link">all questions</Link>
            <Link to="/addQuestion" className="nav__link">Add question</Link>
        </div>
        <input type="text" placeholder="search"/>
        <div className="nav__action">
            <Link to="/login" className="nav__link nav__link--1">Login</Link>
            <a href="/" className="nav__link nav__link--2">Sign up</a>
        </div>
        </nav>
     );
}
 
export default NavBar;