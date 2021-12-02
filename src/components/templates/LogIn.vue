<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2>Login</h2>
      </v-col>
      <form action=""></form>
      <v-col cols="12">
        <label for="">Nombre:</label>
        <input type="text" value="nombre" v-model="nombre">
        <p>{{nombre}}</p>
      </v-col>
      <v-col cols="12">
        <label for="">Apellido:</label>
        <input type="text" value="apellido" v-model="apellido">
        <p>{{apellido}}</p>
      </v-col>
      <v-col cols="12">
        <label for="">Edad:</label>
        <select name="edad" id="edad" v-model="rangoedad">
          <option value="<18">Menor de 18</option>
          <option value="18-24">18 a 24</option>
          <option value="24 - 30">24 a 30</option>
          <option value="31 - 45">31 a 45</option>
          <option value="46 - 60">46 a 60</option>
          <option value=">60">Mayor de 60</option>
        </select>
        <p>{{rangoedad}}</p>
      </v-col>
      <v-col cols="12">
        <div>
          <input type="checkbox" v-model="lenguaje" value="js" id="checkJS">
          <label for="checkJS">
            JavaScript
          </label>
        </div>
        <div>
          <input type="checkbox" v-model="lenguaje" value="react" id="checkReact">
          <label for="checkReact">
            React
          </label>
        </div>
        <div>
          <input type="checkbox" v-model="lenguaje" value="angular" id="checkNg">
          <label class="form-check-label text-start" for="checkNg">
            Angular
          </label>
        </div>
        <div>
          <input type="checkbox" v-model="lenguaje" value="vue" id="checkVue">
          <label for="checkVue">
            Vue
          </label>
        </div>

        {{lenguaje}}
      </v-col>

      <v-col cols="12">
        <button @click="enviarForm">Mandar</button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',

    data: () => ({
      nombre: "",
      apellido: "",
      rangoedad: "",
      lenguaje: []
    }),

    methods: {
      enviarForm() {
        console.log("bienvenido " + this.nombre)
      }
    }
  }

  // hacer un console log q consolee el objeto con los datos de los fields
</script>


<style scoped>
  input,
  select {
    border: 1px solid blue;
  }
</style>
