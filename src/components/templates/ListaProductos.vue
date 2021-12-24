<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
      >
        <h2>Juegos de mesa</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col 
        cols="12"
        sm="6"
        md="4"
        lg="3"

        v-for="(product, i) in productos" :key="i">
        <ProductoCard
          :product="product"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // import axios from "axios"

  // Components
  import ProductoCard from './../molecules/ProductoCard.vue';
  
  // Vuex
  import { mapState } from "vuex"

  export default {
    name: 'ListaProductos',
    components: {
      ProductoCard, 
    },
    data: () => ({

    }),
    props: {
      content: {
        type: Array
      }
    },
    methods: {

    },
    computed : {
      ...mapState({
        productos: state => state.productos,
        loadingProductos: state => state.loadingProductos,
      }),

    },
  }

</script>
