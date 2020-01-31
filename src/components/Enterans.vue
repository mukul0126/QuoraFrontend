<template>
  <div>
    <v-card class="mx-auto" max-width="640">
       <v-textarea
          name="input-7-1"
          label="write your answer"
          v-model="answer_body"
        ></v-textarea>
        <v-card-actions>
        <v-btn small text color="primary" @click="submitAnswer">Post your answer</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "enterans",
  data() {
    return {
      answer_body: ""
    }
  },
  methods: {
      submitAnswer() {
      let userid=localStorage.getItem("userId")
      this.$store.dispatch("submitAnswer",{
        questionId: this.$route.params.questionId,
        userId: userid,
        answerBody: this.answer_body,
        orgId : null
      })
    }
  }
};
</script>
<style scoped>
</style>