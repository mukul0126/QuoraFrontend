<template>
  <v-app>
    <div class="viewquestion" id="viewquestion">
      <br />
      <br />
      <Question :questionDetails="getQuestionDetails.question" />
      <Enterans />
      <div class="answer-section" style="padding-top:10px">
        <Answer :questionDetails="getQuestionDetails.answerList" />
      </div>
    </div>
  </v-app>
</template>
<script>
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Enterans from "@/components/Enterans";
import { mapGetters } from "vuex";

export default {
  name: "viewquestion",
  components: {
    Question,
    Answer,
    Enterans
  },
  mounted() {
    window.console.log("inside mounted", this.$route.params.questionId);
    this.$store.dispatch(
      "getQuestionDetailsById",
      this.$route.params.questionId
    );
  },
  computed: {
    ...mapGetters(["getQuestionDetails"])
  }
};
</script>
<style scoped>
/* // .text {
//     text-align: center
// }
// .centered-input >>> input {
//       text-align: center
//     } */
</style>