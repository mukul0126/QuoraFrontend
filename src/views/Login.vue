<template>
  <div class="login" style="margin-top:40px">
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
        v-model="email"
        :error-messages="emailErrors"
        label="Password"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>

      <v-btn class="mr-4" id="submit" @click="submit">submit</v-btn>
      <br />
      <v-btn class="register" @click="register">Don't have Account ?</v-btn>
      <!-- <v-btn @click="clear">clear</v-btn> -->
    </form>
  </div>
</template>
<script>
export default {
  name: "login",
  methods:{
      register() {
          this.$router.push('/register')
      },
      submit() {
          this.$router.push('/landing')
      }
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
</style>