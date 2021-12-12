<template>
  <v-dialog v-model="open" @click:outside="$emit('manejarVentana', false)">
    <v-card>
      <v-card-title>
        <h1>{{ productoSeleccionado.nombre }}</h1>
        <p>{{ productoSeleccionado.img }}</p>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <p>{{ productoSeleccionado.desc }}</p>
          <p>Precio: ${{productoSeleccionado.price}}</p>
          <p>Cantidad disponible: {{productoSeleccionado.qty}}</p>
          <v-text-field
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
        this.productoAgregado.qty = this.carritoQty
        this.productoAgregado.name = this.productoSeleccionado.name
        this.productoAgregado.price = this.productoSeleccionado.price
        this.productoAgregado.img = this.productoSeleccionado.img
        this.setInLs()
        console.log("el carrito del ls: ")
        console.log(localStorage.getItem('carrito'))
        console.log("agregado " + this.productoAgregado.name + " al carrito")
      }
    },
    setInLs () {
      let carrito = []
      if(!localStorage.getItem('carrito')) {
        carrito.push(this.productoAgregado);
        localStorage.setItem('carrito', JSON.stringify(carrito))
      } else {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        carrito.push(this.productoAgregado);
        localStorage.setItem('carrito', JSON.stringify(carrito))
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
