<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        
        <UserPage v-if="user.id === ''" />
        <ListadoPage 
          v-else
        />
        <CarritoPage />

      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  // Components
  import UserPage from './UserPage';
  import ListadoPage from './ListadoPage';
  import CarritoPage from './CarritoPage';

  export default {
    name: 'MainPage',
    components: {
      UserPage,
      ListadoPage,
      CarritoPage
    },

    data: () => ({
      user: {
        id: '1',
        name: ''
      }
    }),
  }
</script>
