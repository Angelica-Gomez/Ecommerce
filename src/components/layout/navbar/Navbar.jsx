import { Link } from "react-router-dom";
import CartWidget from "../../common/CartWidget";
import { PiMouseSimpleFill } from "react-icons/pi";
import { BsFillKeyboardFill } from "react-icons/bs";
import { IoHeadset } from "react-icons/io5";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="https://res.cloudinary.com/drzktqxou/image/upload/v1710499018/logo_vec0xr.webp" />
      </Link>

      <div className="menu">
        <Link to="/" className="menu-link">
          Todos los productos
        </Link>

        <Link to="/category/mouses" className="menu-link">
          Mouses
          <PiMouseSimpleFill style={{ marginLeft: "5px" }} />
        </Link>

        <Link to="/category/teclados" className="menu-link">
          Teclados
          <BsFillKeyboardFill style={{ marginLeft: "5px" }} />
        </Link>

        <Link to="/category/auriculares" className="menu-link">
          Auriculares
          <IoHeadset style={{ marginLeft: "5px" }} />
        </Link>

        <CartWidget />
      </div>
    </nav>
  );
};
