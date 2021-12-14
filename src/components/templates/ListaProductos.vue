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
  import axios from "axios"

  // Components
  import ProductoCard from './../molecules/ProductoCard.vue';


  export default {
    name: 'ListaProductos',
    components: {
      ProductoCard, 
    },
    data: () => ({
      productos: []
    }),
    props: {
    },
    methods: {
      levantarProductos() {
        axios
          .get('https://61b145c33c954f001722a877.mockapi.io/productos')
          .then(response => (this.info = response))
          .then(data => {
            this.productos = data.data
          })
          .catch((err) => {console.error(`${err}`)})
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.levantarProductos()
      })
    }
  }

</script>
