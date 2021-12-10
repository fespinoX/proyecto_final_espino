<template>
  <v-dialog v-model="open" @click:outside="$emit('manejarVentana', false)">
    <v-card>
      <v-card-title>
        <h1>{{ productoSeleccionado.nombre }}</h1>
      </v-card-title>
      <v-card-text>
        <p>{{ productoSeleccionado.desc }}</p>
        <p>Precio: ${{productoSeleccionado.price}}</p>
        <p>Cantidad disponible: {{productoSeleccionado.qty}}</p>
        <v-btn color="green" dark @click="agregar(productoSeleccionado)">Agregar al carrito</v-btn>
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
  methods: {
    agregar () {
      console.log("agregado " + this.productoSeleccionado.name + " al carrito")
    }
  }
};
</script>

<style lang="scss" scoped></style>
