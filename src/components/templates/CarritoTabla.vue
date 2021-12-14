<template>
  <div>
    <v-row>
      <v-col>
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
                <td class="text-left">
                  <v-form class="qtyform" v-model="valid">
                    <v-text-field
                      v-model="item.qty"
                      label="Cantidad"
                      required
                      type="number"
                      min="1"
                      :rules="numberRules"
                    ></v-text-field>
                    <v-btn 
                      color="green"
                      class="qtyform-btn"
                      dark
                      small
                      @click="editarItemCarrito(item)"
                    >
                      <v-icon
                        small
                      >
                        mdi-check-outline
                      </v-icon>
                    </v-btn>
                  </v-form>
                </td>
                <td class="text-left">{{ item.price }}</td>
                <td class="text-left">
                  {{ calcularTotal(item.qty, item.price) }}
                </td>
                <td class="text-left">
                  <v-btn
                    @click="borrarItemCarrito(item.id)"
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
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn 
          color="secondary"
          dark
          @click="realizarPedido()"
        >
          Realizar Pedido
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn 
          color="red"
          dark
          @click="vaciarCarrito()"
        >
          Vaciar Carrito
        </v-btn>
      </v-col>
    </v-row>    
  </div>
</template>

<script>

  import axios from "axios"

  export default {
    name: 'CarritoTabla',
    components: {
    },
    props: {
    },
    data: () => ({
      valid: false,
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
      newpedido: {
        "userid": '',
        "productos": [],
        "entregado": false,
        "fecha": '',
        "total": ''
      },
      imgURL: '/assets/img/',
      imgExt: '.jpg',
      numberRules: [
        v => !!v || 'Por favor complete este campo',
        v => v > 0 || 'Este campo debe ser mayor a 0',
      ],
      nuevocarrito: '',
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

      hayCarrito(nuevocarrito) {
        if (nuevocarrito.length > 0) {
          console.log("hay carrito")
          return true
        }
      },

      borrarItemCarrito(id) {

        this.makeNuevoCarrito(id)
        
        this.setCarrito()

        if (!this.hayCarrito(this.nuevocarrito)) {
          // console.log("el carrito está vacío")
          localStorage.removeItem('carrito');
        }
        
        this.$emit("click", this.carrito);

      },

      editarItemCarrito(item) {
        let carrito = []
        this.makeNuevoCarrito(item.id)
        let itemeditado = {
          id: item.id,
          qty: item.qty,
          name: item.name,
          price: item.price,
          img: item.img
        }
        carrito = JSON.parse(localStorage.getItem('carrito'))
        carrito.push(itemeditado);
        localStorage.setItem('carrito', JSON.stringify(carrito))
      },

      vaciarCarrito() {
        localStorage.removeItem('carrito');
        this.$emit("click", this.carrito);
        
      },

      realizarPedido() {

        this.agregarItemsAlPedido()

        axios
          .post(
            `https://61b145c33c954f001722a877.mockapi.io/pedidos`,
            this.newpedido

          )
          .then((data) => {
            console.log("El pedido agregado es:", data);
          })
          .catch((err) => {console.error(`${err}`)})

        this.vaciarCarrito()
        this.$router.push('/');
      },

      agregarItemsAlPedido() {

        const localUser = JSON.parse(localStorage.getItem('user')).id
        let pedidoTotal = 0
        
        this.newpedido.userid = localUser
        this.newpedido.fecha = new Date()

        this.carrito.forEach(element => {
          console.log(element)
          console.log(element.name)
          this.newpedido.productos.push({
            "productname": element.name,
            "orderedqty": element.qty
          })
          pedidoTotal += (element.price * element.qty)
        });

        this.newpedido.total = pedidoTotal
        
        console.log("el newpedido es:", this.newpedido)

      },

      makeNuevoCarrito(id) {
        this.nuevocarrito = this.carrito.filter(function( obj ) {
          return obj.id !== id;
        });
        localStorage.setItem('carrito', JSON.stringify(this.nuevocarrito))
      }

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

  .qtyform {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    .qtyform-btn {
      margin-left: 5px;
    }
  }

</style>

