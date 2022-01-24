<template>
  <div>
    <NavBar />

    <v-container>
      <div
        v-if="paginaCarrito === 1"
      >
        <v-row 
          class="text-center"
        >
          <v-col
            cols="12"
          >
            <h1>Pedido</h1>
            <p>Ya estás cerquísima de recibir tus juegos! Elegí un medio de pago y completá tu dirección para iniciar la compra.</p>
          </v-col>
        </v-row>
         <v-row>
            <v-col
              cols="12"
              md="8"
            >
              <PedidoForm @click="mostrarResumen" />
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <ResumenCarrito />
            </v-col>
          </v-row>
      </div>

      <div
        v-else
      >
        <v-row>
          <v-col
            class="text-center"
          >
            
              <ResumenPedido />

          </v-col>
        </v-row>
      </div>

    </v-container>

  </div>    
</template>

<script>

  // import store from '@/store'

  //Components
  import NavBar from './../organisms/NavBar.vue'
  import PedidoForm from '../molecules/PedidoForm.vue'
  import ResumenCarrito from '../molecules/ResumenCarrito.vue'
  import ResumenPedido from '../molecules/ResumenPedido.vue'


  export default {
    components: {
      NavBar,
      PedidoForm,
      ResumenCarrito,
      ResumenPedido
    },
    name: 'PedidooPage',
    props: {

    },
    data: () => ({
      paginaCarrito: 1,
    }),

    methods: {

      mostrarResumen () {
        this.paginaCarrito = 2
      },
      
    },

    mounted() {
      this.$nextTick(function () {

      })
    }

  }

</script>
