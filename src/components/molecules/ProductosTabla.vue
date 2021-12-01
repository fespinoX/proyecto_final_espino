<template>
    <v-data-table
        :headers="carritoHeader"
        :items="productscarrito"
        class="elevation-1"
        hide-default-footer
    >

    </v-data-table>
</template>

<script>

  // Data
  import productscarrito from "./../../assets/data/productscarrito.json"

  export default {
    name: 'ProductosTabla',
    props: {
    },
    data: () => ({
      productscarrito,
      carritoHeader: [
        {
          text: "Nombre del producto",
          value: "nombre"
        },
        {
          text: "Precio",
          value: "precio"
        },
        {
          text: "Cantidad",
          value: "cantidad"
        },
      ]
    }),
  }

// los headers y los productos pueden ir a data

</script>