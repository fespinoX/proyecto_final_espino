<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="page-guia">User Page</h1>
        <LogIn v-if="showLogin" @click="showRegister" />
        <Registro v-else @click="hideRegister" />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  import Registro from '../templates/Registro';
  import LogIn from '../templates/LogIn';


  export default {
    name: 'UserTemplate',
    components: {
      Registro,
      LogIn
 
    },

    data: () => ({
      logueado: false,
      showLogin: true
      
    }),

    methods : {
      showRegister(logueado) {
        if(logueado) {
          this.$emit('change', this.logueado);
        } else {
          this.showLogin = false
        }
      },
      hideRegister() {
        this.showLogin = true
      }      
    }
  }
</script>
