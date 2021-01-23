<template>
  <v-container>
    <h1>this concept how to working with observable in vuejs</h1>
    <h2>Observable can change the state like vuex, but is simple</h2>
    <h2>You can use observable change vuex, when your state is little</h2>
    <p>{{ name }} and {{ address }}</p>
  </v-container>
</template>

<script>
import obj from "../observable";
export default {
  computed: {
    name() {
      return obj.name;
    },
    address() {
      return obj.address;
    },
  },
};
</script>

<style></style>
