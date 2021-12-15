<template>
  <div>
    <v-data-table
      :headers="tablaHeader"
      :items="productos"
      class="elevation-1"
    >
      <template
        v-slot:body="{ items }"
      >
        <tbody>
          <tr
            v-for="item in items"
            :key="item.id"
          >
            
            <td>
              <v-img
                height="50"
                width="50"
                :src="imgURL + item.img + imgExt"
              ></v-img>
            </td>
            <td class="text-left">{{ item.name }}</td>
            <td class="text-left">
              <span
                v-if="item.qty > 0"
              >
                {{ item.qty }}
              </span>
              <v-chip 
                color="red"
                v-else
                small
                dark
              >
                Sin stock
              </v-chip>
            </td>
            <td class="text-left">{{ item.price }}</td>
            <td class="text-left">
              <v-btn-toggle
                rounded
              >
                <v-btn
                  @click="editarProducto(item.id)"
                  color="green"
                  small
                  dark
                >
                  <v-icon
                    small
                  >
                    mdi-pencil
                  </v-icon>
                </v-btn>
                <v-btn
                  @click="borrarProducto(item.id)"
                  color="red"
                  small
                  dark
                >
                  <v-icon
                    small
                  >
                    mdi-delete
                  </v-icon>
                </v-btn>
              </v-btn-toggle>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>

    <EditProductForm 
      v-if="productid !=''"
      :productid="productid"
      @submit="editadoNotification"
    />
    <v-btn
      class="my-4"
      color="secondary"
      @click="mostrarAdd"
      v-if="!mostraradd"
    >
      Agregar producto
    </v-btn>
    <AddProductForm v-if="mostraradd" />

  </div>
</template>

<script>

  import axios from "axios"

  // Components
  import EditProductForm from '../molecules/EditProductForm';
  import AddProductForm from '../molecules/AddProductForm';

  export default {
    name: 'ProductosTabla',
    components: {
      EditProductForm,
      AddProductForm
    },
    props: {
    },
    data: () => ({
      tablaHeader: [
        {
          text: "Imagen",
          value: "img"
        },        
        {
          text: "Producto",
          value: "name"
        },
        {
          text: "Cantidad",
          value: "qty"
        },          
        {
          text: "Precio",
          value: "price"
        },
        {
          text: "Acciones"
        }
      ],
      productos: [],
      productid: '',
      mostraradd: false,
      imgURL: '/assets/img/',
      imgExt: '.jpg',
    }),

    methods: {
      levantarProductos() {
      axios
        .get('https://61b145c33c954f001722a877.mockapi.io/productos')
        .then(response => (this.info = response))
        .then(data => {
        this.productos = data.data
        console.log("productos levantados de la DB")
        })
        .catch((err) => {console.error(`${err}`)})
      },

      editarProducto(id) {
        this.productid = id
        console.log("editar el producto " + id)
        
      },

      borrarProducto(id) {

        axios
          .delete(
            `https://61b145c33c954f001722a877.mockapi.io/productos/${id}`
          )
          .then((data) => {
            console.log("Borrar producto:", data.data.name);
            this.levantarProductos()
          })
          .catch((err) => {console.error(`${err}`)})

      },

      editadoNotification(editadoname) {
        console.log("se edito re bien: ", editadoname)
        this.productid = ''
        this.levantarProductos()
      },

      mostrarAdd() {
        this.mostraradd = true
      },

    },
    
    mounted() {
      this.$nextTick(function () {
          this.levantarProductos()
      })
    }    
  }

</script>

<style lang="scss" scoped>


</style>

