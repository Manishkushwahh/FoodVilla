import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItem = useSelector(store => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = ()=> {
        dispatch(clearCart());
    };
    return(
        <>
        <h1 className="font-bold text-2xl">Cart Items - {cartItem.length}</h1>
        <button 
            className="bg-green-100 p-2 m-2 rounded-md"
            onClick={()=> handleClearCart()}
        >Clear Cart</button>
        <div className="flex">
            {cartItem.map((item)=> (
               <FoodItem key={item.id} {...item}/> 
            ))}
        </div>
        </>
    );
};

export default Cart;