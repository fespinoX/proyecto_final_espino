<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Admin Page</h1>
        <p>Bienvenido: ACAVAELUSER</p>
        
        <p>Estos son tus productos disponibles:</p>
        <ProductosTabla />

        <p>Cargar un nuevo producto</p>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  // Components
  import ProductosTabla from '../molecules/ProductosTabla';


  export default {
    name: 'AdminPage',
    components: {
      ProductosTabla, 
    },

    data: () => ({
        productos: []
    }),
    methods: {
    },
  }

/*
TODO:

* Cargar nuevo producto


*/

</script>
