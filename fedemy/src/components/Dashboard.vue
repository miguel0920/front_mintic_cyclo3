<template>
  <div>
    <!-- <CustomSpinner :active="loaderActive" message="Por favor espere unos segundos." /> -->
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-img thumbnail center fluid :src="require('../assets/users.png')" alt="users">1</b-img>
          <b-button pill size="lg" @click="users()">Usuarios</b-button>
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
// import CustomSpinner from '@/components/CustomSpinner.vue';
import loaderMixin from '@/mixins/loading';

export default {
  name: 'DashboardComponent',
  components: {
    // CustomSpinner
  },
  mixins: [loaderMixin],
  methods: {
    userLogged() {
      this.$session.remove("token");
      this.$router.push("/");
    },
    users() {
      this.showLoader();
      setTimeout(() => {
        this.$router.push("/users");
        this.hideLoader();
      }, 1000);

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
