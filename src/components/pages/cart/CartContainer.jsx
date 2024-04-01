import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import "./CartContainer.css";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const limpiarConAlerta = () => {
    Swal.fire({
      title: "Seguro quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {cart.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <br />
          <h2 style={{ marginBottom: "10px" }}> {product.title}</h2>
          <p style={{ marginBottom: "5px" }}>Precio: ${product.price}</p>
          <p style={{ marginBottom: "10px" }}>Cantidad: {product.quantity}</p>
          <button
            style={{
              backgroundColor: "#C7C8CC",
              color: "white",
              padding: "5px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "15px",
            }}
            onClick={() => removeById(product.id)}
          >
            Eliminar
          </button>
          <br />
        </div>
      ))}
      <div style={{ margin: "20px 0" }}>
        <h3>Precio total: {total}</h3>
      </div>

      <Button
        variant="outlined"
        onClick={limpiarConAlerta}
        style={{
          fontWeight: "bold",
          fontSize: "14px",
          width: "100px",
          marginBottom: "10px",
        }}
      >
        Vaciar
      </Button>

      <Link to="/checkout">
        <Button variant="contained" style={{ fontWeight: "bold" }}>
          Finalizar compra
        </Button>
      </Link>
    </div>
  );
};
