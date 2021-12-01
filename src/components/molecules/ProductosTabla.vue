<template>
    <v-data-table
        :headers="carritoHeader"
        :items="carrito"
        class="elevation-1"
        hide-default-footer
    >
    
    </v-data-table>
</template>

<script>
  export default {
    name: 'ProductosTabla',
    props: {
      productsCarrito: {
        type: Array
      },
    },
    data: () => ({
      carritoHeader: [
        {
          text: "Nombre del producto",
          value: "name"
        },
        {
          text: "Precio",
          value: "price"
        },
        {
          text: "Cantidad",
          value: "qty"
        }
      ],
      carrito: [
        {   
          name: "Pantalon",
          price: 40,
          qty: 2
        }
      ]
    }),
  }

// los headers y los productos pueden ir a data

</script>