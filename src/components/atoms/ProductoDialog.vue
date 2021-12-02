<template>
  <v-dialog v-model="open" @click:outside="$emit('manejarVentana', false)">
    <v-card>
      <v-card-title>
        <h1>{{ productoSeleccionado.nombre }}</h1>
      </v-card-title>
      <v-card-text>
        <p>{{ productoSeleccionado.desc }}</p>
        <p>Precio: ${{productoSeleccionado.precio}}</p>
        <p>Cantidad disponible: {{productoSeleccionado.cantidad}}</p>
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
};
</script>

<style lang="scss" scoped></style>
