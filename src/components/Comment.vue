<template>
  <div class="comment">
       <!-- v-for="(com,index) in getCommentsAnswer " :key="index" -->
    <v-card class="mx-auto" max-width="644">
      <v-card-text>
         
        {{body.commentBody}}
         <v-text-field style="width:40%" v-model="message" placeholder="add comments"></v-text-field>
        <!-- <textarea
          style="width:80%"
          v-model="message"
          placeholder="add comments"
        ></textarea> -->
         </v-card-text>
        <v-card-actions> 
        <v-btn text small style="float:right" @click="giveComment()">Add</v-btn>
        <v-btn text small style="float:right" @click="viewMore()">View More</v-btn>
        </v-card-actions>

        <div v-if="status"  style="">
          <div class="childComment" v-for="(com,index) in getNestedComment.commentList" :key="index">
            <Comment :body="com"></Comment>
          </div>
        </div>
        <!-- <div v-if="status">
        <Comment :body="getNestedComment"></Comment>
        </div> -->
     
    </v-card>
  </div>
</template>
<script>
import Comment from "@/components/Comment.vue";
import { mapGetters } from "vuex";
export default {
  name: "comment",
  props: ["body"],
  components:{
      Comment
  },
  data(){
      return {
            message:'',
            status:false
      }
  },
  computed: {
    ...mapGetters(["getNestedComment"]),
    ...mapGetters(["getCommentsAnswer"])
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
      alert('Comment Posted')
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