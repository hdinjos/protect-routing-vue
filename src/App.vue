<template>
  <v-app>
    <v-app-bar v-if='!loginPage'
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

      <!-- <v-btn v-if='getuser'
        text
        @click="logout"
      >
        <span class="mr-2">Logout</span>
        
      </v-btn> -->

      <DialogOff v-if="getuser"/>
    </v-app-bar>

    <v-main>
      <router-view/>
      <!-- <HelloWorld/> -->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import DialogOff from "./components/DialogOff";

export default {
  name: 'App',
  computed: {
    getuser(){
      return this.$store.state.admin.user;
    },
    loginPage(){
      return this.$route.name === 'Login'
    }
  },
  components: {
    // HelloWorld,
    DialogOff
  },
  methods: {
    
  },
  data: () => ({
    //
  }),
    created(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.$store.commit('admin/setUser', user);
  }
};
</script>
