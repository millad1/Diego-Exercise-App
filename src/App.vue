<template>
  <div id="app" class="container">
    <div class="display-3">
      <img alt="Vue logo" src="./assets/logo.png" id="logo">
      DM-Exercise
    </div>
    <Nav />
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#logo { height: 50px;}
</style>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import myAccount from '@/views/myAccount.vue'
//import '@/services/facebook';
export default {
  name: 'home',
  components: {
    Nav
  },
  
        name: 'App',
        data() {
            return {
                authenticated: false,
                masterAccount: {
                    username: "DMasterAcc",
                    password: "12344321"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
//}
</script>