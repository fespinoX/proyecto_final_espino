<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <router-link to="/">Tiendita</router-link>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <router-link to="/carrito">Carrito</router-link>
        <router-link to="/admin">Admin</router-link>
      </div>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({

  }),
};

/*

TODO: 

* Agregar icono carrito
* Agregar lógica de log in
* Agregar lógica para que muestre los links en base al tipo de usuario



*/

</script>

<style lang="sass" scoped>
  
  a
    color: white!important

</style>
