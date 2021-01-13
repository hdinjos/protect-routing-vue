<template>
  <v-container>
    <h4>Silahkan Login dulu</h4>
    <v-text-field v-model="user.username" label="Username"></v-text-field>

    <v-text-field v-model="user.password" label="Password"></v-text-field>
    <v-btn @click="toAdmin" color="primary" class="mr-4"> Login </v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      user: {
        username: "",
        password: ""
      },
    };
  },
  methods: {
    toAdmin() {
      if (this.user.username === "admin" && this.user.password === "123") {
        localStorage.setItem('user', JSON.stringify(this.user));
        this.$store.commit('admin/setUser', this.user);
        alert("bisa login bosq");
        this.$router.push("/admin");
      } else {
        alert("username and password salah");
      }
    },
  },
};
</script>