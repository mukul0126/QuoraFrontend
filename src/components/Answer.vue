<template>
  <div class="answer" id="answer" style="padding-top:5px;padding-bottom:5px">
    <v-card class="mx-auto" max-width="640">
      <v-card-text>
        
        <!-- <p class="display-1" style="">What should every foreigner know about your country in terms of food, tourist destinations, demography, best time to visit, and USP of your country?</p> -->
        <p>What should every foreigner know about your country in terms of food, tourist destinations, demography, best time to visit, and USP of your country?</p>
        <div class="text--primary">
          <button class="like">
            <i class="fa fa-thumbs-o-up" aria-hidden="true">&#128077;</i>
          </button>
          <button class="dislike">
            <i class="fa fa-thumbs-o-down" aria-hidden="true">&#128078;</i>
          </button>

          <div class="my-2" style="float:right">
        <v-btn small color="primary">Comment</v-btn>
      </div>
        </div>
      </v-card-text>
      <!-- <v-card-actions>
        <v-btn text color="deep-purple accent-4">View More</v-btn>
      </v-card-actions> -->
    </v-card>
  </div>
</template>
<script>
export default {
  name: "answer",
  props: ["questionDetails"]
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
</style>