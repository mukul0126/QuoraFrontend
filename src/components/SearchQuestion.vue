<template>
  <div id="item-cards" class="flex">
    <div class="repeat" v-for="(item,index) in question" :key="index">
      <div class="click-question">
        <h6>QUESTION</h6>
        <h5>{{item.questionBody}}</h5>
        <v-btn class="view-button" @click="viewQuestion(item.questionId)">View</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchquestion",
  methods: {
    viewQuestion(questionId) {
      window.console.log('ques id',questionId)
      this.$router.push("/viewquestion/"+questionId)
      // this.$router.push("/viewquestion/" + questionId);
    }
  },
  props: ["question"]
};
</script>

<style>
.click-question {
  border: 3px solid black;
  margin-left: 350px;
  margin-right: 350px;
  border-radius: 7px;
  padding: 15px;
  margin-top: 80px;
}

.abc {
  margin-left: 300px;
}

.view-button {
  background-color: red;
}
</style>