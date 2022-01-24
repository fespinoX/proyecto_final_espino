<template>
  <div>
    <NavBar />

    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1>Mi Carrito</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col>

          <div
            v-if="carrito"
          >

            <div>
              <CarritoTabla
                @click="nextPageCarrito"
              />
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

  // import store from '@/store'

  //Components
  import NavBar from './../organisms/NavBar.vue'
  import CarritoTabla from '../templates/CarritoTabla.vue'

  import { mapState } from "vuex"

  export default {
    components: {
      NavBar,
      CarritoTabla,
    },
    name: 'CarritoPage',
    props: {
      productsCarrito: {
        type: Array
      },
    },
    data: () => ({
    }),

    methods: {

      nextPageCarrito (page) {
        this.paginaCarrito = page
      },

      irAhome() {
        this.$router.push('/');
      }
      
    },

    computed : {
      ...mapState({
        carrito: state => state.carrito,
      }),
    },

    mounted() {
      this.$nextTick(function () {
        this.$store.dispatch("levantarCarrito")
      })
    }

  }

</script>
