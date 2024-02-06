import { PiMouseSimpleFill } from "react-icons/pi";
import { BsFillKeyboardFill } from "react-icons/bs";
import { IoHeadset } from "react-icons/io5";
import CartWidget from "../common/CartWidget";

 export const Navbar = () => {
    return <div>
        <h3>logo</h3>
        <ul>Todos los productos</ul>
        <ul>Mouses</ul>
        <PiMouseSimpleFill />
        <ul>Teclados</ul>
        <BsFillKeyboardFill />
        <ul>Auriculares</ul>
        <IoHeadset />
        <h4>Carrito</h4>
        <CartWidget />
        
    </div>
}