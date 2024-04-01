import { Link } from "react-router-dom";
import "./Checkout.css";

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div className="container">
      {orderId ? (
        <div className="order">
          <h1 style={{ marginBottom: "20px" }}>
            Muchas gracias por tu compra!
          </h1>
          <p style={{ marginBottom: "20px" }}>
            Tu número de pedido es: {orderId}
          </p>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#1c54b2",
              fontWeight: "bold",
            }}
          >
            Seguir comprando
          </Link>
        </div>
      ) : (
        <form className="formulario" onSubmit={envioDeFormulario}>
          <h1 className="main-title">Finalizar compra</h1>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturar}
            name="name"
          />

          <input
            type="text"
            placeholder="Ingresa tu teléfono"
            onChange={capturar}
            name="phone"
          />
          <input
            type="text"
            placeholder="Ingresa tu email"
            onChange={capturar}
            name="email"
          />

          <button className="enviar" type="submit">
            Comprar
          </button>
        </form>
      )}
    </div>
  );
};
