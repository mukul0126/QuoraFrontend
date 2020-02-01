
<template>
  <div class="navigation">
    <!-- <nav id="nav"> -->
    <ul class="navnew">
      <li>
        <!-- <router-link :to="'/merchant/'+ merchant_id +'/myproducts'"> -->
        <router-link to="/moderator/approveuser">
          <b class="black">ApproveUser</b>
          </router-link>
        <!-- </router-link> -->
      </li>
      <div class="divider" />
      <li>
        <router-link to="/moderator/approvequestion">
          <b class="black">ApproveQuestion</b>
        </router-link>
      </li>
      <div class="divider" />
      <li>
        <router-link to="/moderator/approveanswer">
          <b class="black">ApproveAnswer</b>
        </router-link>
      </li>
      <div class="divider" />
      <li>
<<<<<<< HEAD
        <button class="logout">
          <b class="black">LogOut</b>
        </button>
=======

        <v-btn v-if="isLoggedIn" class="logout" @click="doLogout()"> 
          <b class="white">LogOut</b>
        </v-btn>
>>>>>>> bhumi
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
}
.navigation {
  background-color: lightgreen;
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
  border-bottom: 1px solid lightgrey;
  margin-bottom: 24px;
  flex-flow: row wrap;
  background-color: #4CAF50;
  justify-content: space-evenly;
}
.logout {
  background-color:#4CAF50;
}
</style>