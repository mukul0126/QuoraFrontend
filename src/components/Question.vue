<template>
  <div class="question" id="question">
    <v-card class="mx-auto" max-width="644">
      <v-card-text v-if="questionDetails">
        <div>
          <v-avatar color="indigo" size="36">
            <v-icon
              dark
              @click="openProfile(questionDetails.userId,questionDetails.approvalFlag)"
            >mdi-account-circle</v-icon>
          </v-avatar>
          {{questionDetails.userName}}
          <v-avatar color="indigo" size="36" style="float:right">
            <v-icon dark @click="openOrganizationProfile(questionDetails.orgId)">mdi-account-circle</v-icon>
          </v-avatar>
        </div>
        <br>
        <p style="color:black">{{questionDetails.questionBody}}</p>
        <div class="text--primary">
          like-> {{questionDetails.likeCount}}
          <button
            class="like"
            @click.once="likeQuestion(questionDetails.questionId,questionDetails.userId,questionDetails.categoryId)"
          >
            <i class="fa fa-thumbs-o-up" aria-hidden="true">&#128077;</i>
          </button>
          dislike-> {{questionDetails.dislikeCount}}
          <button
            class="dislike"
            @click.once="dislikeQuestion(questionDetails.questionId,questionDetails.userId,questionDetails.categoryId)"
          >
            <i class="fa fa-thumbs-o-down" aria-hidden="true">&#128078;</i>
          </button>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "question",
  data() {
    return {
      // myProfile:false;
    };
  },
  methods: {
    openProfile(userId, currPrivateFlag) {
      // this.$router.push({path: "profile",  params: {profileDetails: profileDetails}});
      this.$router.push("/profile/" + userId + "/" + currPrivateFlag);
    },
    openOrganizationProfile(organizationId) {
      if(organizationId!=null)
      this.$router.push("/organizationProfile/" + organizationId);
    },

    likeQuestion(questionId, userid, catId) {
      window.console.log(catId)
      this.$store.dispatch("likeQuestion", questionId);
      let analytic = {
        targetId: userid,
        action: "like",
        appId: "quora",
        userId: localStorage.getItem("userId"),
        targetEntity: "post",
        tag: catId
      };
      this.$store.dispatch("sentToAnalytics", analytic);
    },

    dislikeQuestion(questionId, userid, catId) {
      this.$store.dispatch("dislikeQuestion", questionId);
      let analytic = {
        targetId: userid,
        action: "dislike",
        appId: "quora",
        userId: localStorage.getItem("userId"),
        targetEntity: "post",
        tag: catId
      };
      this.$store.dispatch("sentToAnalytics", analytic);
    }
  },
  props: ["questionDetails"]
};
</script>
<style scoped>
button.like {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  /* line-heigth: 50px; */
  border-radius: 50%;
  color: rgba(0, 150, 136, 1);
  background-color: rgba(38, 166, 154, 0.3);
  border-color: rgba(0, 150, 136, 1);
  border-width: 1px;
  font-size: 15px;
}

button.dislike {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  /* line-heigth: 50px; */
  border-radius: 50%;
  color: rgba(255, 82, 82, 1);
  background-color: rgba(255, 138, 128, 0.3);
  border-color: rgba(255, 82, 82, 1);
  border-width: 1px;
  font-size: 15px;
}

button.learnmore {
  width: 100%;
  padding: 10px;
  border: none;
  background: rgba(0, 151, 167, 1);
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
}
.question {
  box-shadow: 6px -6px 16px 0px black;
}
</style>