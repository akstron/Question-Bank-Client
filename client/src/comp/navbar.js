import '../styles/nav.css'

const NavBar = () => {
    return ( 
        <nav className="nav">
        <h3 className="nav__heading">QuestionBank</h3>
        <div className="nav__links">
            <a href="/" className="nav__link">all questions</a>
            <a href="/" className="nav__link">Add question</a>
        </div>
        <input type="text" placeholder="search"/>
        <div className="nav__action">
            <a href="/" className="nav__link nav__link--1">Login</a>
            <a href="/" className="nav__link nav__link--2">Sign up</a>
        </div>
        </nav>
     );
}
 
export default NavBar;