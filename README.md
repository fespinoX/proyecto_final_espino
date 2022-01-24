# proyecto_final_espino

## Acerca de este proyecto
Este proyecto es la entrega final del curso de Vue JS de Coderhouse
Es un e-commerce de juegos de mesa con panel de administración

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

___

## Atomic design
Los componentes fueron creados siguiendo los principios de diseño Atomic Design
https://www.uifrommars.com/atomic-design-ventajas/


## Github
https://github.com/fespinoX/proyecto_final_espino


## Live Version

https://proyecto-final-espino-fd26z.ondigitalocean.app/


## Vistas

/ Home
/admin Panel de administrador


## Users para probar

### Admin

"user": "fespinox",
"password": "Fespi123",

### Client

"user": "trixi3",
"password": "Trixie123",


## Agregar productos con imagen
Se agregaron imágenes a la carpeta public/assets/img para probar agregar productos con foto.

Las imágenes disponisbles son: "brass", "dinosaurisland", "thenetworks", "istanbul"


## DB

La información de users, productos y pedidos está 'mockeada' usando mockapi.io.

Se puede encontrar los archivos de data iniciales en src/assets/data dentro del proyecto.

El carrito se almacena en el localstorage


### Endpoint

https://61b145c33c954f001722a877.mockapi.io/

___

## Datos entrega

* Alumna: Florencia Espino
* Tutor: Diego Mafferra
* Trabajo: Proyecto Final

___

## Pendientes TODO: obligatorios para entrega

### General:

* Comentar console logs

### Usuario final:

* Alerta cuando se agrega desde card (y que se cierre)




## Cositas extra

### Admin

* Agregar Producto: Botón de cancelar
* Agregar Producto: Validación al hacer click en agregar
* Agregar Producto: Confirm antes de agregar
* Agregar Producto: Limpiar y ocultar formulario
* Agregar Producto: Alerta de que se agrego

* Editar Producto: Botón de cancelar
* Editar Producto: Confirm antes de editar
* Borrar Producto: Confirm antes de borrar

* Editar Pedido: Confirm antes de editar
* Borrar Pedido: Confirm antes de borrar

* Mensaje si no hay productos
* Mensaje si no hay pedidos


### Cliente

* Carrito: Alerta cuando se agrega al carrito y cerrar el dialog
* Carrito: mensaje de ok cuando se edita
* Carrito: confirm antes de borrar
* Carrito: mensaje de ok cuando se borra
* Carrito: confirm antes de vaciar carrito
* Carrito: calcular el total
* Carrito: confirm antes de mandar pedido
* Carrito: mensaje de ok cuando se manda el pedido

* Limitar cantidad de producto que se puede agregar al carrito en base al stock
* Carrito: usar getters xa el total de productos del carrito

