<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Admin Page</h1>
        <p>Bienvenido: ACAVAELUSER</p>
        
        <h2 class="mt-4">Lista productos</h2>
        <p>Estos son tus productos disponibles:</p>
        <ProductosTabla />

        <h2 class="mt-4">Cargar un nuevo producto</h2>

        <AddProductForm />

      </v-col>

    </v-row>
  </v-container>
</template>

<script>

  // Components
  import ProductosTabla from '../templates/ProductosTabla';
  import AddProductForm from '../molecules/AddProductForm';


  export default {
    name: 'AdminPage',
    components: {
      ProductosTabla,
      AddProductForm
    },

    data: () => ({
        productos: []
    }),
    methods: {
    },
  }

/*
TODO:

* Editar productos



*/

</script>
