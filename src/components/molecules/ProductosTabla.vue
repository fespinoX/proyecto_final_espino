<template>
    <v-data-table
        :headers="carritoHeader"
        :items="products"
        class="elevation-1"
        hide-default-footer
    >

    </v-data-table>
</template>

<script>


  export default {
    name: 'ProductosTabla',
    props: {
      products: {
        type: Array,
      }
    },
    data: () => ({
      carritoHeader: [
        {
          text: "Nombre del producto",
          value: "name"
        },
        {
          text: "Cantidad",
          value: "qty"
        },          
        {
          text: "Precio",
          value: "price"
        },      
      ]
    }),
    mounted() {
      console.log("hala")
    },
    methods: {
      borrarProducto() {
        
      },
      editarProducto() {
        
      }
    }
  }

/* 

TODO:

* Mostrar imagen
* DELETE: Agregar botón de borrar para eliminar
* PUT: Agregar botón de edit para editar

*/

</script>

