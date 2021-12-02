<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Tiendita</h1>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
      </div>

    </v-app-bar>

    <v-main>
      <MainPage/>
    </v-main>
  </v-app>
</template>

<script>

import MainPage from './components/pages/MainPage';

export default {
  name: 'App',

  components: {
    MainPage,
  },

  data: () => ({

  }),
};
</script>
