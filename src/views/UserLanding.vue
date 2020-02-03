<template>
  <div class="landing">
    <UserHeader />
    <div
      class="questions"
      v-if="getLandingQuestion &&  getLandingQuestion.data &&  getLandingQuestion.data.length">
      <LandingQuestion :question="getLandingQuestion" />
    </div>
    <div class="sidenav">
      <div class="ads" v-for="(item,index) in getAds.slice(0,4)" :key="index">
        <a :href="item.targetUrl">
          <img
            v-bind:src="item.imageUrl"
            style="height:100px;width:100px"
            @click="redirectAd(index)"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import LandingQuestion from "@/components/LandingQuestion.vue";
import UserHeader from "@/components/UserHeader.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    LandingQuestion,
    UserHeader
  },
  data() {
    return {
      dialog: false
    };
  },
  created() {
    localStorage.setItem("organizationId", "5e3149d91edbf851280ccf51");
    localStorage.setItem("moderatorId", "5e314e2583f84b7add06ec3e");

    this.$store.dispatch("viewLandingQuestion");
    this.$store.dispatch("showAds");
  },
  methods: {
    dialogValue() {
      this.dialog = true;
    },
    openProfile() {
      this.$router.push("/profile");
    },
    redirectAd(index) {
      let data = {
        adId: this.getAds[index].adId,
        tag: this.getAds[index].tag,
        advertiserId: this.getAds[index].advertiserId,
        categoryId: "1",
        userId: localStorage.getItem("userId"),
        description: this.getAds[index].description,
        targetUrl: this.getAds[index].targetUrl,
        source: "quora"
      };
      this.$store.dispatch("redirectAds", data);
    }
  },
  computed: {
    ...mapGetters(["getLandingQuestion"]),
    ...mapGetters(["getAds"])
  }
};
</script>

<style>
.container-fluid {
  background-color: white;
}
.button1 {
  margin-left: 700px;
}
.navbar-form navbar-left {
  margin-left: 300px;
}
.sidenav {
  height: 100%;
  width: 160px;
  margin-top: 70px;
  z-index: 1;
  top: -21px;
  left: 0;
  position: absolute;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: gray;
  color: white;
  text-align: center;
  height: 42px;
}
.table {
  border: 2px solid black;
  width: 400px;
  position: absolute;
  margin-left: 550px;
  border-radius: 10px;
  align-content: center;
}

.table2 {
  margin-left: 150px;
}

input {
  margin-left: 200px;
}

.btn btn-default {
  margin-right: 200px;
}

.search {
  padding: 10px;
  margin: 10px;
  width: 500px;
  border-radius: 3px solid white;
  background: white;
  color: orange;
}

.left {
  margin-left: 450px;
}

.profile-button {
  margin-left: 10px;
}

.questions {
  position: relative;
  top: -83px;
  margin-top: 65px;
}
</style>