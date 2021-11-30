<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>User Page</h1>
        <Registro />
        <LogIn />

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
        
    }),
  }
</script>
