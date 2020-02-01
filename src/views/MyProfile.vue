<template>
  <div class="user-profile">
    <UserHeader></UserHeader>
    <ProfileDescription :userDetails="getUserDetails"></ProfileDescription>
    <!-- <ProfileFeed :userDetails="getUserDetails"></ProfileFeed> -->
    <MyProfileFeed :userDetails="getUserDetails"></MyProfileFeed>

    
  </div>
</template>

<script>
import ProfileDescription from "@/components/MyProfileDescription.vue";
// import ProfileFeed from "@/components/ProfileFeed.vue";
import MyProfileFeed from "@/components/MyProfileFeed.vue";
import UserHeader from "@/components/UserHeader.vue";
import { mapGetters } from 'vuex';

export default {

    name: "Profile",
    components: {
    ProfileDescription,
    // ProfileFeed,
    MyProfileFeed,
    UserHeader,
    // OrganizationDescription
  },
  data() {
    return {
    
    }
  },
  mounted() {
      let userId= localStorage.getItem("userId")
      this.$store.dispatch('getUserProfileDetails',userId);
  },
  computed: {
    ...mapGetters(["getUserDetails"])
  }
}
</script>

<style scoped>
.user-profile
{
background-color : #C38D9E;
}

</style>