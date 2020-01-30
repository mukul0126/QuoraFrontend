<template>
  <div class="user-profile">
    <UserHeader></UserHeader>
    <ProfileDescription></ProfileDescription>
     <!-- <OrganizationDescription></OrganizationDescription> -->
    <ProfileFeed></ProfileFeed>
  </div>
</template>

<script>
import ProfileDescription from "@/components/ProfileDescription.vue";
import ProfileFeed from "@/components/ProfileFeed.vue";
import UserHeader from "@/components/UserHeader.vue";
// import OrganizationDescription from "@/components/OrganizationDescription.vue";

export default {
    name: "Profile",
  components: {
    ProfileDescription,
    ProfileFeed,
    UserHeader
    // OrganizationDescription
  }
}
</script>

<style scoped>
.user-profile
{
background-color : #C38D9E;
}

</style>