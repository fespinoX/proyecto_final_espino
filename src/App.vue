<template>
  <v-app>

    <v-main>
      <router-view />
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
    methods: {

    },

    mounted() {
      this.$store.dispatch("levantarProductos")
      this.$store.dispatch("levantarPedidos")
      this.$store.dispatch("checkUsuario")
    }
  
  };

</script>

<style lang="sass">

  *
    font-family: 'Fira Sans', sans-serif
  
  .v-btn
    color: black!important

</style>
