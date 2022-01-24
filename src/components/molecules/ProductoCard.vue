<template>
  <div>
    <v-card>
      <v-img
        v-if="product.img"
        height="250"
        :src="imgURL + product.img + imgExt"
      ></v-img>
      <v-img
        v-else
        height="250"
        :src="imgURL + 'default' + imgExt"
      ></v-img>
      <v-card-title
        class="card-title"
      >
        <h3 class="text-center">{{ product.name }}</h3>
      </v-card-title>
      <v-card-text>
        <p class="price">${{ product.price }}</p>

        <div v-if="product.qty > 0">
          <div>
            <v-btn color="primary" @click="verDetalle(product)">Ver mas</v-btn>
          </div>
          <div class="mt-2">
            <v-btn color="secondary" dark @click="agregarAlCarrito(product)">Agregar al carrito</v-btn>
          </div>
        </div>

        <v-chip 
          color="red"
          v-else
        >
          Sin stock
        </v-chip>
      </v-card-text> 
    </v-card>
    <ProductoDialog
      :productoSeleccionado="productoSeleccionado"
      :open="dialog"
      @manejarVentana="manejarVentana($event)"
      @close="manejarVentana(false)"
      
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
      imgURL: '/assets/img/',
      imgExt: '.jpg',
      productoAgregado: {
        id: '',
        qty: 1,
        name: '',
        price: '',
        img: '',
      },
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
      agregarAlCarrito (product) {
        this.productoAgregado.id = product.id
        this.productoAgregado.name = product.name
        this.productoAgregado.price = product.price
        this.productoAgregado.img = product.img
        
        this.$store.dispatch("agregarAlCarrito", this.productoAgregado)

        this.$store.dispatch("levantarCarrito")

        this.mostrarAlerta()
      },

      mostrarAlerta () {
        let alert = {
          type: "success",
          visible: true,
          alerta: "carrito",
          texto: this.alertContent,
        }
        this.$store.dispatch("mostrarAlert", alert)
      },   
    },
    computed: {
      alertContent: function () {
        return this.productoAgregado.name
      }
    }
  }

</script>

<style lang="sass" scoped>

  .card-title
    display: block


</style>
