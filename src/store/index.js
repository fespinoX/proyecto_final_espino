import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    productos: [],
    loadingProductos: true,
    pedidos: [],
    usuario: {
      user: false,
      admin: false
    },
    alert: {
      type: null,
      color: "",
      visible: false,
      alerta: "",
      texto: "",
    }
  },

  getters: {

    isLoggedIn: state => state.usuario.user,
    isAdmin: state => state.usuario.admin
    
  },

  mutations: {

    // Definir
    PRODUCTOS(state, payload) {
      state.productos = payload
    },
    PEDIDOS(state, payload) {
      state.pedidos = payload
    },
    USUARIO(state, usuario) {
      state.usuario = usuario
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
    EDITAR_PEDIDO(state, data) {
      let id = data.data.id
      let index = state.pedidos.findIndex(pedido => pedido.id == id)
      state.pedidos.splice(index, 1)
      state.pedidos.push(data.data)
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
    BORRAR_USUARIO(state) {
      state.usuario = {}
    },

    // Load
    LOADING_PRODUCTOS(state, payload) {
      state.loadingProductos = payload
    },

    // Alert
    NEW_ALERT(state, payload) {
      state.alert.type = payload.type;
      state.alert.color = payload.color;
      state.alert.visible = true;
      state.alert.alerta = payload.alerta;
      state.alert.texto = payload.texto;
    },
    CLOSE_ALERT(state) {
      state.alert.visible = false;
    }

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

    editarPedido({commit}, payload) {

      axios
      .put(
        `https://61b145c33c954f001722a877.mockapi.io/pedidos/${payload.id}`,
        payload

      )
      .then((data) => {
        commit('EDITAR_PEDIDO', data)
        console.log('editaste, capo!')

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

    // Usuario

    settearUsuario(context, usuario){
      localStorage.setItem('user', JSON.stringify(usuario))
      context.commit("USUARIO", usuario)
    },

    borrarUsuario(context) {
      context.commit("BORRAR_USUARIO")
    },

    checkUsuario(context) {
      let usuario = localStorage.getItem('user')
      if (usuario) {
        context.commit("USUARIO", JSON.parse(usuario))
      }
    },

    mostrarAlert({ commit }, payload) {
      commit("NEW_ALERT", payload);

      // scroll to top
      scroll(0,0)
      
      setTimeout(function() {
        commit("CLOSE_ALERT");
      }, 5000);
    }

  },
  modules: {
  }
})
