<template>
  <div>
    <h2 class="mt-4">Agregar un producto nuevo</h2>
    <v-form 
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-container>
        <v-row>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="name"
              :rules="nameRules"
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
              label="Descripción"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="img"
              :rules="nameRules"
              label="Nombre de la imagen"
              required
            ></v-text-field>
          </v-col>          
          
          <v-col
            cols="12"
          >
            <v-text-field
              v-model="qty"
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
              v-model="price"
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
        Agregar
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  // import axios from "axios"

  export default {
    name: 'AddProductForm',
    components: {
    },
    data: () => ({
      valid: true,
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
        v => v >= 0 || 'Este campo debe ser mayor o igual a 0',
      ],
    }),
    props: {

    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          this.newproduct = {
            "name": this.name,
            "qty": this.qty,
            "desc": this.desc,
            "img": this.img,
            "price": this.price,
          }
          this.agregarProducto()
          console.log("agregado el producto " + this.newproduct.name)
        } else {
          console.log("error de validación")
        }
      },
      agregarProducto() {
        this.$store.dispatch("agregarProducto", this.newproduct)
      },

    },
  }


</script>

