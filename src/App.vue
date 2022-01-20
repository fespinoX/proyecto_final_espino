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
      this.$store.dispatch("levantarProductos")
      this.$store.dispatch("checkUsuario")
    }
  
  };

</script>

<style lang="sass">
  
  .v-btn
    color: black!important

</style>
