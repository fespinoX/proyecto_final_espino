<template>
  <v-card>
    <img
      height="250"
      :src="'./../../assets/img/' + product.img + '.jpg'"
    ><img>
    <v-card-title>
      {{ product.nombre }}
    </v-card-title>
    <v-card-text>
      <p>${{ product.precio }}</p>
      <p v-if="product.cantidad > 0">Stock: {{ product.cantidad }}</p>
      <v-chip v-else>
        Sin stock
      </v-chip>
    </v-card-text> 
</v-card>
</template>

<script>

  export default {
    name: 'ListaProductos',
    data: () => ({

    }),
    props: {
      product: {
        type: Object,
      }
    }
  }

</script>
