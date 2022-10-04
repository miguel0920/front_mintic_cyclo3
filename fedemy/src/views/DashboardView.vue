<template>
  <div class="about">
    <img alt="UTB logo" src="../assets/logo-misiontic.png"/>
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';

export default {
  name: 'DashboardView',
  components: {
    Dashboard
  }
}
</script>