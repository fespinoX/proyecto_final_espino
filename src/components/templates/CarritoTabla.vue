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
        <p class="total">
          Total: <span>${{totalCarrito}}</span>
        </p>
      </v-col>
    </v-row>
    <v-row
      v-if="usuario.user"
    >
      <v-col>
        <v-btn 
          color="secondary"
          dark
          @click="iniciarPedido()"
        >
          Comenzar compra
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
    
    <v-row
      v-if="!usuario.user"
    >
      <v-col>
        <p>Inciá sesión para realizar tu compra</p>
        <v-btn 
          color="secondary"
          dark
          @click="irAlLoguin()"
        >
          Loguearme
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>

  import { mapState } from "vuex"
  // import store from '@/store'

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
    }),

    methods: {

      setCarrito() {
        this.$store.dispatch("levantarCarrito")
      },

      calcularTotal(qty, price) {
        return qty * price
      },

      borrarItemCarrito(id) {

        this.$store.dispatch("borrarItemCarrito", id)

      },

      editarItemCarrito(item) {

        this.$store.dispatch("borrarItemCarrito", item.id)

        let itemeditado = {
          id: item.id,
          qty: parseInt(item.qty),
          name: item.name,
          price: item.price,
          img: item.img
        }

        this.$store.dispatch("editarItemCarrito", itemeditado)
        this.$store.dispatch("calcularTotalCarrito")

      },

      vaciarCarrito() {
        this.$store.dispatch("vaciarCarrito")
        this.$router.push('/');
      },

      irAlLoguin() {
        this.$router.push('/user'); 
      },

      iniciarPedido() {
       this.$router.push('/pedido'); 
      },

      agregarItemsAlPedido() {

        const localUser = JSON.parse(localStorage.getItem('user')).id
        let pedidoTotal = 0
        
        this.newpedido.userid = localUser
        this.newpedido.fecha = new Date()

        this.carrito.forEach(element => {
          this.newpedido.productos.push({
            "productname": element.name,
            "orderedqty": element.qty
          })
          pedidoTotal += (element.price * element.qty)
        });

        this.newpedido.total = pedidoTotal

      },

    },

    computed : {
      ...mapState({
        carrito: state => state.carrito,
        usuario: state => state.usuario,
        totalCarrito: state => state.totalCarrito,
      }),
    },
    
    mounted() {
      this.$nextTick(function () {
        this.$store.dispatch("levantarCarrito")
        this.$store.dispatch("calcularTotalCarrito")
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

  .total {
    font-size: 1.5rem;
    color: #00ebc7;
    span {
      font-weight: 600;
    }
  }

</style>

