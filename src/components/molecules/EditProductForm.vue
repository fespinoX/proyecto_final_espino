<template>
  <div>
    <h2 class="mt-4">Editar Producto</h2>
    <v-form
      v-model="valid"
    >
      <v-container>
        <v-row>
          
          <v-col
            cols="12"
          >       
            <v-text-field
              v-model="editproduct.name"
              :rules="nameRules"
              label="Producto"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="editproduct.desc"
              :rules="nameRules"
              label="Descripción"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="editproduct.img"
              :rules="nameRules"
              label="Nombre de la imagen"
              required
            ></v-text-field>
          </v-col>                  

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="editproduct.qty"
              :rules="numberRules"
              label="Cantidad"
              required
              type="number"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="editproduct.price"
              :rules="numberRules"
              label="Precio"
              required
              type="number"
            ></v-text-field>
          </v-col>                

        </v-row>
      </v-container>
      <v-btn
        class="mr-4"
        @click="submit"
        color="primary"
      >
        Editar
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: 'AddProductForm',
    components: {
    },
    data: () => ({
      valid: false,
      editproduct: {
        id: '',
        name: '',
        desc: '',
        img: '',
        qty: '',
        price: '',
      },
      nameRules: [
        v => !!v || 'Por favor complete este campo',
        v => v.length >= 3 || 'Este campo debe contener al menos 3 caracteres',
      ],
      numberRules: [
        v => !!v || 'Por favor complete este campo',
        v => v >= 0 || 'Este campo debe ser mayor a 0',
      ],
      // img no es required, para eso está default.jpg
    }),
    props: {
      productid: {
        type: String
      }
    },
    methods: {
      submit() {
        if (this.valid) {
          this.editarProducto()
        } else {
          console.log("error de validación")
        }
      },

      levantarProducto() {
        this.editproduct = {
          id: '',
          name: '',
          desc: '',
          qty: '',
          img: '',
          price: '',
        }
        axios
          .get(`https://61b145c33c954f001722a877.mockapi.io/productos/${this.productid}`)
          .then(data => {
          this.editproduct = data.data
          })
          .catch((err) => {console.error(`${err}`)})
      },

      editarProducto() {
        this.$store.dispatch("editarProducto", this.editproduct)
        this.refrescar()

      },

      vaciarForm() {
        this.editproduct = {
          name: '',
          desc: '',
          img: '',
          qty: '',
          price: '',
        }
      },

      refrescar() {
        this.$emit("submit", this.editproduct.name);
        this.vaciarForm()
      }

    },

    mounted() {
      this.$nextTick(function () {
          this.levantarProducto()
      })
    }       

  }

</script>

