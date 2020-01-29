<template>
  <div id="landing">
    <UserHeader/>
    <div class="questions">
    <Question />
    </div>
    <div class="sidenav"></div>
    <div class="footer">
      <p>Footer</p>
    </div>
  </div>
</template>

<script>
import Question from "@/components/LandingQuestion.vue";
import UserHeader from "@/components/UserHeader.vue";

export default {
  components: {
      Question,
      UserHeader
  },
  data() {
      return {
          dialog: false
      }
  },
  created() {
     this.$store.dispatch("landingQuestions");
  },
  methods: {
      dialogValue(){
          this.dialog = true;
      },
      openProfile(){
          this.$router.push("/profile")
      }
  }
};
</script>

<style>
.container-fluid {
  background-color: white;
}
.button1 {
  margin-left: 700px;
}
.navbar-form navbar-left {
  margin-left: 300px;
}
.sidenav {
  height: 82%;
  width: 160px;
  margin-top: 70px;
  z-index: 1;
  top: -21px;
  left: 0;
  position: absolute;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;

}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: gray;
  color: white;
  text-align: center;
  height: 42px;
}
.table {
  border: 2px solid black;
  width: 400px;
  position: absolute;
  margin-left: 550px;
  border-radius: 10px;

  align-content: center;
}
.table2 {
  margin-left: 150px;
}
input {
  margin-left: 200px;
}
.btn btn-default {
  margin-right: 200px;
}
.search {
  padding: 10px;
  margin: 10px;
  width: 500px;
  border-radius: 3px solid white;
  background: white;
  color: orange;
}
.left {
  margin-left: 450px;
}
.profile-button{
    margin-left:10px;
}
</style>