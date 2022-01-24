<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">

      <router-link to="/">
        <v-icon>mdi-home-variant-outline</v-icon>
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <router-link to="/carrito">
      <v-icon>mdi-cart-variant</v-icon>
    </router-link>
    <v-btn
      color="accent"
      @click="desloguarUser"
      class="ml-4"
      v-if="usuario.user"
    >
      Logout
    </v-btn>    
    <v-btn
      color="accent"
      @click="irAlLogin"
      class="ml-4"
      v-else
    >
      Login
    </v-btn>

  </v-app-bar>
</template>

<script>

import { mapState } from "vuex"

export default {
  name: 'NavBar',

  components: {

  },

  props: {
  },

  data: () => ({

  }),
  methods: {
    irAlLogin() {
      this.$router.push('/user'); 
    },
    desloguarUser() {
      localStorage.removeItem('user');
      this.$store.dispatch("borrarUsuario")
      this.irAlLogin()
    }
  },

  computed : {
    ...mapState({
      usuario: state => state.usuario,
    }),
  },

  mounted() {
  this.$nextTick(function () {
  })
}   
 
};

</script>

<style lang="sass" scoped>
  
  a
    color: white!important
    text-decoration: none

  .user-card
    padding: 10px 20px

</style>
