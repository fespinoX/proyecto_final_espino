<template>
  <div>
    <NavBar />
  
    <v-container>
      <v-row class="text-center">
        <v-col
          cols="12"
          md="6"
          offset-md="3"
        >
          <img
            class="main-img"
            src="/logo.png"
            alt="Zelda"
          >
          <h1
            class="main-title"
          >
            Los Juegos de mesa de Zelda
          </h1>
        </v-col>
        <v-col cols="12">
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

<style lang="scss" scoped>

  .main-img {
    margin-top: 30px;
    height: 150px;
  }
  
  .main-title {
    font-size: 3rem;
    line-height: 3rem;
    color: #FED402;
    text-transform: uppercase;
  }

</style>
