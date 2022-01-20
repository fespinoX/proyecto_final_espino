<template>
  <div>
    <NavBar />
  
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1 class="page-guia">Main Page</h1>
            <Alert />
            <ListaProductos />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

  // Components
  import NavBar from './../organisms/NavBar.vue';
  import Alert from './../atoms/Alert.vue';
  import ListaProductos from './../templates/ListaProductos';

  export default {
    name: 'MainPage',
    components: {
      NavBar,
      Alert,
      ListaProductos,
    },

    data: () => ({
      user: {
      },
      logueado: false
    }),

    methods: {

    },

    mounted() {
    }   
  }
</script>

<style>
  


</style>
