# Ecommerce Last Game

## Resumen

#### Este repositorio contiene el código base para Last Game, una plataforma de comercio especializada en accesorios electrónicos como mouses, teclados y auriculares. La plataforma permite a los usuarios navegar a través de varios productos, agregarlos a su carrito y realizar compras. También cuenta con un proceso de pago donde los usuarios pueden proporcionar su información para el envío y el pago.

## Componentes

#### 1. ItemListContainer

#### Descripción: Este componente muestra una lista de productos disponibles en la plataforma.

#### Archivo: ItemListContainer.js

#### 2. ItemDetail

#### Descripción: Este componente muestra información detallada sobre un producto específico, incluida su imagen, título, descripción y precio. Los usuarios también pueden agregar el producto a su carrito desde este componente.

#### Archivo: ItemDetail.js

#### 3. CheckoutContainer

#### Descripción: Este componente maneja el proceso de pago. Recopila la información del usuario, procesa el pedido y actualiza la base de datos en consecuencia.

#### Archivo: CheckoutContainer.js

#### 4. Navbar

#### Descripción: El componente Navbar proporciona enlaces de navegación a diferentes secciones del sitio web, incluidas las categorías de productos y el carrito de compras del usuario.

#### Archivo: Navbar.js

#### 5. Footer

#### Descripción: Este componente contiene información sobre la empresa, enlaces a redes sociales y detalles de contacto.

#### Archivo: Footer.js

## Bibliotecas y Herramientas Adicionales

#### React Router: Utilizado para manejar la navegación dentro de la aplicación.

#### Firebase Firestore: Utilizado para operaciones de base de datos, incluido el almacenamiento de información de productos y pedidos.

#### Cloudinary: Utilizado para alojar imágenes de productos y el logotipo de la empresa.

## Cómo Ejecutar

#### 1. Clona el repositorio en tu máquina local.

#### 2. Navega hasta el directorio del proyecto.

#### 3. Instala las dependencias ejecutando

```
npm install.
```

#### 4. Inicia el servidor de desarrollo ejecutando

```
npm start.
```

#### 5. Abre tu navegador web y ve a http://localhost:5173 para ver la aplicación.

## Variables de Entorno

#### El proyecto utiliza variables de entorno para configurar diferentes aspectos de la aplicación. Antes de ejecutar la aplicación, asegúrate de configurar correctamente estas variables en un archivo .env en el directorio raíz del proyecto.

- VITE_APIKEY=
- VITE_AUTH_DOMAIN=
- VITE_PROJECT=
- VITE_STORAGE=
- VITE_MESSAGIN=
- VITE_APP_ID=
