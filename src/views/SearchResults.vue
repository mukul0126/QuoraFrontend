<template>
  <div id="searchresults" class="searchresults">
    <v-app>
    <UserHeader />
    <div
      class="questions"
      v-if="getSearchQuestion.length"
    >
      <SearchQuestion :question="getSearchQuestion" />
    </div>
    <div class="users" v-if="getSearchUser.length">
        <UserSearch :user="getSearchUser"/>
    </div>
    <div class="organization" v-if=" getSearchOrganization.length">
        
        <OrganizationSearch :organization="getSearchOrganization"/>
    </div>
    <div>
      <h3 v-if="getSearchQuestion.length && getSearchUser.length  && getSearchOrganization.length">Sorry No Results Found :( </h3>
    </div>
    </v-app>
  </div>
</template>
<script>
import SearchQuestion from "@/components/SearchQuestion.vue";
import UserHeader from "@/components/UserHeader.vue";
import OrganizationSearch from "@/components/OrganizationSearch.vue";
import UserSearch from "@/components/UserSearch.vue";
import { mapGetters } from "vuex";
export default {
  name: "searchresults",
  components: {
    SearchQuestion,
    UserHeader,
    OrganizationSearch,
    UserSearch
  },
  computed: {
    ...mapGetters(["getSearchQuestion"]),
    ...mapGetters(["getSearchOrganization"]),
    ...mapGetters(["getSearchUser"])
  }
};
</script>
<style scoped>
</style>