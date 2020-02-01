<template>
  <div class="moderator">
    <ModeratorHeader></ModeratorHeader>
    <ModeratorNav></ModeratorNav>
    <router-view></router-view>
    <!-- <ModeratorFooter></ModeratorFooter> -->
  </div>
</template>

<script>
import ModeratorNav from "@/components/moderator/ModeratorNav.vue";
import ModeratorHeader from "@/components/moderator/ModeratorHeader.vue";
// import ModeratorFooter from "../../components/moderator/ModeratorFooter.vue";

export default {
  name: "Moderator",
  components: {
    ModeratorHeader,
    ModeratorNav
    // ModeratorFooter
  }
};
</script>

<style scoped>
.moderator {
  display: flex;
  flex-flow: column;
  height: -webkit-fill-available;
}
</style>