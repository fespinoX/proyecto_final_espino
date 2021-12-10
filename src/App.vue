<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Tiendita</h1>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <router-link to="/">Home</router-link> |
        <router-link to="/carrito">Carrito</router-link>
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
</script>

<style lang="sass" scoped>
  
  a
    color: white!important

</style>
