<template>
  <div>
    <NavBar />

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
            <p>Tu carrito está vacío, agregá productos a tu carrito para poder hacer un pedido</p>
            <v-btn
              color="accent"
              @click="irAhome"
            >
              Ver productos
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

  </div>    
</template>

<script>

  //Components
  import NavBar from './../organisms/NavBar.vue'
  import CarritoTabla from '../templates/CarritoTabla.vue'


  export default {
    components: {
      NavBar,
      CarritoTabla 
    },
    name: 'CarritoPage',
    props: {
      productsCarrito: {
        type: Array
      },
    },
    data: () => ({
      mostrarCarrito: false,
      logueado: false
    }),

    methods: {
      checkLogueado() {
        if(JSON.parse(localStorage.getItem('user'))) {
          this.logueado = true
        } else {
          this.logueado = false
          this.$router.push('/User');
        }
      },
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
      },
      irAhome() {
        this.$router.push('/');
      }
    },

    mounted() {
      this.$nextTick(function () {
        this.checkLogueado()
        this.checkCarrito()
      })
    }

  }

</script>
