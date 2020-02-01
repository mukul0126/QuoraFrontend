<template>
    <div class="comment">
        <textarea v-model="message" placeholder="add comments"></textarea>
        <v-btn @click="giveComment()">Submit</v-btn>
        
    </div>
</template>
<script>
export default {
    name:'comment',
    methods:{
        giveComment() {
            let data={
                

            }
            this.$store.dispatch('submitComment',data)
        }
    }
}
</script>
<style scoped>

</style>