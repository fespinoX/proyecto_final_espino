<template>
  <div>
    <h2 class="mt-4">Completá tu pedido</h2>

    <v-form 
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-container>

        <v-row>

          <v-col
            cols="12"
          >
            <h3>Medios de pago</h3>
          </v-col>

          <v-col
            cols="12"
          >
            <v-radio-group
              v-model="metodoDePago"
              metodoDePago
              required
            >
              <v-radio
                label="Efectivo en entrega"
                value="efectivo"
              ></v-radio>
              <v-radio
                label="Transferencia bancaria"
                value="transferencia"
              ></v-radio>
              <v-radio
                label="Mercado Pago"
                value="mp"
              ></v-radio>
            </v-radio-group>
          </v-col>

          <v-col
            cols="12"
          >
            <h3>Datos de la entrega</h3>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="usuario.firstName"
              :rules="textRules"
              label="Nombre"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="usuario.lastName"
              :rules="textRules"
              label="Apellido"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="usuario.email"
              :rules="emailRules"
              label="Email"
              type="email"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="usuario.telefono"
              :rules="textRules"
              label="Teléfono"
              type="number"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="usuario.addressLineOne"
              :rules="textRules"
              label="Dirección: Calle y número"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="usuario.addressLineTwo"
              label="Dirección: Piso y departamento (opcional)"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="usuario.postal"
              :rules="textRules"
              label="Código Postal"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="usuario.city"
              :rules="textRules"
              label="Ciudad"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
          >
            <v-text-field
              v-model="usuario.province"
              :rules="textRules"
              label="Provincia"
              required
            ></v-text-field>
          </v-col>          
          
          

        </v-row>
      </v-container>
      <v-btn
        class="mr-4"
        @click="realizarPedido"
        color="primary"
      >
        Realizar pedido
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  // import axios from "axios"

  import { mapState } from "vuex"

  export default {
    name: 'AddProductForm',
    components: {
    },
    data: () => ({
      valid: true,
      metodoDePago: "efectivo",
      pedidoNuevo: {},
      textRules: [
        v => !!v || 'Por favor complete este campo',
      ],
      numberRules: [
        v => !!v || 'Por favor complete este campo',
        v => v >= 0 || 'Este campo debe ser mayor o igual a 0',
      ],
      emailRules: [
        v => !!v || 'Por favor complete este campo',
        v => /.+@.+/.test(v) || 'Por favor complete con una dirección de e-mail',
      ],
    }),
    props: {

    },
    methods: {

      realizarPedido() {
        
        this.generarPedidoNuevo()

        if (this.$refs.form.validate()) {
            this.$store.dispatch("agregarPedido", this.pedidoNuevo)
            this.$store.dispatch("vaciarCarrito")
            this.$emit("click", this.pedidoNuevo);
        }

      },

      generarPedidoNuevo() {

        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        this.pedidoNuevo.userid = this.usuario.id,

        this.pedidoNuevo.productos = [],
        this.pedidoNuevo.entregado = false
        this.pedidoNuevo.total = this.totalCarrito
        this.pedidoNuevo.fecha = date
        this.pedidoNuevo.metododepago = this.metodoDePago
        this.pedidoNuevo.firstName = this.usuario.firstName
        this.pedidoNuevo.lastName = this.usuario.lastName
        this.pedidoNuevo.email = this.usuario.email
        this.pedidoNuevo.telefono = this.usuario.telefono
        this.pedidoNuevo.addressLineOne = this.usuario.addressLineOne
        this.pedidoNuevo.addressLineTwo = this.usuario.addressLineTwo
        this.pedidoNuevo.city = this.usuario.city
        this.pedidoNuevo.province = this.usuario.province
        this.pedidoNuevo.postal = this.usuario.postal

        this.obtenerProductosDeCarrito()

      },

      obtenerProductosDeCarrito() {

        let productosPedido = []

        this.carrito.forEach(function (itemcarrito) {
          
          let obj = {
            productname: "",
            qty: ""
          };

          obj.productname = itemcarrito.name;
          obj.qty = itemcarrito.qty;

          productosPedido.push(obj);

        });

        this.pedidoNuevo.productos = productosPedido

      }

    },

    computed : {
      ...mapState({
        usuario: state => state.usuario,
        carrito: state => state.carrito,
        totalCarrito: state => state.totalCarrito,
      }),
    },

    mounted() {
      this.$nextTick(function () {
      })
    }   

  }


</script>

