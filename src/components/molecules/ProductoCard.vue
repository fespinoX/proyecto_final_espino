<template>
  <div>
    <v-card>
      <v-img
        height="250"
        :src="defaultImg"
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
      @manejarVentana="manejarVentana($event)"
      
    />
  </div>
</template>

<script>

  import defaultImg from "@/assets/img/default.jpg"

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
      defaultImg: defaultImg
    }),
    props: {
      product: {
        type: Object,
      }
    },
    methods: {
      verDetalle(product) {
        this.dialog = true;
        this.productoSeleccionado = product;
      },
      manejarVentana(estado) {
        this.dialog = estado;
      },
    },
  }


// src="./../../assets/img/default.jpg"
// src="@/assets/img/default.jpg"

</script>
