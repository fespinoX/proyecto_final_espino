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
      <v-card-title>
        {{ product.name }}
      </v-card-title>
      <v-card-text>
        <p>${{ product.price }}</p>
        <div v-if="product.qty > 0">
          <v-btn color="red" dark @click="verDetalle(product)">Ver mas</v-btn>
          <v-btn color="green" dark @click="agregarAlCarrito(product)">Agregar al carrito</v-btn>
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
        this.setInLs()
        console.log("el carrito del ls: ")
        console.log(localStorage.getItem('carrito'))
        console.log("agregado " + this.productoAgregado.name + " al carrito")
      },
      setInLs () {
        let carrito = []
        if(!localStorage.getItem('carrito')) {
          carrito.push(this.productoAgregado);
          localStorage.setItem('carrito', JSON.stringify(carrito))
        } else {
          carrito = JSON.parse(localStorage.getItem('carrito'))
          carrito.push(this.productoAgregado);
          localStorage.setItem('carrito', JSON.stringify(carrito))
        }
      }      
    },
  }


// src="./../../assets/img/default.jpg"
// src="@/assets/img/default.jpg"

</script>
