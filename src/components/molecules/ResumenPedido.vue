<template>
  <div>
    <v-row>
      <v-col
        cols="12"
      >
        <h1>Pedido realizado!</h1>
        <p>Felicitaciones! Ya completaste tu pedido!</p>

        <ul
          class="no-style-list"
        >
          <li
              v-for="item in pedido.productos"
              :key="item.id"
              class="color-yellow"
          >
              {{item.productname}} x{{item.qty}}
          </li>
        </ul>

        <p class="total">
          Total: {{pedido.total}}
        </p>

        <p>Si elegiste la opción de pagar con Mercado Pago o transferencia bancaria te vamos a estar contactando por mail para completar el pago. Quedate atento/a!</p>
        <p>Una vez que completes el pago vas a recibir tu pedido en las próximas 48hs en la dirección que ingresaste:</p>
        
        <div
          class="info-entrega"
        >
          <p>{{pedido.firstName}} {{pedido.lastName}}</p>
          <p>{{pedido.email}}</p>
          <p>{{pedido.telefono}}</p>
          <p>{{pedido.addressLineOne}}</p>
          <p>{{pedido.addressLineTwo}}</p>
          <p>{{pedido.city}} {{pedido.province}}</p>
          <p>{{postal}}</p>
        </div>

        <p>Muchas gracias!</p>

      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mapState } from "vuex"

  export default {
    name: 'ResumenPedido',
    
    components: {
    },
    data: () => ({
      pedido: []
    }),
    props: {

    },
    methods: {

        encontrarPedido() {
            this.pedido = this.pedidos[this.pedidos.length - 1]
        }
    },

    computed : {
      ...mapState({
        pedidos: state => state.pedidos,
        usuario: state => state.usuario,
      }),
    },

    mounted() {
      this.$nextTick(function () {
        this.$store.dispatch("levantarPedidos")
        this.encontrarPedido()
      })

    },

  }


</script>

<style lang="scss" scoped>

    .no-style-list {
      padding: 20px 0;
      list-style: none;
    }

    .bold {
      font-weight: 600;
    }

    .total {
      font-weight: 700;
      font-size: 1.3rem;
      color: #fde24f;
    }

    .info-entrega {
      margin: 15px 0;
      p {
        margin-bottom: 0;
        color: #fde24f;
      }
    }

</style>

