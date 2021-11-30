<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Carrito Page</h1>
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
import ProductosTabla from '../molecules/ProductosTabla.vue'
  export default {
  components: { ProductosTabla },
    name: 'CarritoPage',
    props: {
      productsCarrito: {
        type: Array
      },
    },
    data: () => ({

    }),
  }
</script>
