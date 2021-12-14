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
      v-if="logueado"
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
    <!-- TODO: esto lo comento hasta que manejemos los usuarios von Vuex
    <v-menu
      class="d-flex align-center"
      v-if="logueado"
    >

      <template v-slot:activator="{ on }">
        <v-btn
          icon
          x-large
          v-on="on"
        >
          <v-avatar
            color="orange"
            size="48"
          >
            <img
              :src="usuarioLocal.avatar"
              :alt="usuarioLocal.firstName"
            >
          </v-avatar>
        </v-btn>
      </template>
      <v-card
        class="user-card"
        v-if="logueado"
      >
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-avatar
              color="orange"
              class="mb-4"
            >
              <img
                :src="usuarioLocal.avatar"
                alt="John"
              >
            </v-avatar>
            <h3>{{ usuarioLocal.firstName }} {{ usuarioLocal.lastName }}</h3>
            <p class="text-caption mt-1">
              {{ usuarioLocal.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-btn
              depressed
              @click="desloguarUser"
            >
              Salir
            </v-btn>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
    -->
  </v-app-bar>
</template>

<script>

export default {
  name: 'NavBar',

  components: {

  },

  props: {
  },

  data: () => ({
    logueado: false,
    usuarioLocal: {}
  }),
  methods: {
    getUser() {
      this.usuarioLocal = JSON.parse(localStorage.getItem('user'))
      console.log("this.usuarioLocal es", this.usuarioLocal)
    },
    checkLogueado() {
      if (this.usuarioLocal) {
        this.logueado = true
      } else {
        this.logueado = false
      }
    },
    irAlLogin() {
      this.$router.push('/carrito'); 
    },
    desloguarUser() {
      localStorage.removeItem('carrito');
      localStorage.removeItem('user');
      this.$router.push('/user');
    }
  },

  mounted() {
  this.$nextTick(function () {
      this.getUser()
      this.checkLogueado()
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
