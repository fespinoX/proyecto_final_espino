<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Admin Page</h1>
        <p>Bienvenido: ACAVAELUSER</p>
        
        <p>Estos son tus productos disponibles:</p>
        <ProductosTabla
            :products="productos"
        />

        <p>Cargar productos</p>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios"

  // Components
  import ProductosTabla from '../molecules/ProductosTabla';

  // mockapi URL : https://61b145c33c954f001722a877.mockapi.io/

  export default {
    name: 'AdminPage',
    components: {
      ProductosTabla, 
    },

    data: () => ({
        productos: []
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
            console.log(this.productos)
          })
          //.catch((err) => {console.error(`${err}`)})

        console.log("HALAAAA")

      })
    }
  }
    
</script>
