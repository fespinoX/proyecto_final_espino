import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [],
    loadingProductos: true,
    pedidos: [],
  },
  mutations: {

    // Definir
    PRODUCTOS(state, payload) {
      state.productos = payload
    },
    PEDIDOS(state, payload) {
      state.pedidos = payload
    },

    // Agregar
    AGREGAR_PRODUCTO(state, payload) {
      state.productos.push(payload)
    },
    AGREGAR_PEDIDO(state, payload) {
      state.pedidos.push(payload)
    },

    // Borrar
    BORRAR_PRODUCTO() {
    },

    // Load
    LOADING_PRODUCTOS(state, payload) {
      state.loadingProductos = payload
    },
  },
  actions: {

    // Productos

    levantarProductos(context){
      axios
      .get('https://61b145c33c954f001722a877.mockapi.io/productos')
      .then(data => {
        context.commit("PRODUCTOS", data.data)
        context.commit("LOADING_PRODUCTOS", false)
      })
      .catch((err) => {console.error(`${err}`)})
    },

    agregarProducto(context, payload) {

      axios
        .post(
          `https://61b145c33c954f001722a877.mockapi.io/productos`,
          payload

        )
        .then(() => {
          context.commit("AGREGAR_PRODUCTO", payload)
        })
        .catch((err) => {console.error(`${err}`)})

    },

    borrarProducto(context, payload) {
      axios
      .delete(
        `https://61b145c33c954f001722a877.mockapi.io/productos/${payload}`
      )
      .then((data) => {
        console.log("Borrar producto:", data.data.name);
        this.$store.dispatch("levantarProductos")
      })
      .catch((err) => {console.error(`${err}`)})
    },

    // Pedidos

    levantarPedidos(context){
      axios
      .get('https://61b145c33c954f001722a877.mockapi.io/pedidos')
      .then(data => {
        context.commit("PEDIDOS", data.data)
      })
      .catch((err) => {console.error(`${err}`)})
    },

    agregarPedido(context, payload) {

      axios
        .post(
          `https://61b145c33c954f001722a877.mockapi.io/pedidos`,
          payload

        )
        .then(() => {
          context.commit("AGREGAR_PEDIDO", payload)
        })
        .catch((err) => {console.error(`${err}`)})

    }
  },
  modules: {
  }
})
