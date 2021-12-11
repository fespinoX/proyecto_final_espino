<template>
  <div>
    <h2 class="mt-4">Agregar un producto nuevo</h2>
    <v-form v-model="valid">
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
              v-model="name"
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
              v-model="desc"
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
              v-model="qty"
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
              v-model="price"
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
        Agregar
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
      name: '',
      desc: '',
      qty: '',
      price: '',
      img: '',
      newproduct: {},
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

    },
    methods: {
      submit() {
        if (this.valid) {
          this.newproduct = {
            "name": this.name,
            "qty": this.qty,
            "desc": this.desc,
            "img": "",
            "price": this.price,
          }
          this.agregarProducto()
          console.log("agregado el producto " + this.newproduct.name)
        } else {
          console.log("error de validación")
        }
      },
      agregarProducto() {
        axios
          .post(
            `https://61b145c33c954f001722a877.mockapi.io/productos`,
            this.newproduct

          )
          .then((data) => {
            console.log("Agregado el producto:", this.name);
            console.log("Data es:", data);
          })
          .catch((err) => {console.error(`${err}`)})
      },

    },
  }

/*

TODO:

* Agregar carga de imágenes con validación
* Validación en el click del botón

* Vaciar/ocultar form y alerta despues de agregar

*/

</script>

