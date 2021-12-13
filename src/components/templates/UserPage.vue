<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="page-guia">User Page</h1>
        <Registro @click="submit" />
        <LogIn v-show="false" />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  import Registro from '../templates/Registro';
  import LogIn from '../templates/LogIn';


  export default {
    name: 'UserPage',
    components: {
      Registro,
      LogIn
 
    },

    data: () => ({
        registered: false,
    }),

    methods : {
      submit(estado) {
        this.registered = estado
        this.$emit('change', this.registered);
      }
    }
  }
</script>
