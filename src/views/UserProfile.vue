<template>
  <div class="user-profile">
    <ProfileDescription></ProfileDescription>
     <!-- <OrganizationDescription></OrganizationDescription> -->
    <ProfileFeed></ProfileFeed>
  </div>
</template>

<script>
import ProfileDescription from "@/components/ProfileDescription.vue";
import ProfileFeed from "@/components/ProfileFeed.vue";
// import OrganizationDescription from "@/components/OrganizationDescription.vue";

export default {
    name: "Profile",
  components: {
    ProfileDescription,
    ProfileFeed,
    // OrganizationDescription
  }
}
</script>