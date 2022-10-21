<template>
    <div>
        <CustomNav />
        <img alt="UTB logo" src="../assets/logo-misiontic.png" />
        <div>
            <b-button variant="link" @click="userLogged()">Cerra sesión</b-button>
        </div>
        <CreateUser />
    </div>
</template>
  
<script>
// @ is an alias to /src
import CreateUser from '@/components/CreateUser.vue'
import CustomNav from '@/components/CustomNav.vue';

export default {
    name: 'UsersView',
    components: {
        CreateUser,
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