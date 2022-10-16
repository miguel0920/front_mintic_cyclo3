<template>
    <div>
        <CustomNav />
        <img alt="UTB logo" src="../assets/logo-misiontic.png" />
        <div>
            <b-button variant="link" @click="userLogged()">Cerra sesión</b-button>
        </div>
        <Users />
    </div>
</template>
  
<script>
// @ is an alias to /src
import Users from '@/components/Users.vue';
import CustomNav from '@/components/CustomNav.vue';

export default {
    name: 'UsersView',
    components: {
        Users,
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