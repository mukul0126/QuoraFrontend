<template>
  <v-app>
    <UserHeader/>
    <div class="approve-answer">
      <answerApproval :userQuestionDetails="getQuestionDetails" />
    </div>
  </v-app>
</template>


<script>
import answerApproval from "@/components/Answerapproval.vue";
import UserHeader from "@/components/UserHeader.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    answerApproval,
    UserHeader
  },
  mounted() {
    this.$store.dispatch(
      "getQuestionDetailsById",
      this.$route.params.questionIdToApprove
    );
  },
  computed: {
    ...mapGetters(["getQuestionDetails"])
  }
};
</script>


<style scoped>
.approve-answer{
  background-color:#282828;
}
</style>