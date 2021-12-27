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

    // Editar
    EDITAR_PRODUCTO(state, data) {
      let id = data.data.id
      let index = state.productos.findIndex(producto => producto.id == id)
      state.productos.splice(index, 1)
      state.productos.push(data.data)
    },  
    EDITAR_PEDIDO() {
    },  

    // Borrar
    BORRAR_PRODUCTO(state, id) {
      let index = state.productos.findIndex(producto => producto.id == id)
      state.productos.splice(index, 1)
    },
    BORRAR_PEDIDO(state, id) {
      let index = state.pedidos.findIndex(pedido => pedido.id == id)
      state.pedidos.splice(index, 1)
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

    editarProducto({commit}, payload) {
      axios
        .put(
          `https://61b145c33c954f001722a877.mockapi.io/productos/${payload.id}`,
          payload

        )
        .then((data) => {
          commit('EDITAR_PRODUCTO', data)
          console.log('editaste, capo!')
 
        })
        .catch((err) => {console.error(`${err}`)})

    },    

    borrarProducto({commit}, payload) {
      axios
      .delete(
        `https://61b145c33c954f001722a877.mockapi.io/productos/${payload}`
      )
      .then((data) => {
        console.log("Borrar producto:", data.data.name);
        commit('BORRAR_PRODUCTO', data.data.id)

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

    },

    editarPedido(context, payload) {
      axios
        .put(
          `https://61b145c33c954f001722a877.mockapi.io/pedidos/${payload.id}`,
          payload

        )
        .then(() => {
          console.log('editaste el pedido, capo!')

        })
        .catch((err) => {console.error(`${err}`)})

    },      

    borrarPedido({commit}, payload) {
      axios
      .delete(
        `https://61b145c33c954f001722a877.mockapi.io/pedidos/${payload}`
      )
      .then((data) => {
        console.log("Borrar pedido:", data.data.id);
        commit('BORRAR_PEDIDO', data.data.id)
      })
      .catch((err) => {console.error(`${err}`)})
    },

  },
  modules: {
  }
})
