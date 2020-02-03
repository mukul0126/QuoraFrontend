<template>
<div class="top">
  <div class="category-selection" style="margin-top:40px">
    <form>
      <h3>Select Tags</h3>
      <div class="selection">
        <div style="float:left">
          <v-checkbox v-model="tag" value="Fiction" class="mx-2" label="Fiction"></v-checkbox>
          <v-checkbox v-model="tag" value="Non-Fiction" class="mx-2" label="Non-Fiction"></v-checkbox>
          <v-checkbox v-model="tag" value="Poetry" class="mx-2" label="Poetry"></v-checkbox>
          <v-checkbox v-model="tag" value="Short-stories" class="mx-2" label="Short-stories"></v-checkbox>
          <v-checkbox v-model="tag" value="Clothing" class="mx-2" label="Clothing"></v-checkbox>
          <v-checkbox v-model="tag" value="Footwear" class="mx-2" label="Footwear"></v-checkbox>
          <v-checkbox v-model="tag" value="Watches" class="mx-2" label="Watches"></v-checkbox>
          <v-checkbox v-model="tag" value="Coding" class="mx-2" label="Coding"></v-checkbox>
          <v-checkbox v-model="tag" value="Android" class="mx-2" label="Android"></v-checkbox>
          <v-checkbox v-model="tag" value="IOS" class="mx-2" label="IOS"></v-checkbox>
          <v-checkbox v-model="tag" value="Bollywood" class="mx-2" label="Bollywood"></v-checkbox>
        </div>
        <div style="float:right">
          <v-checkbox v-model="tag" value="Hollywood" class="mx-2" label="Hollywood"></v-checkbox>
          <v-checkbox v-model="tag" value="Tollywood" class="mx-2" label="Tollywood"></v-checkbox>
          <v-checkbox v-model="tag" value="Punjabi" class="mx-2" label="Punjabi"></v-checkbox>
          <v-checkbox v-model="tag" value="NorthIndian" class="mx-2" label="NorthIndian"></v-checkbox>
          <v-checkbox v-model="tag" value="SouthIndian" class="mx-2" label="SouthIndian"></v-checkbox>
          <v-checkbox v-model="tag" value="Italian" class="mx-2" label="Italian"></v-checkbox>
          <v-checkbox v-model="tag" value="Chinese" class="mx-2" label="Chinese"></v-checkbox>
          <v-checkbox v-model="tag" value="Football" class="mx-2" label="Football"></v-checkbox>
          <v-checkbox v-model="tag" value="Cricket" class="mx-2" label="Cricket"></v-checkbox>
          <v-checkbox v-model="tag" value="Badminton" class="mx-2" label="Badminton"></v-checkbox>
          <v-checkbox v-model="tag" value="Tennis" class="mx-2" label="Tennis"></v-checkbox>
          <v-btn class="mr-4" id="register" @click="submit()">Submit</v-btn>
        </div>
      </div>
    </form>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "register",
  data() {
    return {
      tag: [],
     
    };
  },
  computed:{
       ...mapGetters(['getUserInfo'])
  },
  methods: {
    async submit() {
      let selectedTagCommon=[]
      if (this.tag.length > 0) {
        for (var i = 0; i < this.tag.length; i++) {
          selectedTagCommon.push(this.tag[i]);
        }

           await this.$store.dispatch('getUserDetails',{"token":localStorage.getItem('token'),"provider":2})
           let details={
                     userId:this.getUserInfo.id.toString(),
                    userEmail:this.getUserInfo.email,
                    userName:this.getUserInfo.name
                 }

            this.$store.dispatch('sendUserDetails',details)

          let analyticsData={
                userId:this.getUserInfo.id,
                action:'register',
                appId:'quora',
                // subjectId:this.getUserInfo.name,
                tag:selectedTagCommon,
           }

        window.console.log(this.getUserInfo.id,'idddd')

        let data={
          cat:selectedTagCommon,
          id:this.getUserInfo.id
        }
        //  let details={
        //              userId:this.getUserInfo.id.toString(),
        //             userEmail:this.getUserInfo.email,
        //             userName:this.getUserInfo.name
        //          }

           await this.$store.dispatch('sendTagsToAnalytics',analyticsData)
          window.console.log('sending to anlytics------->')
          this.$store.dispatch('sendCategory',data)
          .then(()=> {
            this.$router.push('/landing')
          })
        window.console.log("cat", selectedTagCommon);
       
      }
    }
  }
};
</script>
<style scoped>
.category-selection {
  width: 40%;
  height: 820px;
  text-align: center;
  margin: auto;
  border-radius: 5px;
  /* background-image: url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'); */
  background-color: #f2f2f2;
  border:  3px solid black;
  border-radius: 7px;
}
#submit {
  padding-top: 5px;
  padding-bottom: 5px;
}
.mr-4 {
  margin-top: 20px;
  margin-bottom: 6px;
}
.register {
  margin-top: 5px;
 
}
h3{
  text-decoration: underline;
  text-decoration-color: red;;
  font-size: 22px;
  color:black;
}
#register{
   background-color: #b64545;
}
.top{
 background-color: black;
  background-size: 100%;
  /* background-color: #737373; */
}
</style>
