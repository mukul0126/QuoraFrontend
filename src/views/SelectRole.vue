<template>
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
  background-color: #f2f2f2;
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
</style>