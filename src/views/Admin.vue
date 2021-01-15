<template>
  <div>
    <h1>This Home Page Admin</h1>
    <h2>username: {{ $store.state.admin.user.username }}</h2>
    <h2>
      password(random enkripsi):
      {{ Math.floor(Math.random($store.state.admin.user.password) * 1000000) }}
    </h2>
    <v-container>
        <v-badge content="5" value="5" color="green" overlap>
          <v-icon large> mdi-vuetify </v-icon>
        </v-badge>
    </v-container>
  </div>
</template> 

<script>
export default {
  data: () => {
    return {
      messages: 0,
    };
  },
};
</script>

<style>
</style>