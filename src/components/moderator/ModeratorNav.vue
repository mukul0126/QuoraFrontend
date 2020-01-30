
<template>
  <div class="navigation">
    <!-- <nav id="nav"> -->
    <ul class="navnew">
      <li>
        <!-- <router-link :to="'/merchant/'+ merchant_id +'/myproducts'"> -->
        <router-link to="/moderator/approveuser">
          <b class="white">ApproveUser</b>
          </router-link>
        <!-- </router-link> -->
      </li>
      <div class="divider" />
      <li>
        <router-link to="/moderator/approvequestion">
          <b class="white">ApproveQuestion</b>
        </router-link>
      </li>
      <div class="divider" />
      <li>
        <router-link to="/moderator/approveanswer">
          <b class="white">ApproveAnswer</b>
        </router-link>
      </li>
      <div class="divider" />
      <li>
        <button class="logout">
          <b class="white">LogOut</b>
        </button>
      </li>
    </ul>
    <!-- </nav> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  computed: {
   
  },
  methods: {
    
  }
};
</script>
<style scoped>
.white {
  color: white;
}
.navigation {
  border: 1px solid black;
  height: 50px;
  /* background-image: url("https://i.pinimg.com/originals/ce/2f/9a/ce2f9a109599a284b214db7984194409.jpg"); */
}
.divider {
  width: 5px;
  height: auto;
  display: inline-block;
}
.navnew {
  display: flex;
  list-style: none;
  padding: 15px 0;
  margin: 0;
  justify-content: center;
  background: #f5f8fa;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 24px;
  flex-flow: row wrap;
  background-color: #83677B;
}
.logout {
  background-color:#83677B;
}
</style>