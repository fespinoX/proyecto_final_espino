<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="page-guia">Main Page</h1>
        <UserPage v-if="!registered" @change="submit" />
        <div v-else>
          <ListadoPage 
          />
        </div>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  // Components
  import UserPage from './../templates/UserPage';
  import ListadoPage from './ListadoPage';

  export default {
    name: 'MainPage',
    components: {
      UserPage,
      ListadoPage,
    },

    data: () => ({
      user: {
        id: '',
        name: ''
      },
      registered: true
    }),

    methods: {
      submit(estado) {
        this.registered = estado
      }
    },
  }
</script>

<style>
  
  /*
  *
  Esto lo uso para mostrar la guia de paginas y no perderme entre
  componentes mientras estoy desarrollando
  */
  .page-guia {
    /*display: none;*/
  }
  
</style>
