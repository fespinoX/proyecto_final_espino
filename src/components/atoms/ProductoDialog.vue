<template>
  <v-dialog v-model="open">
    <v-card>
      <v-card-title>
        <h1>{{ productoSeleccionado.name }}</h1>
      </v-card-title>
      <v-card-text>
        
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
