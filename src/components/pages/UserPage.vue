<template>
  <div>
    <NavBar />

    <v-container>
      <v-row class="text-center">

        <v-col cols="12">
          
          <div v-if="showLogin">
            <LogIn />
              <div class="mt-6">
                <p>No tenés usuario?</p>
                <v-btn
                  color="accent"
                  @click="changeToRegister()"
                >
                  Registrarme
                </v-btn>
              </div>            
          </div>

          <div v-else>
            <Registro />
            <div class="mt-6">
              <p>Ya tenés usuario?</p>
              <v-btn
                color="accent"
                @click="changeToLogin()"
              >
                Loguearme
              </v-btn>
            </div>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>

  //Components
  import NavBar from './../organisms/NavBar.vue'
  import Registro from './../templates/Registro.vue'
  import LogIn from './../templates/LogIn.vue'

  export default {
    name: 'UserPage',
    components: {
      NavBar,
      Registro,
      LogIn, 
    },

    data: () => ({
      logueado: false,
      showLogin: true
      
    }),

    methods : {
      checkLogueado() {
        if(JSON.parse(localStorage.getItem('user'))) {
          this.logueado = true
          this.$router.push('/');
        } else {
          this.logueado = false
        }
      },
      changeToRegister() {
        this.showLogin = false
      },
      changeToLogin() {
        this.showLogin = true
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.checkLogueado()
      })
    }
  }
</script>
