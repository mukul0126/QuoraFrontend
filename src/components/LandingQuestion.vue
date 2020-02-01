<template>
  <div id="item-cards" class="flex">
    <div class="repeat" v-for="(item,index) in question.data" :key="index">
      <div class="click-question">
        <h4>QUESTION</h4>
        <h5>{{item.questionBody}}</h5>
        <v-btn class="view-button" @click="viewQuestion(item.questionId)">View</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "landingquestion",
  methods: {
    viewQuestion(questionId) {
      this.$router.push("/viewquestion/" + questionId);
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