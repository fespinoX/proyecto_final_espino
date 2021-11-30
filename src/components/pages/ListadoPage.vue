<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Listado Page</h1>
        <ListaProductos
          :products="products"
        />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  // Data
  import products from "./../../assets/data/products.json"

  // Components
  import ListaProductos from '../templates/ListaProductos';


  export default {
    name: 'ListadoPage',
    components: {
      ListaProductos, 
    },

    data: () => ({
      products,
    }),
  }
</script>
