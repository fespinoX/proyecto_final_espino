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
    },
    carrito: [],
    totalCarrito: 0,
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
    CARRITO(state, carrito) {
      state.carrito = carrito
    },
    TOTALCARRITO(state, totalCarrito) {
      state.totalCarrito = totalCarrito
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

    // User


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

    // Carrito

    levantarCarrito(context) {
      JSON.parse(localStorage.getItem('carrito'))
      let carritoLocal = JSON.parse(localStorage.getItem('carrito'))
      context.commit("CARRITO", carritoLocal)
    },

    agregarAlCarrito(context, payload) {
      let carrito = []
      if(!localStorage.getItem('carrito')) {
        // si no habia carrito, lo crea
        carrito.push(payload);
        localStorage.setItem('carrito', JSON.stringify(carrito))
      } else {
        // si ya exist??a el carrito , lo levanta
        carrito = JSON.parse(localStorage.getItem('carrito'))
        
        //checkeo si el id ya esta en el carrito
        let itemInCarrito = carrito.find(x => x.id === payload.id)
        if (itemInCarrito) {
          let producto = payload
          let qtyAnterior = itemInCarrito.qty

          let carritoFiltrado = carrito.filter(item => item.id !== producto.id)
          carrito = carritoFiltrado
          
          // cambio la cantidad
          producto.qty = (producto.qty + qtyAnterior)

          // vuelvo a agregarlo al carrito
          carrito.push(producto);

        } else {
          carrito.push(payload);
        }
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
      }
      context.commit("CARRITO", carrito)

    },

    editarItemCarrito(context, payload) {

      let nuevoCarrito = JSON.parse(localStorage.getItem('carrito'))
      nuevoCarrito.push(payload);
      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
      context.commit("CARRITO", nuevoCarrito)
    },    

    borrarItemCarrito(context, payload) {

      let carrito = JSON.parse(localStorage.getItem('carrito'));
      const filtered = carrito.filter(item => item.id !== payload);
      localStorage.setItem('carrito', JSON.stringify(filtered));

      context.commit("CARRITO", filtered)

    },

    vaciarCarrito(context) {
      localStorage.removeItem('carrito');
      context.commit("CARRITO", [])
    },

    calcularTotalCarrito(context) {
      let carrito = JSON.parse(localStorage.getItem('carrito'));

      if (carrito) {
        let totalCarrito = carrito.reduce(function(sum, current) {
          sum + (current.price * current.qty)
          return sum + (current.price * current.qty);
        }, 0);
  
        context.commit("TOTALCARRITO", totalCarrito)
      }
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

      })
      .catch((err) => {console.error(`${err}`)})

    },      

    borrarPedido({commit}, payload) {
      axios
      .delete(
        `https://61b145c33c954f001722a877.mockapi.io/pedidos/${payload}`
      )
      .then((data) => {
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
