<template>
  <div>
    <NavBar />

    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1 class="page-guia">User Page</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <UserTemplate v-if="!logueado" />
        </v-col>
      </v-row>
    </v-container>

  </div>    
</template>

<script>

  //Components
  import NavBar from './../organisms/NavBar.vue'
  import UserTemplate from './../templates/UserTemplate'


  export default {
    components: {
      NavBar,
      UserTemplate,
    },
    name: 'UserPage',
    data: () => ({
      logueado: false
    }),

    methods: {
      checkLogueado() {
        if(JSON.parse(localStorage.getItem('user'))) {
          this.logueado = true
          this.$router.push('/');
        } else {
          this.logueado = false
        }
      },
    },
    mounted() {
      this.$nextTick(function () {
        this.checkLogueado()
      })
    }

  }

</script>
