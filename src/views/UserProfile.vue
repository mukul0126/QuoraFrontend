<template>
  <div class="user-profile">
    <UserHeader></UserHeader>
    <ProfileDescription :userDetails="getUserDetails"></ProfileDescription>
    <ProfileFeed :userDetails="getUserDetails"></ProfileFeed>
  </div>
</template>

<script>
import ProfileDescription from "@/components/ProfileDescription.vue";
import ProfileFeed from "@/components/ProfileFeed.vue";
import UserHeader from "@/components/UserHeader.vue";
import { mapGetters } from 'vuex';

export default {

    name: "Profile",
    components: {
    ProfileDescription,
    ProfileFeed,
    UserHeader
    // OrganizationDescription
  },
  mounted() {

      window.console.log('hello from mounted')
      let userId=localStorage.getItem("userId");
            window.console.log("userId",userId)
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