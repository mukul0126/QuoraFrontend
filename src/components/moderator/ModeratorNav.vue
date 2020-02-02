
<template>
  <div class="navigation">
    <!-- <nav id="nav"> -->
    <ul class="navnew">
      <li>
        <!-- <router-link :to="'/merchant/'+ merchant_id +'/myproducts'"> -->
        <router-link to="/moderator/approveuser">
          <b class="black">Approve User</b>
          </router-link>
        <!-- </router-link> -->
      </li>
      <div class="divider" />
      <li>
        <router-link to="/moderator/approvequestion">
          <b class="black">Approve Question</b>
        </router-link>
      </li>
      <div class="divider" />
      <li>
        <router-link to="/moderator/approveanswer">
          <b class="black">Approve Answer</b>
        </router-link>
      </li>
      <div class="divider" />
      <li>
       <template v-if="isLoggedIn" >
        <v-btn class="logout" color="#b74545" @click="doLogout()"> 
          <b class="black">Log Out</b>
        </v-btn>
       </template>
      </li>
    </ul>
    <!-- </nav> -->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
    };
  },
  computed: {
     ...mapGetters(['isLoggedIn']),
   
  },
  methods: {
    doLogout: function() {
      window.console.log(localStorage.getItem("token"), "token");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      window.console.log(localStorage.getItem("token"), "token");
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
    
  }
};
</script>
<style scoped>
.black {
  color:black;
  font-family: monospace;
}
.navigation {
  background-color: #b74545;
  border: 1px solid black;
  height: 50px;
  /* background-image: url("https://i.pinimg.com/originals/ce/2f/9a/ce2f9a109599a284b214db7984194409.jpg"); */
}
.divider {
  width: 5px;
  height: auto;
  display: inline-block;
}
.navnew {
  display: flex;
  list-style: none;
  padding: 15px 0;
  margin: 0;
  justify-content: center;
  background: #f5f8fa;
  margin-bottom: 24px;
  flex-flow: row wrap;
  background-color:#b74545;
  justify-content: space-evenly;
}
.logout {
  height: 23px;
  width: 85px;
  top: -8px;
}
a {
    text-decoration: none;
    }
</style>