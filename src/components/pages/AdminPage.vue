<template>
  <v-container>


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
    }),
    methods: {
    },
  }

</script>
