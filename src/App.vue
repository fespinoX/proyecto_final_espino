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
    currentuser: {
      "firstName": "Trixie",
      "avatar": "https://cdn.fakercloud.com/avatars/beweinreich_128.jpg",
      "admin": false,
      "lastName": "Mattel",
      "user": "trixi3",
      "email": "trixie@gmail.com",
      "password": "Trixie123",
      "id": "2"
    }
  }),
  methods: {
    lsSetUser() {
      localStorage.setItem('user', JSON.stringify(this.currentuser))
      // console.log("el user del ls es: " + JSON.parse(localStorage.getItem('user')).firstName);
    },

  },
  mounted() {
    this.$nextTick(function () {
        this.lsSetUser()
    })
  }    
};

</script>

<style lang="sass" scoped>
  
  a
    color: white!important

</style>
