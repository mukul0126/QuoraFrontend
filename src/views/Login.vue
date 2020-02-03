<template>
<div class="top1">
  <div class="login" style="margin-top:40px">
    <div class="top">
    <div class="quora-text"><h1><b>QUORA 2.0</b></h1></div>
      <img src="https://cdn.onlinewebfonts.com/svg/img_488160.png" width="30px" height="30px">
    <form>
      <v-text-field
        v-model="email"
        class="abc"
        label="E-mail"
        required
       
      ></v-text-field>
      <v-text-field
        v-model="password"
        class="abc"
        :type="'password'"
        label="Password"
        required
       
      ></v-text-field>

      <v-btn class="mr-4" id="submit" @click="submit()">submit</v-btn>
      <br />
      <v-btn class="register" @click="register()">Don't have Account ?</v-btn>
      <!-- <v-btn @click="clear">clear</v-btn> -->
    </form>
  </div>
  </div>
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
    async submit() {
      let data = {
        email: this.email,
        password: this.password,
       
      };
      this.$store
        .dispatch("login", data)
        .then(() => {
              

            this.$store.dispatch('getUserDetails',{"token":localStorage.getItem('token'),"provider":2})
            .then(()=> {


<<<<<<< HEAD
               
                  
                    localStorage.setItem('userId',this.getUserInfo.id)
                    localStorage.setItem('userName',this.getUserInfo.name)
=======
            
                    localStorage.setItem('userId',this.getUserInfo.id)
>>>>>>> 49d8182123eb8fa23116caab2cf52539c0786ccf
                
                
                window.console.log('printing role',this.getUserInfo)
                if(this.getUserInfo.role===null)
                {
                    this.$router.push('/selectrole')
                }
                else if(this.getUserInfo.role==="moderator")
                {
                  this.$router.push('/moderator/approveuser')
                }
                else
                {
<<<<<<< HEAD
                    // let dataa={
                    //   targetId:'',
                    //   action:"login",
                    //   appId:'quora',
                    //   userId:localStorage.getItem('userId'),
                    //   targetEntity:'',
                    //    tag:''
                    // }
                    
=======
                    let dataa={
                      targetId:'',
                      action:"login",
                      appId:'quora',
                      userId:localStorage.getItem('userId'),
                      targetEntity:'',
                       tag:''
                    }
                    // this.$router.push('/landing')
                    this.$store.dispatch('afterLoginAnalytics',dataa).then(() =>{
>>>>>>> 49d8182123eb8fa23116caab2cf52539c0786ccf
                       this.$router.push('/landing')
                    
                    // this.$store.dispatch('afterLoginAnalytics',dataa).then(() =>{
                    //    this.$router.push('/landing')
                    // })
                   
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
}
#submit {
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: gray;
}
.mr-4 {
  margin-bottom: 6px;
}
.register {
  margin-top: 5px;
  
  
}
.quora-text{
  color:#b74545;
  /* color:lightgreen;  */
}
.top{
  border: 2px solid black;
  padding-top: 150px;
  padding-bottom: 150px;
  border-radius: 8px;
  background-color: #f2f2f2;
}
.abc{
  margin-left: 60px;
  margin-right: 60px;
}
#button{
  background-color: gray;
}
</style>