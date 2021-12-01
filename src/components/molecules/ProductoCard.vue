<template>
  <div>
    <v-card>
      <v-img
        height="250"
        :src="'./../../assets/img/' + product.img"
      ></v-img>
      <v-card-title>
        {{ product.nombre }}
      </v-card-title>
      <v-card-text>
        <p>${{ product.precio }}</p>
        <div v-if="product.cantidad > 0">
          <v-btn color="red" dark @click="verDetalle(product)">Ver mas</v-btn>
        </div>
        <v-chip v-else>
          Sin stock
        </v-chip>
      </v-card-text> 
    </v-card>
    <ProductoDialog
      :productoSeleccionado="productoSeleccionado"
      :open="dialog"
    />
  </div>
</template>

<script>

  // Components
  import ProductoDialog from "../atoms/ProductoDialog.vue";

  export default {
    name: 'ListaProductos',
    components: {
      ProductoDialog,
    },
    data: () => ({
      dialog: false,
      productoSeleccionado: {},
    }),
    props: {
      product: {
        type: Object,
      }
    },
    methods: {
      verDetalle(producto) {
        this.dialog = true;
        this.productoSeleccionado = producto;
        console.log(producto);
      },
    },
  }


// src="./../../assets/img/default.jpg"
</script>
