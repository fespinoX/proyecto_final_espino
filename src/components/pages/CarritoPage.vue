<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="page-guia">Carrito Page</h1>
        <h2>Mi Carrito</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <CarritoTabla
          v-if="mostrarCarrito"
          @click="borrarItemCarrito"
        />
        <div
          v-else
        >
          <p>El carrito está vacío</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  //Components
  import CarritoTabla from '../templates/CarritoTabla.vue'


  export default {
    components: { 
      CarritoTabla 
    },
    name: 'CarritoPage',
    props: {
      productsCarrito: {
        type: Array
      },
    },
    data: () => ({
      mostrarCarrito: false
    }),

    methods: {
      checkCarrito() {
        // console.log("entro al metodo")
        // console.log("carrito ls es:", localStorage.getItem('carrito'))
        if(localStorage.getItem('carrito') && localStorage.getItem('carrito').length > 2 && localStorage.getItem('carrito') != null) {
          //console.log("entro acaaa")
          this.mostrarCarrito = true
        } else {
          this.mostrarCarrito = false
        }
      },
      borrarItemCarrito (info) {
        console.log("info es: ", info)
        this.checkCarrito()
      }
    },

    mounted() {
      this.$nextTick(function () {
        this.checkCarrito()
      })
    }

  }

</script>
