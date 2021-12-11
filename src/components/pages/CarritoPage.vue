<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="page-guia">Carrito Page</h1>
        <h2>Mi Carrito</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ProductosTabla
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  //Components
  import ProductosTabla from '../templates/ProductosTabla.vue'


  export default {
    components: { 
      ProductosTabla 
    },
    name: 'CarritoPage',
    props: {
      productsCarrito: {
        type: Array
      },
    },
    data: () => ({
    }),
  }

/*
TODO: 
* Editar el mock para que levante el carrito por usuario
* GET: Levantar carrito de axios 
* DELETE: Agregar botón de borrar para sacar del carrito
* PUT: Editar la cantidad de un producto

*/
</script>
