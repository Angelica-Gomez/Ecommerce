import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-column">
        <Link to="/" className="logo">
          <img src="https://res.cloudinary.com/drzktqxou/image/upload/v1710499018/logo_vec0xr.webp" />
        </Link>
      </div>

      <div className="footer-column">
        <div className="follow-us">
          <h2>Seguinos en las Redes</h2>
          <div className="footer-icons">
            <a href="https://www.facebook.com/people/Last-Game-Cba/100067133461108/">
              <FaFacebookSquare
                style={{ marginLeft: "5px", fontSize: "35px" }}
              />
            </a>

            <a href="https://www.instagram.com/lastgame_cba/">
              <FaInstagramSquare
                style={{ marginLeft: "5px", fontSize: "35px" }}
              />
            </a>

            <a href="https://twitter.com/lastgame_cba">
              <FaSquareTwitter
                style={{ marginLeft: "5px", fontSize: "35px" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-column">
        <div className="contact-us">
          <h2>¡Contactanos!</h2>
          <p>Atención telefónica: 93513024137</p>
          <p>Whatsapp: 93513024137</p>
          <p>E-mail: lastgame.electronica@gmail.com</p>
        </div>
      </div>

      <p className="footer-copyright">
        Copyright Last Game - 2024. All rights reserved.
      </p>
    </div>
  );
};
