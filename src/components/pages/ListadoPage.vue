<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Listado Page</h1>
        <ListaProductos />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  import ListaProductos from '../templates/ListaProductos';


  export default {
    name: 'ListadoPage',
    components: {
      ListaProductos, 
    },

    data: () => ({
        
    }),
  }
</script>
