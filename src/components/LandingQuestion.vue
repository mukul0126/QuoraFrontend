<template>
    <div class="click-question">
        <div class="repeat" v-for="(item,index) in products" :key="index" @click="viewQuestion">
        <h4>QUESTION</h4>
        <h5>What is India's capital?? {{item.question}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "question",
    methods : {
        viewQuestion(){
            this.$router.push("/viewquestion")
        }
    },

    props: ["question"]
}
</script>

<style>

.click-question{
  border: 3px solid black;
  margin-left: 350px;
  margin-right: 350px;
  border-radius: 7px;
  padding: 15px;
  margin-top: 80px;
}

.abc{
  margin-left: 300px;
}

</style>