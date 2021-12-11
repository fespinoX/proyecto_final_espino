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
        </v-row>
      </v-container>
      <v-btn
        class="mr-4"
        @click="submit"
      >
        submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: 'Registro',

    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      registered: false,
      nameRules: [
        v => !!v || 'Por favor complete este campo',
        v => v.length >= 3 || 'Este campo debe contener al menos 3 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Por favor complete este campo',
        v => /.+@.+/.test(v) || 'Por favor complete con una dirección de e-mail',
      ],
    }),
    methods: {
      submit() {
        if (this.valid) {
          this.registered = true
          console.log("registrado el user " + this.firstname)
          this.$emit('click', this.registered);
        }
      }
    }
  }
</script>
