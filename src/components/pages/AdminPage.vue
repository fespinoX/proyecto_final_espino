<template>
  <v-container>
    <v-row>
      <v-col
        v-if="admin"
      >
        <v-card>
          <v-tabs
            v-model="tab"
            background-color="orange"
            centered
            dark
            icons-and-text
          >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#productos">
              Productos
              <v-icon>mdi-dice-multiple-outline</v-icon>
            </v-tab>

            <v-tab href="#pedidos">
              Pedidos
              <v-icon>mdi-cart-variant</v-icon>
            </v-tab>

          </v-tabs>

          <v-tabs-items v-model="tab">

            <v-tab-item
              value="productos"
            >
              <v-card flat>
                <v-card-text>
                  <h2 class="mt-4">Lista productos</h2>
                  <p>Estos son tus productos disponibles:</p>
                  <ProductosTabla />
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item
              value="pedidos"
            >
              <v-card flat>
                <v-card-text>
                  <h2 class="mt-4">Lista de pedidos</h2>
                  <p>Estos son tus pedidos pendientes:</p>

                  <PedidosTabla />
                </v-card-text>
              </v-card>
            </v-tab-item>
          
          </v-tabs-items>

        </v-card>
      </v-col>

      <v-col
        v-else-if="logueado"
      >
        <p>Esta página es sólo para admins</p>
        <v-btn @click="irAlLogin()">Cambiar de usuario</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

  // Components
  import ProductosTabla from '../templates/ProductosTabla';
  import PedidosTabla from '../templates/PedidosTabla';

  export default {
    name: 'AdminPage',
    components: {
      ProductosTabla,
      PedidosTabla
    },

    data: () => ({
        productos: [],
        tab: null,
        logueado: false,
        admin: false,
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
      checkAdmin() {
        if(JSON.parse(localStorage.getItem('user')).admin) {
          this.admin = true
        }
      },
      irAlLogin() {
        localStorage.removeItem('carrito');
        localStorage.removeItem('user');
        this.$router.push('/user');
      },
    },
    mounted() {
      this.$nextTick(function () {
        this.checkLogueado()
        this.checkAdmin()
      })
    }
  }

</script>
