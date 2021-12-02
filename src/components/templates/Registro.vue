<template>
  <div>
    <h1>Registro</h1>    
    



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
