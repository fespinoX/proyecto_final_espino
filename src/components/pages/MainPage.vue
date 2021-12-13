<template>
  <div>
    <NavBar :logueado="logueado" />
  
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1 class="page-guia">Main Page</h1>
          <UserTemplate v-if="!logueado" @change="checkLogueado" />
          <div v-else>
            <ListadoTemplate 
            />
          </div>

        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>

  // Components
  import UserTemplate from './../templates/UserTemplate';
  import ListadoTemplate from './../templates/ListadoTemplate';
  import NavBar from './../organisms/NavBar.vue';

  export default {
    name: 'MainPage',
    components: {
      NavBar,
      UserTemplate,
      ListadoTemplate,
    },

    data: () => ({
      user: {
        id: '',
        name: ''
      },
      logueado: false
    }),

    methods: {
      
      checkLogueado() {
        if(JSON.parse(localStorage.getItem('user'))) {
          this.logueado = true
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
