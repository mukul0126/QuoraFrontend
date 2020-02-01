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
                <v-list-item-title class="headline mb-1">Question</v-list-item-title>
                <v-list-item-subtitle>{{item.questionBody}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn text @click="acceptBestAnswer(item.questionId)">View</v-btn>
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
          this.$route.push("/userapproveanswer/" + questionId)
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
  border-bottom: 3px solid black;
}

#profilefeed {
  background-color: #eaeded;
}
</style>