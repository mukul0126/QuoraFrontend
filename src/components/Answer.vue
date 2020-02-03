<template>
  <div class="answer" id="answer" style="padding-top:5px;padding-bottom:5px">
    <div class="repeat" v-for="(item,index) in questionDetails" :key="index">
      <v-card class="mx-auto" max-width="640">
        <v-card-text>
          <p>{{item.answerBody}}</p>
          <div class="text--primary">
            like-> {{item.likeCount}}
            <button class="like" @click.once="likeAnswer(item.answerId,index)">
              <i class="fa fa-thumbs-o-up" aria-hidden="true">&#128077;</i>
            </button>
            dislike-> {{item.dislikeCount}}
            <button
              class="dislike"
              @click.once="dislikeAnswer(item.answerId, index)"
            >
              <i class="fa fa-thumbs-o-down" aria-hidden="true">&#128078;</i>
            </button>
            <div class="my-2">
              <textarea style="width:80%" v-model="message" placeholder="add comments"></textarea>
              <v-card-actions>
              <v-btn style="float:right" small color="primary" @click="submitComment(item.answerId)">Comment</v-btn>
              <v-btn small color="primary" @click="getMainComment(item.answerId)">View More</v-btn>
              </v-card-actions>
              <div class="comment" v-if="status">
                <div v-for="(com,index) in getCommentsAnswer.commentList" :key="index"> 
                  <ParentComment :body="com" />
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
        <!-- <v-card-actions>
        <v-btn text color="deep-purple accent-4">View More</v-btn>
        </v-card-actions>-->
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ParentComment from "@/components/ParentComment.vue";

export default {
  name: "answer",
  data() {
    return {
      answer_body: " ",
      message:"",
      status:false
    };
  },
  components: {
    ParentComment
  },
  props: ["questionDetails"],
  methods: {
    likeAnswer(answerId, index) {
      this.questionDetails[index].likeCount++;
      this.$store.dispatch("likeAnswer", answerId);
    },

    dislikeAnswer(answerId, index) {
      this.questionDetails[index].dislikeCount++;
      this.$store.dispatch("dislikeAnswer", answerId);
    },
    submitComment(answerId) {
      let data = {
        commentBody: this.message,
        parentId: null,
        answerId: answerId,
        UserId: localStorage.getItem("userId"),
        userName: localStorage.getItem("userName")
      };
      if(this.message.length>1)
      this.$store.dispatch("AddComment", data);
      else
      window.alert("Please enter a comment");
    },
    getMainComment(answerId) {
      this.status=true
      this.$store.dispatch("getComments", answerId);
    }
  },
  computed: {
    ...mapGetters(["getCommentsAnswer"])
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
</style>