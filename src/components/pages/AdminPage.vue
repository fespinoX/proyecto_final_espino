<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Admin Page</h1>
        <p>Bienvenido: ACAVAELUSER</p>
        
        <h2 class="mt-4">Lista productos</h2>
        <p>Estos son tus productos disponibles:</p>
        <ProductosTabla />

      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  // Components
  import ProductosTabla from '../templates/ProductosTabla';

  export default {
    name: 'AdminPage',
    components: {
      ProductosTabla,
    },

    data: () => ({
        productos: [],
    }),
    methods: {
    },
  }

/*
TODO:

* POST: Agregar alert de confirmación
* Lista de pedidos (en base a carritos)


*/

</script>
