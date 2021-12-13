<template>
  <div>
    <h1 class="page-guia">Registro</h1>    

    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="Nombre"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Apellido"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="user"
              :rules="nameRules"
              :counter="10"
              label="Nombre de usuario"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="password"
              :rules="nameRules"
              :counter="10"
              label="Password"
              required
              type="password"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="avatar"
              :rules="nameRules"
              label="Avatar"
              required
            ></v-text-field>
          </v-col>


        </v-row>
      </v-container>
      <v-btn
        color="green"
        dark
        @click="submit"
      >
        Registrarme
      </v-btn>
    </v-form>

    <div class="mt-6">
      <p>Ya tenés usuario?</p>
      <v-btn
        @click="changeToLogin()"
      >
        Loguearme
      </v-btn>
    </div>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: 'Registro',

    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      user: '',
      avatar: '',
      email: '',
      password: '',
      allusers: [],
      newuser: {},
      registered: false,
      nameRules: [
        v => !!v || 'Por favor complete este campo',
        v => v.length >= 3 || 'Este campo debe contener al menos 3 caracteres',
      ],
      emailRules: [
        v => !!v || 'Por favor complete este campo',
        v => /.+@.+/.test(v) || 'Por favor complete con una dirección de e-mail',
      ],
    }),
    methods: {
      submit() {
        if (this.valid) {
          if (!this.checkIfUserExists()) {
            this.newuser = {
              firstName: this.firstname,
              lastName: this.lastname,
              user: this.user,
              avatar: this.avatar,
              email: this.email,
              password: this.password,
            }
            console.log("new user is", this.newuser)
            this.agregarUser()
            console.log("registrado el user " + this.firstname)
            this.registered = true
            this.$emit('click', this.registered);
          } else {
            console.log("el usuario ya existe")
          }
        }
      },
      agregarUser() {
        // agregar user a la base
        axios
          .post(
            `https://61b145c33c954f001722a877.mockapi.io/users`,
            this.newuser

          )
          .then((data) => {
            console.log("El usuario agregado es:", data);
          })
          .catch((err) => {console.error(`${err}`)})
      },
      checkIfUserExists() {
        console.log("all users:", this.allusers)
        const usuarioRepetido = this.allusers.find(o => o.user === this.user);
        console.log("usuario repetido", usuarioRepetido)
        if (usuarioRepetido) {
          console.log("el user ya existe")
          return true
        }
      },
      levantarUsers() {
        axios
          .get('https://61b145c33c954f001722a877.mockapi.io/users')
          .then(response => (this.info = response))
          .then(data => {
          this.allusers = data.data
          })
          .catch((err) => {console.error(`${err}`)})
      },
      changeToLogin() {
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
