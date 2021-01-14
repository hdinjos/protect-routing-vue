<template>
  <div>
  <h1>This Home Page Admin</h1>
  <h2>username: {{ $store.state.admin.user.username }}</h2>
  <h2>password(random enkripsi): {{ Math.floor(Math.random($store.state.admin.user.password) * 1000000) }}</h2>
  </div>
</template> 

<script>
export default {

};
</script>

<style>
</style>