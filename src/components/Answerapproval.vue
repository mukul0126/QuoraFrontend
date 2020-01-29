<template>
    <div class="answerapproval" id="answerapproval">
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