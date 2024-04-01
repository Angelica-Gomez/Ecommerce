import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardSkeleton } from "../../common/CardSkeleton";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //setIsLoading(true);
    //let productsCollection = collection(db, "products");
    //getDocs(productsCollection)
    //.then((res) => {
    //let arraydesencriptado = res.docs.map((elemento) => {
    //return { ...elemento.data(), id: elemento.id };
    //});
    //setProducts(arraydesencriptado);
    //})
    //.finally(() => setIsLoading(false));
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;
    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFiltered;
    }

    getDocs(consulta)
      .then((res) => {
        let arraydesencriptado = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setProducts(arraydesencriptado);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return (
      <div style={{ display: "flex" }}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  return (
    <>
      <ItemList products={products} />

      {/* {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <ItemList products={products} />
      )} */}

      {/* <ItemList products={products} /> */}
      {/* {
      isLoading && <h1>Cargando</h1> 
    } */}
    </>
  );
};

export default ItemListContainer;

// const suma = ()=>{

//   if(){
//     return 2
//   }

//   return items
// }
