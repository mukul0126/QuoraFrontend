<template>
<v-app>
<div class="approve-question">
    <approveQuestion/>
</div>
</v-app>
</template>



<script>
import approveQuestion from "@/components/QuestionApproval.vue";

export default {
    components: {
        approveQuestion
    }
}
</script>


<style scoped>
.approve-question{
    background-color:#EAEDED; 
}
</style>