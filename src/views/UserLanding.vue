<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <h1>Quora</h1>
        </div>
        <div>
          <input
            id="search"
            v-model="searchinput"
            type="text"
            placeholder="Search Products"
            class="search"
            required
          />
          <button class="search-btn" @click="search">Search</button>
            <button class="left" @click="dialogValue">Add Question</button>
        </div>
      </div>
    </nav>
    <Question />
    <v-dialog v-model="dialog" persistence max-width="650px">
        <AddQuestion @close= "dialog=false" ></AddQuestion>
    </v-dialog>
    <div class="sidenav"></div>
    <div class="footer">
      <p>Footer</p>
    </div>
  </div>
</template>

<script>
import Question from "@/components/LandingQuestion.vue";
// import Addquestion from '../components/Addquestion.vue';

export default {
  components: {
      Question
  },
  data() {
      return {
          dialog: false
      }
  },
  methods: {
      dialogValue(){
          this.dialog = true;
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
  height: 86%;
  width: 160px;
  margin-top: 70px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
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
</style>