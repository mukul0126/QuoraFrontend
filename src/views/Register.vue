<template>
  <div class="register" style="margin-top:40px">
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
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
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
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
</template>
<script>
export default {
  name: "register",
  data() {
      return {
          name:'',
          email:'',
          password:''
      }
  },
  methods:{
      register() {
          let data={
              name:this.name,
              email:this.email,
              password:this.password
          };
          this.$store.dispatch("register",data)
          .then(()=>this.$router.push("/login"))
          .catch(err => window.console.log(err));
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
}
#register-button {
  margin-top: 5px;
}
</style>