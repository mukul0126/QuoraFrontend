<template>
<v-app>
<div class="approve-user">
    <approveUser/>
</div>
</v-app>
</template>



<script>
import approveUser from "@/components/UserApproval.vue";

export default {
    components: {
        approveUser
    }
}
</script>