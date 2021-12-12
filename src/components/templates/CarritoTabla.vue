<template>
  <div>
    <v-data-table
      :headers="tablaHeader"
      :items="carrito"
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
            <td class="text-left">{{ item.qty }}</td>
            <td class="text-left">{{ item.price }}</td>
            <td class="text-left">
              {{ calcularTotal(item.qty, item.price) }}
            </td>
            <td class="text-left">
              <v-btn
                @click="borrarItemCarrito(item.id)"
                color="red"
                small
              >
                <v-icon
                  small
                >
                  mdi-delete
                </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>

  </div>
</template>

<script>

  // Components

  export default {
    name: 'CarritoTabla',
    components: {
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
          text: "Total",
          value: "total"
        },        
        {
          text: "Acciones"
        }
      ],
      carrito: [],
      imgURL: '/assets/img/',
      imgExt: '.jpg',
    }),

    methods: {

      setCarrito() {
        if(localStorage.getItem('carrito')) {
          this.carrito = JSON.parse(localStorage.getItem('carrito'))
        }        
      },

      calcularTotal(qty, price) {
        return qty * price
      },

      borrarItemCarrito(id) {
        
        let nuevocarrito = this.carrito.filter(function( obj ) {
          return obj.id !== id;
        });
        
        localStorage.setItem('carrito', JSON.stringify(nuevocarrito))

        console.log("se borro del carrito")

        this.setCarrito()

      },

      editarItemCarrito() {

      },      

    },

    computed: {

    },
    
    mounted() {
      this.$nextTick(function () {
          this.setCarrito()
      })
    }    
  }

</script>

<style lang="scss" scoped>


</style>

