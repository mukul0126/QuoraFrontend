<template>
  <div id="profile-feed">
    <v-app id="profilefeed">
      <v-card class="mx-auto" outlined id="feed-card">
        <v-list-item three-line>
          <div id="app" v-for="(item,index) in userDetails.data.questionList" :key="index">
            <v-app id="inspire">
              <v-card class="mx-auto" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4"></div>
                    <!-- <v-list-item-title class="headline mb-1">Question</v-list-item-title> -->
                    <v-list-item-subtitle>No content to show!!</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                  <v-btn text>Button</v-btn>
                </v-card-actions>
              </v-card>No content to show!!
            </v-app>
          </div>
        </v-list-item>

        <v-card-actions></v-card-actions>
      </v-card>
    </v-app>
  </div>
</template>


<script>
export default {
  props: ["userDetails"]
};
</script>




<style scoped>
#feed-card {
  width: 74%;
  height: 100%;
}

#profilefeed {
  background-color: #eaeded;
}
</style>