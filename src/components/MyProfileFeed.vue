<template>
  <div id="profile-feed">
    <div class="profile-feed-container">
      <v-app id="profilefeed">
        <v-card class="mx-auto" outlined id="feed-card">
          <div class="feed-card" v-for="(item,index) in userDetails.data.questionList" :key="index">
            <!-- <h1>Hello</h1>
            <v-btn text @click="acceptBestAnswer(item.questionId)">View</v-btn>-->
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4"></div>
                <v-list-item-title class="headline mb-6"><h6>Question</h6></v-list-item-title>
                <v-list-item-subtitle color="black"><h3>{{item.questionBody}}</h3></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <!-- <v-btn text @click="acceptBestAnswer(item.questionId)">View</v-btn> -->
              <v-btn class="ma-2"  @click="acceptBestAnswer(item.questionId)" outlined color="indigo">View</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-app>
    </div>
  </div>
</template>


<script>
export default {
  props: ["userDetails"],
  methods: {
      acceptBestAnswer(questionId) {
          this.$router.push("/userapproveanswer/" + questionId)
      }
  }
};
</script>




<style scoped>
#feed-card {
  width: 74%;
  height: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  place-content: stretch space-around; */
}

.feed-card {
  padding: 2rem;
  border-bottom: 3px solid #b74545;
}

#profilefeed {
  background-color: #eaeded;
}

</style>