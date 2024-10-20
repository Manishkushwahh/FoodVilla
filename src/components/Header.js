import {useState, useContext} from "react";
import logo from "../assets/img/Foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";


const Title = () => (
    <a href="/"><img 
    data-testid="logo"
    className="logo h-24 p-2"
    alt="logo" 
    src={logo}>    
    </img>
    </a>
);

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    const {user} = useContext(UserContext);
    const cartItem = useSelector(store => store.cart.items);
    console.log(cartItem);
    

    return (<div className="navbar flex justify-between bg-pink-50 shadow-lg sm:bg-blue-200 md:bg-red-200">
        <Title/>
        <div className="nav-items">
        <ul className="nav-items flex py-8">
                <Link to="/"><li className="mx-2">Home</li></Link>
                <Link to="/About"><li className="mx-2">About</li> </Link>
                <Link to="/Contact"><li className="mx-2">Contact</li></Link>
                <Link to="/Instamart"><li className="mx-2">Instamart</li> </Link>
                <Link to="/Cart"><li className="mx-2" data-testid="cart">Cart {cartItem.length} items</li> </Link>               
                {/* <li className="px-2"><Link to="/About">About</Link></li> */}
            </ul>
           
        </div>
        <span className="p-10 font-bold text-red-900">{user.name}</span>
        <div className="py-8 flex">
            <h1 data-testid="online-status">{isOnline? "🟢" : "🔴"}</h1>
                {isLoggedIn? (
                <button className="bg-gray-600 text-white p-1 mx-1 rounded-md" 
                onClick={()=> setIsLoggedIn(false)}>Logout</button>
                ):(
                <button className="bg-gray-600 text-white p-1 mx-1 rounded-md"
                onClick={()=> setIsLoggedIn(true)}>Login</button>
                )}
        </div>
    </div>
    );

};

export default Header;