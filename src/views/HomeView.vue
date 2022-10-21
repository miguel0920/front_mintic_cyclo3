<template>
  <div class="home">
    <img alt="UTB logo" src="../assets/logo-misiontic.png">
    <Login msg="Bienvenido al portal Envio Fedemy"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'HomeView',
  components: {
    Login
  }
}
</script>
