<template>
<v-app>
<div class="approve-answer">
    <AnswerApproval/>
</div>
</v-app>
</template>


<script>
import AnswerApproval from "@/components/moderatorAnsApproval.vue";

export default {
    components: {
        AnswerApproval
    }
}
</script>

<style scoped>
.approve-answer{
    background-color:#EAEDED; 
}
</style>