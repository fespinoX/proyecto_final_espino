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


## Agregar productos con imagen
Se agregaron imágenes a la carpeta public/assets/img para probar agregar productos con foto.

Las imágenes disponisbles son: "brass", "dinosaurisland", "thenetworks", "istanbul"


## DB

La información de users, productos y pedidos carrito está 'mockeada' usando mockapi.io.

Se puede encontrar los archivos de data iniciales en src/assets/data dentro del proyecto.

### Endpoint

https://61b145c33c954f001722a877.mockapi.io/

___

## Datos entrega

Alumna: Florencia Espino

Tutor: Diego Mafferra

Trabajo: Segunda Entrega del Proyecto Final

___

## Pendientes TODO:

### Admin

#### Must

* Agregar Producto: Botón de cancelar
* Agregar Producto: Validación al hacer click en agregar
* Agregar Producto: Confirm antes de agregar
* Agregar Producto: Limpiar y ocultar formulario
* Editar Producto: Botón de cancelar
* Editar Producto: Confirm antes de editar
* Borrar Producto: Confirm antes de borrar

* Editar Pedido: Confirm antes de editar
* Borrar Pedido: Confirm antes de borrar

#### Nice to have

* Usuarios: Mostrar lista
* Editar Usuarios
* Borrar Usuarios
* Agregar Usuarios


### Cliente

#### Must

* Carrito: Alerta cuando se agrega al carrito desde la producto card
* Carrito: Alerta cuando se agrega al carrito y cerrar el dialog
* Carrito: Que checkee si ya existe el item en el carrito, si existe agregar la cantidad al objeto correspondiente
* Carrito: mensaje de ok cuando se edita
* Carrito: confirm antes de borrar
* Carrito: mensaje de ok cuando se borra
* Carrito: confirm antes de vaciar carrito
* Carrito: calcular el total
* Carrito: confirm antes de mandar pedido
* Carrito: mensaje de ok cuando se manda el pedido

#### Nice to have


### User

#### Must
* Hardocdear el access
* Agregar lógica para que muestre los links y el content en base al tipo de usuario
* Redireccionar una vez q se loguea
* Redireccionar una vez q se desloguea

#### Nice to have
* hashear contraseñas
* introducir psw dos veces y comparar