<template>
  <div class="createorganization" style="margin-top:40px">
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        label="Organization Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="Email"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <!-- <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="Email"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field> -->
      <!-- <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="Password"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field> -->

      <v-btn class="mr-4" id="submit" @click="submit">Create</v-btn>
      
      <!-- <v-btn @click="clear">clear</v-btn> -->
    </form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "createorganization",
  data(){
    return{
      name:'',
      email:''
    }
  },
  computed:{
      ...mapGetters(['getUserInfo'])
  },
  methods:{
      async submit() {
       await this.$store.dispatch('getUserDetails',{"token":localStorage.getItem('token'),"provider":2})

        let data={
          organizationName: this.name,
          organizationEmail: this.email,
          oranizationImage: "http://coviam.com/img/coviam.jpg",
          id:this.getUserInfo.id
          
        }
        // let moderatorId=this.getUserInfo.id
        this.$store.dispatch('createOrg',data)
        .then(()=> {
          this.$router.push('/landing')
        })
        .catch(err => window.console.log(err));
          // this.$router.push('/landing')
      }
  }
};
</script>
<style scoped>
.createorganization {
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
</style>