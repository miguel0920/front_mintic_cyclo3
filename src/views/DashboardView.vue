<template>
  <div>
    <CustomNav />
    <img alt="UTB logo" src="../assets/logo-misiontic.png" />
    <div>
      <b-button variant="link" @click="userLogged()">Cerra sesión</b-button>
    </div>
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';
import CustomNav from '@/components/CustomNav.vue';

export default {
  name: 'DashboardView',
  components: {
    Dashboard,
    CustomNav
  },
  methods: {
    userLogged() {
      this.$session.remove("token");
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
.btn-link {
  font-weight: 600;
  font-size: 25px;
}
</style>