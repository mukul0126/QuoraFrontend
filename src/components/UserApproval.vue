<template>
  <div class="userapproval" id="userapproval">
    <div v-for="(item,index) in getApproveUserDetails.data" :key="index">
      <v-card class="mx-auto" max-width="644" id="approval-card">
        <v-card-text>
          <div>
            <v-avatar color="indigo" size="36">
              <v-icon dark>mdi-account-circle</v-icon>
            </v-avatar>
          </div>
          <br />
          <span class="name">Name: {{item.userName}}</span>
          <span class="score">Score: {{item.userScore}}</span>
          <p>E-mail: {{item.userEmail}}</p>
          <div class="text--primary">
            <button class="like" @click="approveUser(item.userId)">
              <i class="approve" aria-hidden="true">&#10004;</i>
            </button>
            <button class="dislike" @click="disapproveUser(item.userId)">
              <i class="reject" aria-hidden="true">&#10008;</i>
            </button>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "userapproval",
  created() {
    let moderatorId = localStorage.getItem("moderatorId");
    this.$store.dispatch("approveUser", moderatorId);
  },
  computed: {
    ...mapGetters(["getApproveUserDetails"])
  },
  methods: {
    approveUser(userId) {
      let moderatorId = localStorage.getItem("moderatorId");
      this.$store.dispatch("approveUserId", { userId, moderatorId });
      window.alert("User Approved")
    },
    disapproveUser(userId) {
      let moderatorId = localStorage.getItem("moderatorId");
      this.$store.dispatch("disapproveUserId", {userId, moderatorId});
      window.alert("User disApproved")
    }
  }
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

#approval-card {
  margin: 10px;
}

.score {
  margin-left: 30px;
}
</style>