<template>
  <div class="login" style="margin-top:40px">
    <div class="quora-text"><h1><b>QUORA 2.0</b></h1></div>
    <form>
      
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        :type="show4 ? 'text' : 'password'"
        label="Password"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>

      <v-btn class="mr-4" id="submit" @click="submit()">submit</v-btn>
      <br>
      <v-btn class="register" @click="register()">Don't have Account ?</v-btn>
      <!-- <v-btn @click="clear">clear</v-btn> -->
    </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "login",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  computed:{
      ...mapGetters(['getUserInfo'])
  },
  methods: {
      register() {
          this.$router.push('/register')
      },
    submit() {
      let data = {
        email: this.email,
        password: this.password,
       
      };
      this.$store
        .dispatch("login", data)
        .then(() => {
              

            this.$store.dispatch('getUserDetails',{"token":localStorage.getItem('token'),"provider":2})
            .then(()=> {


                let details={
                     userId:this.getUserInfo.id.toString(),
                    userEmail:this.getUserInfo.email,
                    userName:this.getUserInfo.name
                 }

                    window.console.log('userdet 2',details)
                this.$store.dispatch('sendUserDetails',details)
                
                window.console.log('printing role',this.getUserInfo)
                if(this.getUserInfo.role===null)
                {
                    this.$router.push('/selectrole')
                }
                else
                {
                    this.$router.push('/landing')
                }
            })
            
          // window.console.log(this.getRole)
        //   if (this.getRole) {
        //     this.$router.push("/merchantpage");
        //   } else {
        //     this.$router.push("/");
        //   }
        })
        .catch(err => window.console.log(err));
    }

    //   this.$router.push('/landing')
  }
};
</script>
<style scoped>
.login {
  width: 40%;
  height: 240px;
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
.quora-text{
  color:lightgreen; 
}
</style>