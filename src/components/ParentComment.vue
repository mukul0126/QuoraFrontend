<template>
  <div class="comment">
      <!-- v-for="(com,index) in getCommentsAnswer.commentList " :key="index" -->
    <v-card class="mx-auto" max-width="644" >
      <v-card-text>
        <!-- Parent COmment -->
        {{body.commentBody}}
        <!-- {{body.commentBody}} -->
        <v-text-field style="width:40%" v-model="message" placeholder="add comments"></v-text-field>

         <v-card-actions>
           <v-btn text small style="float:right" @click="giveComment()">Add</v-btn>
        <v-btn text small style="float:right" @click="viewMore()">View More</v-btn>
      </v-card-actions>
       
        <div v-if="status">
          <div class="childComment" v-for="(com,index) in getNestedComment.commentList" :key="index">
            <Comment :body="com"></Comment>
          </div>
        </div>
      </v-card-text>
     
    </v-card>
  </div>
</template>
<script>
import Comment from "@/components/Comment.vue";
import { mapGetters } from "vuex";
export default {
  name: "comment",
  props: ["body"],
  computed: {
    ...mapGetters(["getNestedComment"]),
      ...mapGetters(["getCommentsAnswer"])
  },
  data() {
    return {
      message:'',
      status:false
    };
  },
  components: {
        Comment
  },

  methods: {
    giveComment() {
      let data = {
        commentBody: this.message,
        parentId: this.body.commentId,
        answerId: this.body.answerId,
        UserId: localStorage.getItem("userId"),
        userName: localStorage.getItem("userName")
      };
      this.$store.dispatch("AddComment", data);
    },
    viewMore() {
        this.status=true
      this.$store.dispatch("viewMoreComments", this.body.commentId);
    }
  }
};
</script>
<style scoped>
</style>