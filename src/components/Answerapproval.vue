<template>
    <div class="answerapproval" id="answer-approval" >
        <UserQuesApproval/>
        <UserAnsApproval/>
    </div>
</template>
<script>
import UserQuesApproval from "@/components/UserQuesApproval"
import UserAnsApproval from "@/components/UserAnsApproval"
export default {
    name:'answerapproval',
    components : {
        UserQuesApproval,
        UserAnsApproval
    }
}
</script>


<style scoped>
.answer-approval{
    margin: 10px;
}
</style>