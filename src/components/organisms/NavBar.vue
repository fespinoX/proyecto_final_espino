<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <router-link to="/">LOGO</router-link>
    </div>

    <v-spacer></v-spacer>
      <router-link to="/carrito">
        <v-icon>mdi-cart-variant</v-icon>
      </router-link>
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

  </v-app-bar>
</template>

<script>

export default {
  name: 'NavBar',

  components: {

  },

  props: {
    logueado: Boolean
  },

  data: () => ({
    user: {
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
    },
    usuarioLocal: {}
  }),
  methods: {
    getUser() {
      this.usuarioLocal = JSON.parse(localStorage.getItem('user'))
      console.log("this.usuarioLocal es", this.usuarioLocal)
    },
    desloguarUser() {
      localStorage.removeItem('user');
      this.$emit('change', this.logueado);
    }
  },

  mounted() {
  this.$nextTick(function () {
      this.getUser()
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
