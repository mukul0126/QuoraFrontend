<template>
<div class="abc">
  <div class="select-role" style="margin-top:40px">
    <form>
      <h3>Select Role</h3>
      <div class="selection">
        <v-radio-group v-model="userrole">
          <v-radio label="User" value="user"></v-radio>
          <v-radio label="Moderator" value="moderator"></v-radio>
        </v-radio-group>
      </div>

      <v-btn class="mr-4" id="register" @click="submit()">Submit</v-btn>
    </form>
  </div>
</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "selectrole",
  data() {
    return {
      role: "",
      //   token: localStorage.getItem("token"),
      channel_channel_id: 2
    };
  },
  computed: {
    ...mapGetters(["getUserInfo"])
  },
  methods: {
    submit() {
      window.console.log("select role enter func");

      window.console.log(this.userrole, "print role");
      if (this.userrole === "user") {
        let data = {
          role: "user",
          //   token: localStorage.getItem("token"),
          channel_channel_id: 2
        };
        window.console.log("nter");
        this.$store
          .dispatch("sendRole", data)
          .then(() => {
            let newData = {
              userId: this.getUserInfo.id,
              userName: this.getUserInfo.name,
              userEmail: this.getUserInfo.email
            };

            this.$store.dispatch("sendUserDetails", newData).then(() => {
              this.$router.push("/categoryselection");
            });
          })
          .catch(err => window.console.log(err));

        // this.$router.push('/categoryselection')
      }
      if (this.userrole === "moderator") {
        let data = {
          role: "moderator",
          //   token: localStorage.getItem("token"),
          channel_channel_id: 2
        };
        this.$store
          .dispatch("sendRole", data)
          .then(() => {
            let newData = {
              moderatorId: this.getUserInfo.id,
              moderatorName: this.getUserInfo.name,
              moderatoremail: this.getUserInfo.email
            };
            this.$store.dispatch("sendModeratorDetails", newData).then(() => {
              this.$router.push("/createorganization");
            });
          })
          .catch(err => window.console.log(err));

        // this.$router.push("/createorganization");
      }
    }
  }
};
</script>


<style scoped>
.select-role {
  width: 40%;
  height: 200px;
  text-align: center;
  margin: auto;
  border-radius: 5px;
  background-color: #cce6ff;
  border: 2px solid gray;
  border-radius: 50px;
}
#submit {
  padding-top: 5px;
  padding-bottom: 5px;
}
.mr-4 {
  margin-bottom: 6px;
}
.register {
  margin-top: 5px;
}
h3{
  font-size: 40px;
  color: gray;
  text-decoration: underline;
  text-decoration-color: gray;
}
#register{
  font-size: 20px;
  background-color: black;
  color: white;
}
.abc{
  background-color: #b74545;
  margin-top: 150px;
  margin-bottom: 150px;
}
/* #register{
  font-size: 20px;
    margin-top: 300px;
    background-color: black;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
} */
</style>