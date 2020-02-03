<template>
<div class="top1">
  <div class="register" style="margin-top:40px">
    <div class="top">
       <img src="https://lh4.googleusercontent.com/proxy/iaYeB4Rg4MxzhekIrmQl-lPbMisqedBqn6xvh1sFvj0Chm-DQomyqH4rMd6Gq_QHJl6eTh-yHN1FqXrACtC1KY3HaQdEJDxKhv6UU2Y-UsFE" width="200px" height="150px">
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
        class="abc"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
        class="abc"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        :type="show4 ? 'text' : 'password'"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
        class="abc"
      ></v-text-field>
      <v-text-field
        v-model="confirmpassword"
        :error-messages="passwordErrors"
        :type="show4 ? 'text' : 'password'"
        label="Confirm Password"
        required
        @input="$v.confirmpassword.$touch()"
        @blur="$v.confirmpassword.$touch()"
        class="abc"
      ></v-text-field>
      <!-- <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Item"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
      ></v-select>-->
      <!-- <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
      ></v-checkbox>-->

      <v-btn class="mr-4" id="register-button" @click="register()">Register</v-btn>
    </form>
  </div>
  </div>
</div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmpassword:""

    };
  },
  methods: {
    register() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      if( this.password.length>8) {
        if(this.confirmpassword===this.password ){
          this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/login"))
        .catch(err => window.console.log(err));
        }
        else{
          alert('Password miss match')
        }
      
      }
      else {
        alert('Password shoud have atleast 8 characters')
      }
    }

    //   register: function() {
    //   let data = {
    //     name: this.name,
    //     email: this.email,
    //     password: this.password
    //   };
    //   this.$store
    //     .dispatch("register", data)
    //     .then(() => this.$router.push("/login"))
    //     .catch(err => window.console.log(err));
    // }
  }
};
</script>
<style scoped>
.register {
  width: 40%;
  height: 280px;
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
  color:white;
  
  
}
#register-button {
  margin-top: 5px;
  background-color: black;
}
.top{
  border: 2px solid black;
  border-radius: 10px;
  background-color: #e6e6e6;
}
.abc{
  margin-left: 60px;
  margin-right: 60px;
}
</style>