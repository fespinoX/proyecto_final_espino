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
            
            <td class="text-left">
              <ul
                class="no-style-list"
              >
                <li>
                  {{ item.firstName }} {{ item.lastName }}
                </li>
                <li>
                  {{ item.email }}
                </li>
                <li>
                  {{ item.telefono }}
                </li>
                <li>
                  <ul
                    class="no-style-list"
                  >
                    <li>
                      {{ item.addressLineOne }}
                    </li>
                    <li>
                      {{ item.addressLineTwo }}
                    </li>
                    <li>
                      {{ item.city }} {{ item.province }}
                    </li>
                    <li>
                      {{ item.postal }}
                    </li>                    
                  </ul>
                </li>                                
                                                              
              </ul>
            </td>
            <td class="text-left">
              <ul
                class="no-padding"
              >
                <li
                  v-for="producto in item.productos"
                  :key="producto.productid"
                >
                  <span>Producto: {{ producto.productname}}</span> | 
                  <span>Cantidad: {{producto.qty}}</span>
                </li>
              </ul>
            </td>
            <td class="text-left">${{ item.total }}</td>
            <td class="text-left">{{ item.metododepago }}</td>
            <td class="text-left">{{ item.fecha }}</td>
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

  // import axios from "axios"

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
          text: "Pago",
          value: "metododepago"
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
        metododepago: '',
        fecha: '',
        id: '',
      },
    }),

    methods: {
      borrarPedido(id) {
        this.$store.dispatch("borrarPedido", id)
      },

      entregarPedido(pedido) {
        this.editpedido.userid = pedido.userid
        this.editpedido.productos = pedido.productos
        this.editpedido.total = pedido.total
        this.editpedido.metododepago = pedido.metododepago
        this.editpedido.fecha = pedido.fecha
        this.editpedido.id = pedido.id
        this.editpedido.entregado = true

        this.$store.dispatch("editarPedido", this.editpedido)

      }
    },
    
    computed : {
      ...mapState({
        pedidos: state => state.pedidos,
      }),
    }
  }



</script>

<style lang="scss" scoped>

  .no-style-list {
    list-style: none;
    padding-left: 0;
  }

  .no-padding {
    padding: 0;
  }

</style>

