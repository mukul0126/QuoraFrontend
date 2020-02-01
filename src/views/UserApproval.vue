<template>
<v-app>
<div class="approve-answer">
    <answerApproval :userQuestionDetails="getQuestionDetails"/>
</div>
</v-app>
</template>


<script>
import answerApproval from "@/components/Answerapproval.vue";
import { mapGetters } from 'vuex';

export default {
    components: {
        answerApproval
    },
    mounted() {
        this.$store.dispatch("getQuestionDetailsById",this.$route.params.questionIdToApprove);
    },
  computed: {
    ...mapGetters(["getQuestionDetails"])
  }
}
</script>