<template>
  <div>
    <h1 class="page-guia">Login</h1>    

    <v-form 
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
            offset-md="3"
          >
            <v-text-field
              v-model="username"
              :rules="userRules"
              label="User name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
            offset-md="3"
          >
            <v-text-field
              v-model="password"
              :rules="pswRules"
              label="Password"
              required
              type="password"
            ></v-text-field>
          </v-col>

        </v-row>
      </v-container>
      <v-btn
        @click="loguearUser()"
        color="secondary"
      >
        Entrar
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: 'Registro',

    data: () => ({
      valid: true,
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
        
        if (this.$refs.form.validate()) {
          
          const usuario = this.allusers.find(o => o.user === this.username);
          if (usuario) {
            if (this.password === usuario.password) {
              this.logueado = true

              this.$store.dispatch("settearUsuario", usuario)

              console.log("Bienvenido", usuario.firstName)
              localStorage.setItem('user', JSON.stringify(usuario))
              this.$router.push('/');
            } else {
              console.log("usuario o contraseña incorrecta")
            }
          } else {
            console.log("usuario o contraseña incorrecta")
          }

        } else {
          console.log("error de validacion")
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
    },

    mounted() {
      this.$nextTick(function () {
          this.levantarUsers()
      })
    }    
  }
</script>
