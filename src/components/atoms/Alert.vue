<template>

  <v-alert
    dismissible
    :type = type
    :color = color
    :value = value
  >
    <p
      class="alertmsg"
      v-if="alerta === 'carrito'"
    >
      Agregaste <span class="bold">{{ texto }}</span> al carrito.
    </p>
  </v-alert>

</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'Alert',
  props: {

  },

  data: () => ({

  }),

  methods: {

  },

  computed: {
    ...mapState({
        type: state => state.alert.type,
        color: state => state.alert.color,
        value: state => state.alert.visible,
        alerta: state => state.alert.alerta,
        texto: state => state.alert.texto
    })
  },

};
</script>


<style lang="scss" scoped>
  .alertmsg {
    margin: 0;

    .bold {
      font-weight: 600;
    }
  }
</style>
