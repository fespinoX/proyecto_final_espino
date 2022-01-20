<template>

  <v-alert
    dismissible
    color = color
    value = value
  >
  {{ mensaje }}
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
        color: state => state.alert.color,
        value: state => state.alert.value,
        mensaje: state => state.alert.mensaje
    })
  },

};
</script>
