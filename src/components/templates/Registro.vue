<template>
  <div>
    <v-text-field
      label="Nombre"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      label="Normal with hint text"
      hint="At least 8 characters"
      counter
      @click:append="show1 = !show1"
    ></v-text-field>
  </div>
</template>

<script>
  export default {
    name: 'Registro',

    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      show1: false,
    }),
  }
</script>
