<template>
<div class="organization-desc">
  <v-app id="organizationdesc">
    <v-card
      class="mx-auto"
      outlined
      id="desc-card"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Profile</div>
          <v-list-item-title class="headline mb-1">NAME: {{getOrganizationDetails.data.organizationName}}</v-list-item-title>
          <br><br><br>
          <div class="follower">
              <span class="border">Followers: {{getOrganizationDetails.data.organizationFollowers}} </span>
          </div>
          <br>
          <v-list-item-subtitle id="subtitle">E-mail: {{getOrganizationDetails.data.organizationEmail}}</v-list-item-subtitle> <br>
          <v-list-item-subtitle id="subtitle">Members: {{getOrganizationDetails.data.organizationMembers}}</v-list-item-subtitle>
        </v-list-item-content>
  
        <v-list-item-avatar
          tile
          size="200"
          color="grey"
        >
        <img
          src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
          alt="John"
        >
        </v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <v-btn text class="follow-button" :disabled="isFollowed" @click.once="sendFollowRequest">Follow</v-btn>
        <v-btn text class="join-button" :disabled="isJoined" @click.once="sendJoinRequest">Join</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isFollowed: false,
      isJoined: false
    }
  },
  computed: {
    ...mapGetters(["getOrganizationDetails"])
  },

  methods: {
    sendFollowRequest() {
      this.isFollowed = true;
        this.$store.dispatch("sendOrganizationFollowRequest",this.$route.params.organizationId)
    },

    sendJoinRequest() {
      this.isJoined = true;
      this.$store.dispatch("sendJoinRequest",this.$route.params.organizationId)
    }
  }
}
</script>

<style scoped>
.border{
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
}
#subtitle{
        position: relative;
    top: 9px;
}
#desc-card:hover {
box-shadow: 4px 4px 15px 0px black;
}
.organization-desc{
    height: 290px;
}
.follow-button{
    width:30%
}
#desc-card{
    width: 74%;
}
.join-button{
    width:30%
}
#organizationdesc {
  background-color: #EAEDED;
}
</style>