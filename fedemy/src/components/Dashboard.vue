<template>
  <div>
    <div>
      <b-button variant="link" @click="userLogged()">Cerra sesión</b-button>
    </div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-img thumbnail center fluid :src="require('../assets/users.png')" alt="users">1</b-img>
          <b-button pill size="lg">Usuarios</b-button>
        </b-col>
        <b-col>
          <b-img thumbnail center fluid :src="require('../assets/packages.png')" alt="packages">2</b-img>
          <b-button pill size="lg">Paquetes</b-button>
        </b-col>
        <b-col>
          <b-img thumbnail center fluid :src="require('../assets/orders.png')" alt="orders">3</b-img>
          <b-button pill size="lg">Ordenes</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'DashboardComponent',
  props: {},
  data: () => ({
    user: "",
    password: "",
    error: false
  }),
  methods: {
    userLogged() {
      this.$session.remove("token");
      this.$router.push("/");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-link {
  font-weight: 600;
  font-size: 25px;
}
</style>
