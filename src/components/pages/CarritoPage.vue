<template>
  <div>
    <NavBar />

    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1 class="page-guia">Carrito Page</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col>

          <div
            v-if="mostrarCarrito"
          >

            <div
              v-if="paginaCarrito === 1"
            >
              <CarritoTabla
                @click="borrarItemCarrito"
              />

            </div>

            <div
              v-else-if="paginaCarrito === 2"
            >
              <v-row>
                <v-col>
                  <PedidoForm />
                </v-col>
                <v-col>
                  <ResumenCarrito />
                </v-col>
              </v-row>
            </div>

            <div
              v-else
            >
              <p>confirmacion pedido</p>
            </div>


          </div>

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

  import store from '@/store'

  //Components
  import NavBar from './../organisms/NavBar.vue'
  import CarritoTabla from '../templates/CarritoTabla.vue'
  import PedidoForm from '../molecules/PedidoForm.vue'
  import ResumenCarrito from '../molecules/ResumenCarrito.vue'


  export default {
    components: {
      NavBar,
      CarritoTabla,
      PedidoForm,
      ResumenCarrito
    },
    name: 'CarritoPage',
    props: {
      productsCarrito: {
        type: Array
      },
    },
    data: () => ({
      mostrarCarrito: false,
      paginaCarrito: 1,
    }),

    methods: {

      checkCarrito() {
        this.$store.dispatch("levantarCarrito")
        if(store.state.carrito) {
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
        this.checkCarrito()
      })
    }

  }

</script>
