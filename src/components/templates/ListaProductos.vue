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

  /*
  *
  Creo la card del producto como otro componente y lo llam odesde aca
  A cada cardproducto le paso con el producto :producto desde aca
  en el componente card producto hago la card y recibo el producto con una prop


  */
</script>
