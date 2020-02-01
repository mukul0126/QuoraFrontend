<template>
  <div class="header">
    <v-app id="userheader">
      <v-card color="grey lighten-4" flat tile>
        <v-toolbar dense>
          <v-btn icon @click="openProfile">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
          <v-toolbar-title class="title">QUORA</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              v-model="searchQuery"
              label="Solo"
              placeholder="Placeholder"
              solo
              class="search"
            ></v-text-field>
          </v-col>
          <v-btn @click="displaySearchResults()" class="search-btn">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <span />
          <AddUserQuestion></AddUserQuestion>

          <v-btn v-if="isLoggedIn" class="logout" @click="doLogout()">
            <b class="white">LogOut</b>
          </v-btn>
        </v-toolbar>
      </v-card>
    </v-app>
  </div>
</template>
<script>
import AddUserQuestion from "@/components/AddUserQuestion.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      searchText: "",
      searchQuery: ""
    };
  },
  components: {
    AddUserQuestion
  },
  methods: {
    async displaySearchResults() {
      let data = {
        searchTerm: this.searchQuery
      };
      window.console.log(this.searchQuery, "searchs");
      await this.$store.dispatch("getSearchUserResults", data);
      await this.$store.dispatch("getSearchOrganizationResults", data);
      await this.$store.dispatch("getSearchQuestionResults", data);
      this.$router.push("/searchresults");
    },
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
    doLogout: function() {
      window.console.log(localStorage.getItem("token"), "token");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      window.console.log(localStorage.getItem("token"), "token");

      let dataa = {
        targetId: "",
        action: "logout",
        appId: "quora",
        userId: localStorage.getItem("userId"),
        targetEntity: "",
        tag: ""
      };
      this.$store.dispatch("logout", dataa).then(() => {
        this.$router.push("/login");
      });
    },
    openProfile() {
      // let userId= localStorage.getItem("userId")
      // let currPrivateFlag=false;
      // this.$router.push("/profile/" + userId + "/" + currPrivateFlag);
      this.$router.push("/myprofile");
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
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
  margin-left: -60px;
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