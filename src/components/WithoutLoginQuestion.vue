<template>
  <div id="item-cards" class="flex">
    <div class="repeat" v-for="(item,index) in question.questionList" :key="index">
      <div class="click-question">
        <h5 style="font-family: sans-serif;">QUESTION</h5><br>
        <h4>{{item.questionBody}}</h4>
        <v-btn class="ma-2" style="margin-left:80%" @click="viewQuestion(item.questionId)" outlined color="indigo">View</v-btn>
        <!-- <v-btn style="margin-left:80%" class="view-button" @click="viewQuestion(item.questionId)">View</v-btn> -->
        <!-- <div class="my-2">
              <v-btn small color="primary" @click="viewQuestion(item.questionId)" dark>View</v-btn>
            </div> -->
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
.flex {
  justify-content: center;
}
.click-question {
  /* justify-content: center; */
  border: 2px solid black;
  margin-left: 350px;
  margin-right: 350px;
  border-radius: 7px;
  padding: 15px;
  margin-top: 80px;
  box-shadow: 5px 5px 10px black;
  /* background-color: antiquewhite; */
}

.click-question:hover {
  box-shadow: 3px 4px 7px 5px black;
}

.abc {
  margin-left: 300px;
}

.view-button {
  background-color: red;
}

.v-btn:hover {
  color: #b74545;
}

.repeat{
    position: relative;
    top: 33px;
    left: -11%;
}
</style>