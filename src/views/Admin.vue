<template>
  <h1>This Home Page {{ $store.state.admin.user }}</h1>
</template>

<script>
export default {
  created() {
    const user = localStorage.getItem("user");
    this.$store.commit("admin/setUser", user);
    console.log(this.$store.state.user);
  },
};
</script>

<style>
</style>