<template>
  <div class="usersearch" id="usersearch">
    <div v-for="(item,index) in user" :key="index">
      <v-card class="mx-auto" max-width="644" id="approval-card">
        <v-card-text>
          <div>
            <v-avatar color="indigo" size="36">
              <img v-bind:src="item.userImage" />
              <!-- <v-icon dark>mdi-account-circle</v-icon> -->
            </v-avatar>
          </div>
          <br />
          <span class="name">User Name: {{item.userName}}</span>
          <!-- <span class="score">Score: {{item.userScore}}</span>
        <p>E-mail: {{item.userEmail}} </p>
        <div class="text--primary">
          </div>-->
        </v-card-text>
        <v-btn class="view-button" @click="viewUser(item.userId,index)">View</v-btn>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "usersearch",
  props: ["user"],
  created() {
    let moderatorId = localStorage.getItem("moderatorId");
    this.$store.dispatch("approveUser", moderatorId);
  },
  computed: {
    ...mapGetters(["getApproveUserDetails"])
  },
  methods: {

      viewUser(Id,index) {
        this.$router.push("/profile/" + Id + "/" + this.user[index].privateFlag);
          // this.$router.push({name:'Profile',params:{userId:Id}})
      }
    // approveUser(userId) {
    //   let moderatorId = localStorage.getItem("moderatorId");
    //   this.$store.dispatch("approveUserId", { userId, moderatorId });
    // },
    // disapproveUser() {}
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