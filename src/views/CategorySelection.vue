<template>
  <div class="category-selection" style="margin-top:40px">
    <form>
      <!-- <v-text-field
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
        v-model="email"
        :error-messages="emailErrors"
        label="Password"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field> -->
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
      ></v-checkbox> -->
      <h3>Select Category</h3>
      <div class="selection">
      <v-checkbox v-model="loading" class="mx-2" label="Bollywood"></v-checkbox>
      <v-checkbox v-model="flat" class="mx-2" label="Politics"></v-checkbox>
      <v-checkbox v-model="inset" class="mx-2" label="Tech"></v-checkbox>
      <v-checkbox v-model="loading" class="mx-2" label="Cooking"></v-checkbox>
      <v-checkbox v-model="flat" class="mx-2" label="Fashion"></v-checkbox>

      </div>

      <v-btn class="mr-4" id="register" @click="submit()">Submit</v-btn>
    </form>
  </div>
</template>
<script>
export default {
  name: "register",
  methods:{
      submit() {
          this.$router.push('/login')
      }
  }
};
</script>
<style scoped>
.category-selection {
  width: 40%;
  height: 400px;
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