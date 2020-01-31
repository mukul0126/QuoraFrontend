<template>
<v-app>
<div class="approve-answer">
    <answerApproval/>
</div>
</v-app>
</template>


<script>
import answerApproval from "@/components/Answerapproval.vue";

export default {
    components: {
        answerApproval
    }
}
</script>

<style scoped>
.approve-answer{
    background-color:#EAEDED; 
}
</style>