<template>
  <div>
    <NavBar />
  
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1 class="page-guia">Main Page</h1>
            <ListaProductos />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

  // Components
  import ListaProductos from './../templates/ListaProductos';
  import NavBar from './../organisms/NavBar.vue';

  export default {
    name: 'MainPage',
    components: {
      NavBar,
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
  
  /*
  *
  Esto lo uso para mostrar la guia de paginas y no perderme entre
  componentes mientras estoy desarrollando
  */
  .page-guia {
    /*display: none;*/
  }

</style>
