<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="white"
          dark
          v-bind="attrs"
          v-on="on"
          style="color: #FF5252"
        >
          Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item link to="/location">
          <v-list-item-title>Location</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
