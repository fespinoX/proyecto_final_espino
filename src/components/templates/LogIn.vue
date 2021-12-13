<template>
  <div>
    <h1 class="page-guia">Login</h1>    

    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="username"
              :rules="userRules"
              :counter="10"
              label="User name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="password"
              :rules="pswRules"
              :counter="10"
              label="Password"
              required
              type="password"
            ></v-text-field>
          </v-col>

        </v-row>
      </v-container>
      <v-btn
        @click="loguearUser()"
        color="green"
        dark
      >
        Entrar
      </v-btn>
    </v-form>
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <div class="mt-6">
          <p>No tenés usuario?</p>
          <v-btn
            @click="changeToRegister()"
          >
            Registrarme
        </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: 'Registro',

    data: () => ({
      valid: false,
      username: '',
      password: '',
      allusers: [],
      logueado: false,
      userRules: [
        v => !!v || 'Por favor inserte su usuario',
        v => v.length >= 3 || 'El username debe tener al menos 3 caracteres',
      ],
      pswRules: [
        v => !!v || 'Por favor inserte su password',
      ],
    }),
    methods: {

      loguearUser() {
        this.levantarUsers()
        if (this.valid) {
          
          const usuario = this.allusers.find(o => o.user === this.username);
          if (usuario) {
            if (this.password === usuario.password) {
              this.logueado = true
              console.log("Bienvenido", usuario.firstName)
              localStorage.setItem('user', JSON.stringify(usuario))
            } else {
              console.log("usuario o contraseña incorrecta")
            }
          } else {
            console.log("usuario o contraseña incorrecta")
          }

          this.$emit('click', this.logueado);

        }
      },

      levantarUsers() {
        
        axios
          .get('https://61b145c33c954f001722a877.mockapi.io/users')
          .then(response => (this.info = response))
          .then(data => {
          this.allusers = data.data
          console.log("levantados los usuarios")
          console.log(this.allusers)
          })
          .catch((err) => {console.error(`${err}`)})
      },

      changeToRegister() {
        this.$emit('click', true);
      }
    },

    mounted() {
      this.$nextTick(function () {
          this.levantarUsers()
      })
    }    
  }
</script>
