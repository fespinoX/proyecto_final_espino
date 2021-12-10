<template>
  <v-dialog v-model="open" @click:outside="$emit('manejarVentana', false)">
    <v-card>
      <v-card-title>
        <h2>Editar producto</h2>
      </v-card-title>
      <v-card-text>

        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
              cols="12"
              md="4"
              >
              <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :counter="10"
                  label="Producto"
                  required
              ></v-text-field>
              </v-col>

              <v-col
              cols="12"
              md="4"
              >
              <v-text-field
                  v-model="qty"
                  :rules="numberRules"
                  :counter="10"
                  label="Cantidad"
                  required
              ></v-text-field>
              </v-col>

              <v-col
              cols="12"
              md="4"
              >
              <v-text-field
                  v-model="price"
                  :rules="numberRules"
                  label="Precio"
                  required
              ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-btn
          class="mr-4"
          @click="confirm"
          >
          Confirmar cambios
          </v-btn>

        </v-form>        
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'EditDialog',
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    registered: false,
    nameRules: [
      v => !!v || 'Por favor complete este campo',
      v => v.length >= 3 || 'Este campo debe contener al menos 3 caracteres',
    ],
    numberRules: [
      v => !!v || 'Por favor complete este campo',
      v => (!isNaN(parseFloat(v)) && v >= 0) || 'Este campo debe ser un número mayor a 0',
      v => v.length >= 0 || 'Este campo debe contener al menos 1 caracter',
    ],
  }),
  props: {
    open: Boolean,
  },
  methods: {
    confirm() {
      if (this.valid) {
        console.log("editado el producto: ")
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
