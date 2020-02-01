<template>
  <div class="questionapproval">
    <div v-for="(item,index) in getApproveAnswerDetails.data.listOfAnswerIds" :key="index">
    <v-card class="mx-auto" max-width="644" id="question-approval">
      <v-card-text>
        <p>{{item.answerBody}}</p>
        <div class="text--primary">
          <button class="like" @click="approveAnswerById(item.answerId)">
            <i class="approve" aria-hidden="true">&#10004;</i>
          </button>
          <button class="dislike" @click="disapproveAnswerById(item.answerId)">
            <i class="reject" aria-hidden="true">&#10008;</i>
          </button>
        </div>
      </v-card-text>
    </v-card>
  </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "moderatoranswerapproval",
  created() {
    let moderatorId=localStorage.getItem("moderatorId")
    this.$store.dispatch("approveAnswer",moderatorId)
  },
  methods: {
    approveAnswerById(answerId) {
      // let moderatorId=localStorage.getItem("moderatorId")
      this.$store.dispatch("approveAnswerId",answerId)
    },
    disapproveAnswerById(questionId){
      // let moderatorId=localStorage.getItem("moderatorId")
      this.$store.dispatch("disapproveAnswerId",questionId)
    }
  },
  computed: {
    ...mapGetters(['getApproveAnswerDetails'])
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

#question-approval{
  margin: 10px;
}
</style>