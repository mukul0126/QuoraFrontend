<template>
  <div>
    <div class="border" @click="viewQuestion">
        <h4>QUESTION</h4>
        <h5>What is India's capital??</h5>
    </div>

  </div>
</template>

<script>
export default {
    name: "landingquestion",
    methods : {
        viewQuestion(){
            this.$router.push("/viewquestion")
        }
    }
}
</script>

<style>

.border{
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