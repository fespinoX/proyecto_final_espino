<template>
  <div>
    <h2 class="mt-4">Carrito</h2>

    <v-row>
      <v-col
        cols="12"
      >
        <ul
          class="no-style-list"
        >
          <li
            v-for="item in carrito"
            :key="item.id"
          >
            <ul
              class="no-style-list resumen-list"
            >
              <li class="bold">{{ item.name }}</li>
              <li>Cantidad: {{ item.qty }}</li>
              <li>Precio: ${{ item.price }}</li>
              <li>Subtotal: ${{ calcularTotal(item.qty, item.price) }}</li>
            </ul>
            
          </li>
        </ul>

        <p class="total">Total: ${{totalCarrito}}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mapState } from "vuex"

  export default {
    name: 'ResumenCarrito',
    components: {
    },
    data: () => ({
      
    }),
    props: {

    },
    methods: {

      calcularTotal(qty, price) {
        return qty * price
      },

    },

    computed : {
      ...mapState({
        carrito: state => state.carrito,
        totalCarrito: state => state.totalCarrito,
      }),
    },

    mounted() {
      this.$nextTick(function () {
        this.$store.dispatch("levantarCarrito")
      })

    },

  }


</script>

<style lang="scss" scoped>

    .no-style-list {
       padding: 20px;
      list-style: none;
      padding-left: 0;
    }
    
    .resumen-list {
      border-bottom: 1px solid;
    }

    .bold {
      font-weight: 600;
    }

    .total {
      font-weight: 700;
      font-size: 1.3rem;
      color: #fde24f;
    }

</style>

