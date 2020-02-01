<template>
  <div class="header">
    <v-app id="userheader">
      <v-card color="grey lighten-4" flat tile>
        <v-toolbar dense>
          <v-btn icon @click="openProfile">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
          <v-toolbar-title class="title">
            <router-link class="landing-link" to="/landing">QUORA</router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Solo" placeholder="Search" solo class="search"></v-text-field>
          </v-col>
          <v-btn icon class="search-btn">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <AddUserQuestion></AddUserQuestion>
        </v-toolbar>
      </v-card>
    </v-app>
  </div>
</template>
<script>
import AddUserQuestion from "@/components/AddUserQuestion.vue";
// import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      searchText: ""
    };
  },
  components: {
    AddUserQuestion
  },
  methods: {
    search(e) {
      if (this.$route.path.match("searchresults")) {
        this.$store.dispatch("getResults", this.searchText);
        this.$router.push("/searchresults");
      } else {
        if (e.keyCode === 13) {
          this.$store.dispatch("getResults", this.searchText);
          this.$router.push("/searchresults");
        }
      }
    },
    openProfile() {
      // let userId= localStorage.getItem("userId")
      // let currPrivateFlag=false;
      // this.$router.push("/profile/" + userId + "/" + currPrivateFlag);
      this.$router.push("/myprofile");
    }
  },
  computed: {
    //     loggedIn() {
    //        let userLoggedIn = localStorage.getItem("user_access_token")
    //       return userLoggedIn;
    //     }
    //   }
  }
};
</script>
<style scoped>
.flex {
  display: flex;
}
#icons {
  width: 100px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
i {
  color: white;
}
#user {
  font-size: 25px;
}
#cart {
  font-size: 25px;
}
#logo {
  font-size: 28px;
  color: white;
  padding: 5px;
  font-weight: bold;
}
#logo a {
  color: white;
}
a:visited {
  color: white;
}
#search-bar {
  margin-top: 11px;
  margin-left: 32px;
  width: 25%;
}
#logo a {
  text-decoration: none;
}
.search {
  position: absolute;
  top: 0px;
  left: 35%;
}
.search-btn {
  position: absolute;
  left: 75%;
}
.header {
  height: 51px;
}
.landing-link {
  color: black;
}
.landing-link:visited {
  color: black;
}
</style>