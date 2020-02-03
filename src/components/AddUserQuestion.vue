<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <!-- <v-btn :color="primary" class="abc" dark v-on="on">Add Question</v-btn> -->
        <v-btn class="mx-2" fab dark small v-on="on" color="indigo" id="add-button">
        <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <span>Category:</span>
                <select class="xyz" v-model="category" @change="changeCategory($event)">
                  <option value="Fiction" selected>Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Poetry">Poetry</option>
                  <option value="Short-stories">Short-stories</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Watches">Watches</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Coding">Coding</option>
                  <option value="Android">Android</option>
                  <option value="iOS">iOS</option>
                  <option value="Bollywood">Bollywood</option>
                  <option value="Hollywood">Hollywood</option>
                  <option value="Tollywood">Tollywood</option>
                  <option value="Punjabi">Punjabi</option>
                  <option value="NorthIndian">NorthIndian</option>
                  <option value="SouthIndian">SouthIndian</option>
                  <option value="Italian">Italian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Football">Football</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Badminton">Badminton</option>
                  <option value="Tennis">Tennis</option>
                  <!-- <option v-for="item in Category" v-bind:key="item.id" :value="item.id" >{{item.name}}</option> -->
                </select>
              </v-col>
              <v-col cols="12">
                <v-text-field placeholder="Ask Question" type="text" required v-model="text1"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  placeholder="username"
                  label="TAG"
                  type="text"
                  required
                  v-model="text2"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6"></v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text v-on:click="dialog = false" @click="cancel()">Cancel</v-btn>
          <v-btn
            color="blue darken-1"
            text
            v-on:click="dialog = false"
            @click="submitClicked()"
          >Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "Userprofile",
  data: () => ({
    return: {},
    dialog: false,
    text1: "",
    text2: "",
    primary: '#303d59'
  }),

  methods: {
    submitClicked() {
      let userid = localStorage.getItem("userId");
      this.$store.dispatch("addQuestion", {
        userId: userid,
        categoryId: this.category,
        questionBody: this.text1,
        personsTag: null,
        orgId: null,
        userName: localStorage.getItem('userName')
      });
    },
    cancel() {
      let data = {
        text1: this.text1,
        text2: this.text2
      };
      this.$store.dispatch("Userprofile", {
        data: data,
        success: function() {
          window.console.log("login successful...");
        },
        fail: function() {
          window.console.log("login failed ...");
        }
      });
    }
  }
};

// data: function () {
// return {

// }
// }
</script>
<style scoped>
/* .abc{
  margin-left: 800px;
  margin-bottom: -95px;

  margin-top: -50px;
}  */
.xyz {
  margin-left: 0px;
  background-color: skyblue;
}
#add-button {
  left: 37%
}
</style>