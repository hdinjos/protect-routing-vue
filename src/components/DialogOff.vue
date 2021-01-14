<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on">
        Logout
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline primary lighten-2">
        Perhatian!
      </v-card-title>
    <div>
      <v-card-text>
        <h3>Apakah anda ingi keluar?</h3>
      </v-card-text>
    </div>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" outlined @click="dialog = false"> Kembali</v-btn>
        <v-btn color="primary" @click="logout"> Ya</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => {
      return {
        dialog: false
      }
  },
  methods: {
    logout() {
      if (this.$route.name !== "Home") {
        localStorage.removeItem("user");
        this.$store.commit("admin/setUser", "");
        this.$router.push("/");
      } else {
        localStorage.removeItem("user");
        this.$store.commit("admin/setUser", "");
      }
    },
  },
};
</script>

<style>
</style>