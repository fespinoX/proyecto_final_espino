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
            <!-- <v-file-input
              v-model="img"
              accept="image/png, image/jpeg"
              label="Imagen"
              prepend-icon="mdi-camera"
            ></v-file-input> -->
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="editproduct.name"
              :rules="nameRules"
              :counter="10"
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
              :counter="10"
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
              :counter="10"
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
              :counter="10"
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
              :counter="10"
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
          // console.log("editado el producto " + this.newproduct.name)
        } else {
          console.log("error de validación")
        }
      },

      levantarProducto() {
        this.editproduct = {
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
          console.log("el producto a editar es: ", this.editproduct.name)
          })
          .catch((err) => {console.error(`${err}`)})
      },

      editarProducto() {
        axios
          .put(
            `https://61b145c33c954f001722a877.mockapi.io/productos/${this.productid}`,
            this.editproduct

          )
          .then(() => {
            // this.levantarProductos() esto lo tiene que hacer el padre
            // console.log(data)
            this.refrescar()

          })
          .catch((err) => {console.error(`${err}`)})

      },

      vaciarForm() {
        console.log("entro")
        this.editproduct = {
          name: '',
          desc: '',
          img: '',
          qty: '',
          price: '',
        }
      },

      refrescar() {
        console.log("el producto editado es: ", this.editproduct.name)
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

