<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <router-link to="/">
      <h1 class="white--text">Login bosq</h1>
    </router-link>

      <v-spacer></v-spacer>

      <v-btn v-if='!getuser'
        text
        link to="/login"
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn v-if='getuser'
        text
        @click="logout"
      >
        <span class="mr-2">Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
      <!-- <HelloWorld/> -->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  computed: {
    getuser(){
      return this.$store.state.admin.user;
    }
  },
  components: {
    // HelloWorld,
  },
  methods: {
    logout(){
      if (this.$route.name !== 'Home') {
        localStorage.removeItem('user');
        this.$store.commit('admin/setUser', '');
        this.$router.push('/');
      } else {
        localStorage.removeItem('user');
        this.$store.commit('admin/setUser', '');
      }
      console.log(this.$store.state.admin.user);
      console.log(this.$route.name);
    }
  },
  data: () => ({
    //
  }),
};
</script>
