//-- NavMenu.js -- 

import {Link} from 'react-router-dom';

//function NavMenu(props) 
const NavMenu = (props) => {
return (
    <>
        <nav>
             <Link to="/">Home</Link>
             {" "}
             <Link to="/about">About</Link>
             {" "}
             <Link to="/contactus1">Contact Us 1</Link>
             {" "}
             <Link to="/contactus2">Contact Us 2</Link>
             {" "}
             <Link to="/contactus3">Contact Us 3</Link>
             {" "}
             <Link to="/displaylist1">Display List 1</Link>
        </nav>    
    </>
)}

//refactor: add css style to component/elements
export default NavMenu;