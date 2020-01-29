<template>
  <div>
    <div class="border" @click="viewQuestion">
        <h3>Virat Kohli, Jasprit Bumrah And Other Cricketers Pay Tribute to Late Kobe Bryant</h3>
        <h6>People of the Indian cricket community came together to extend their heartfelt tribute to former NBA player Kobe Bryant, who was tragically killed in a helicopter crash in the early hours of Monday. From Virat Kohli to Jasprit Bumrah and more, here is what they had to say about the passing of one of sport’s premier athlete.</h6>
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
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 80px;
}
.abc{
  
  margin-left: 300px;
}


</style>