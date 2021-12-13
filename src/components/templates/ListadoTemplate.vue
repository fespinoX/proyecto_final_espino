<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Listado Page</h1>
        <ListaProductos
          :products="productos"
        />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios"
  // Data
  // import products from "./../../assets/data/products.json"

  // Components
  import ListaProductos from '../templates/ListaProductos';

  // mockapi URL : https://61b145c33c954f001722a877.mockapi.io/

  export default {
    name: 'ListadoTemplate',
    components: {
      ListaProductos, 
    },

    data: () => ({
      productos: [],
    }),

    mounted() {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        axios
          .get('https://61b145c33c954f001722a877.mockapi.io/productos')
          .then(response => (this.info = response))
          .then(data => {
            this.productos = data.data
          })
          //.catch((err) => {console.error(`${err}`)})

      })
    }
  }
    
</script>
