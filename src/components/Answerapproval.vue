<template>
    <div class="answerapproval" id="answer-approval" >
        <Question :questionDetails="userQuestionDetails.question"/>
        <UserAnsApproval :questionDetails="userQuestionDetails.answerList"/>
    </div>
</template>
<script>
// import UserQuesApproval from "@/components/UserQuesApproval"
import UserAnsApproval from "@/components/UserAnsApproval"
import Question from "@/components/Question"
export default {
    name:'answerapproval',
    components : {
        Question,
        UserAnsApproval
    },
    props: ["userQuestionDetails"]
}
</script>


<style scoped>
.answer-approval{
    margin: 10px;
}
</style>