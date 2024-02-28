export let products = [
  {
    id: 1,
    title: "Mouse Genius Ammox X1 400",
    price: 15000,
    description:
      "Posee rueda de desplazamiento,sensor óptico y resolución de 3200dpi",
    img: "https://res.cloudinary.com/drzktqxou/image/upload/v1708021865/mouse-genius-ammox-X1-400_utbfm8.png",
    stock: 2,
    category: "mouses",
  },
  {
    id: 2,
    title: "Mouse Logitech Hero G 403",
    price: 20000,
    description:
      "Con luces para mejorar la experiencia de uso,sensor óptico y resolución de 25600dpi",
    img: "https://res.cloudinary.com/drzktqxou/image/upload/v1708022352/mouse-logitech-G403_bin7ak.png",
    stock: 4,
    category: "mouses",
  },
  {
    id: 3,
    title: "Teclado HyperX Alloys Core RGB ",
    price: 30000,
    description:
      "Contiene teclado numérico, función antighosting y conector USB 2.0..",
    img: "https://res.cloudinary.com/drzktqxou/image/upload/v1708022450/teclado-hyperX-alloy-core-RGB_oozo4t.png",
    stock: 6,
    category: "teclados",
  },
  {
    id: 4,
    title: "Teclado Genius Slimstar 230",
    price: 25000,
    description:
      "Ergonómico y apto para diversos usos, contiene teclado numérico y conector USB",
    img: "https://res.cloudinary.com/drzktqxou/image/upload/v1708022728/teclado-genius-slimstar-230_qnrqqe.png",
    stock: 5,
    category: "teclados",
  },

  {
    id: 5,
    title: "Auricular Logitech Astro A10",
    price: 20000,
    description:
      "Con micrófono incorporado y control de volumen en línea, unidireccional",
    img: "https://res.cloudinary.com/drzktqxou/image/upload/v1708022855/auris-astro-A10_vqrkdg.png",
    stock: 8,
    category: "auriculares",
  },

  {
    id: 6,
    title: "Auricular Logitech H111",
    price: 10000,
    description:
      "Con micrófono giratorio 180° y toma de audio estándar de 3,5 mm.",
    img: "https://res.cloudinary.com/drzktqxou/image/upload/v1708022901/auris-logitech-H111_jbjsjh.png",
    stock: 7,
    category: "auriculares",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};
