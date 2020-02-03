<template>
  <div class="questionapproval">
    <div v-for="(item,index) in getApproveQuestionDetails.data.questionList" :key="index">
      <v-card class="mx-auto" max-width="644" id="question-approval">
        <v-card-text>
          <p>{{item.questionBody}}</p>
          <div class="text--primary">
            <button class="like" @click="approveQuestionById(item.questionId)">
              <i class="approve" aria-hidden="true">&#10004;</i>
            </button>
            <button class="dislike" @click="disapproveQuestionById(item.questionId)">
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
  name: "questionapproval",
  created() {
    let moderatorId = localStorage.getItem("moderatorId");
    this.$store.dispatch("approveQuestion", moderatorId);
  },
  methods: {
    approveQuestionById(questionId) {
      // let moderatorId=localStorage.getItem("moderatorId")
      this.$store.dispatch("approveQuestionId", questionId);
      window.alert("Question Approved")
    },
    disapproveQuestionById(questionId) {
      // let moderatorId=localStorage.getItem("moderatorId")
      this.$store.dispatch("disapproveQuestionId", questionId);
      window.alert("Question disapproved")
    }
  },
  computed: {
    ...mapGetters(["getApproveQuestionDetails"])
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

#question-approval {
  margin: 10px;
}
</style>