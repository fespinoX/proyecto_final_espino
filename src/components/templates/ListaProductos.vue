<template>
  <v-container>
    <v-row>
      <v-col 
        cols="4"
        v-for="(product, i) in products" :key="i">
        <ProductoCard
          :product="product"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  // Components
  import ProductoCard from './../molecules/ProductoCard.vue';


  export default {
    name: 'ListaProductos',
    components: {
      ProductoCard, 
    },
    data: () => ({

    }),
    props: {
      products: {
        type: Array,
      }
    }
  }

</script>
