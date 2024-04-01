import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import "./ItemDetail.css";
export const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div style={{ marginBottom: "150px" }}>
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img
            src={item.img}
            alt=""
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "10px",
            }}
          />
        </div>

        <div className={"containerDetail"}>
          <h2
            style={{
              fontFamily: "sans-serif",
              marginBottom: "60px",
              fontSize: "20px",
            }}
          >
            {item.title}
          </h2>
          <h2
            style={{
              fontFamily: "sans-serif",
              marginBottom: "100px",
              fontSize: "18px",
              fontWeight: "normal",
            }}
          >
            {item.description}
          </h2>
          <h2
            style={{
              fontFamily: "sans-serif",
              marginBottom: "60px",
              fontSize: "25px",
            }}
          >
            ${item.price}
          </h2>
        </div>
      </div>

      {initial && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "-160px",
            marginBottom: "40px",
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: "normal" }}>
            Ya tienes {initial} en el carrito
          </h3>
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "-43px",
        }}
      >
        <ItemCountContainer
          stock={item.stock}
          onAdd={onAdd}
          initial={initial}
        />
      </div>
    </div>
  );
};
