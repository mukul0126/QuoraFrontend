<template>
  <v-app>
    <div class="viewquestion" id="viewquestion">
      <br />
      <br />
      <Question />
        <Enterans/>
      <div class="answer-section" style="padding-top:10px">
        <Answer />
        <Answer />
      </div>
    </div>
  </v-app>
</template>
<script>
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Enterans from "@/components/Enterans";


export default {
  name: "viewquestion",

  components: {
    Question,
    Answer,
    Enterans
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