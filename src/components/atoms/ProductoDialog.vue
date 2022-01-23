<template>
  <v-dialog v-model="open" @click:outside="$emit('manejarVentana', false)">
    <v-card>
      <v-card-title>
        <v-img
          v-if="productoSeleccionado.img"
          height="300"
          :src="imgURL + productoSeleccionado.img + imgExt"
        ></v-img>
        <v-img
          v-else
          height="300"
          :src="imgURL + 'default' + imgExt"
        ></v-img>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <h2 class="mt-4">{{ productoSeleccionado.name }}</h2>
          <p class="mt-2">{{ productoSeleccionado.desc }}</p>
          <p>Precio: ${{productoSeleccionado.price}}</p>
          <p>Cantidad disponible: {{productoSeleccionado.qty}}</p>
          <v-text-field
            class="my-4"
            v-model="carritoQty"
            label="Cantidad"
            required
            type="number"
            min="1"
            :rules="numberRules"
          ></v-text-field>
          <v-btn color="green" dark @click="agregarAlCarrito(productoSeleccionado)">Agregar al carrito</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ProductoDialog',
  props: {
    productoSeleccionado: Object,
    open: Boolean,
  },
  data: () => ({
    valid: false,
    carritoQty: 1,
    imgURL: '/assets/img/',
    imgExt: '.jpg',
    productoAgregado: {
      id: '',
      qty: '',
      name: '',
      price: '',
      img: ''
    },

    numberRules: [
      v => !!v || 'Por favor complete este campo',
      v => v > 0 || 'Este campo debe ser mayor a 0',
    ],
  }),
  methods: {
    agregarAlCarrito () {
      if (this.valid) {
        this.productoAgregado.id = this.productoSeleccionado.id
        this.productoAgregado.qty = parseInt(this.carritoQty)
        this.productoAgregado.name = this.productoSeleccionado.name
        this.productoAgregado.price = this.productoSeleccionado.price
        this.productoAgregado.img = this.productoSeleccionado.img
        
        console.log("producto agregado es", this.productoAgregado)
        this.$store.dispatch("agregarAlCarrito", this.productoAgregado)
      }
    },
  }
};
</script>
