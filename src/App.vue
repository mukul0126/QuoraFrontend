<template>
  <!-- <v-app> -->
    <div> 
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <!-- <v-content> -->
      
      <router-view/>
      <!-- <v-btn @click="viewques">View Question</v-btn> -->
      <!-- <HelloWorld/> -->
      <!-- <Question/> -->
    <!-- </v-content> -->
    </div>
  <!-- </v-app> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Question from './components/Question';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    // Question
  },
  methods: {
    viewques() {
      this.$router.push('/viewquestion')
    }
  },

  data: () => ({
    //
  }),
};
</script>
