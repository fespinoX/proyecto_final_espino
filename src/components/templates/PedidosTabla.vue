<template>
  <div>
    <v-data-table
      :headers="tablaHeader"
      :items="pedidos"
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
            
            <td class="text-left">{{ item.userid }}</td>
            <td class="text-left">
              <ul>
                <li
                  v-for="producto in item.productos"
                  :key="producto.productid"
                >
                  <span>Producto: {{ producto.productname}}</span> | 
                  <span>Cantidad: {{producto.orderedqty}}</span>
                </li>
              </ul>
            </td>
            <td class="text-left">${{ item.total }}</td>
            <td class="text-left">${{ item.fecha }}</td>
            <td class="text-left">
              <v-icon
                color="green"
                v-if="item.entregado"
              >
                mdi-check-outline
              </v-icon>
              <v-icon
                color="red"
                v-else
              >
                mdi-alarm
              </v-icon>

            </td>
            <td class="text-left">
              <v-btn-toggle
                rounded
              >
                <v-btn
                  @click="entregarPedido(item)"
                  color="green"
                  dark
                  small
                  v-if="!item.entregado"
                >
                  <v-icon
                    small
                  >
                    mdi-moped
                  </v-icon>
                </v-btn>
                <v-btn
                  color="red"
                  dark
                  small
                  @click="borrarPedido(item.id)"
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


  </div>
</template>

<script>

  import axios from "axios"

  // Vuex
  import { mapState } from "vuex"


  export default {
    name: 'PedidosTabla',
    components: {

    },
    props: {
    },
    data: () => ({
      tablaHeader: [
        {
          text: "Usuario",
          value: "userid"
        },        
        {
          text: "Productos"
        },         
        {
          text: "Total",
          value: "total"
        },
        {
          text: "Fecha",
          value: "fecha"
        },
        {
          text: "Estado",
          value: "entregado"
        },
        {
          text: "Acciones"
        },      
      ],
      editpedido: {
        userid: '',
        productos: [],
        entregado: '',
        total: '',
        fecha: '',
        id: '',
      },
    }),

    methods: {
      borrarPedido(id) {

        axios
          .delete(
            `https://61b145c33c954f001722a877.mockapi.io/pedidos/${id}`
          )
          .then((data) => {
            console.log("Borrar pedido:", data.data.id);
            this.levantarPedidos()
          })
          .catch((err) => {console.error(`${err}`)})

      },
      entregarPedido(pedido) {
        this.editpedido.userid = pedido.userid
        this.editpedido.productos = pedido.productos
        this.editpedido.entregado = true
        this.editpedido.total = pedido.total
        this.editpedido.fecha = pedido.fecha
        this.editpedido.id = pedido.id

        axios
          .put(
            `https://61b145c33c954f001722a877.mockapi.io/pedidos/${pedido.id}`,
            this.editpedido

          )
          .then(() => {
            console.log("pedido " + this.editpedido.id + " entregado")
            this.levantarPedidos()
          })
          .catch((err) => {console.error(`${err}`)})

      }
    },
    
    computed : {
      ...mapState({
        pedidos: state => state.pedidos,
      }),
    }
  }

/* 

TODO:

* DELETE: Agregar confirm dialog
* PUT: Confirm antes de entregar
* Mostrar sólo los entregados (quizás un filtro en la tabla?)

*/

</script>

<style lang="scss" scoped>


</style>

