<template>
  <div class="tab-bar">
    <router-link to="/home">
      <TabBarItem text="首页" mark="home">
        <img slot="normalImg" src="./../assets/images/ic_tab_home_normal.png" alt="">
        <img slot="activeImg" src="./../assets/images/ic_tab_home_active.png" alt="">
      </TabBarItem>
    </router-link>
    <router-link to="/radio">
      <TabBarItem text="书影音" mark="radio">
        <img slot="normalImg" src="./../assets/images/ic_tab_subject_normal.png" alt="">
        <img slot="activeImg" src="./../assets/images/ic_tab_subject_active.png" alt="">
      </TabBarItem>
    </router-link>
    <router-link to="/status">
      <TabBarItem text="广播" mark="status">
        <img slot="normalImg" src="./../assets/images/ic_tab_status_normal.png" alt="">
        <img slot="activeImg" src="./../assets/images/ic_tab_status_active.png" alt="">
      </TabBarItem>
    </router-link>
   <router-link to="/group">
     <TabBarItem text="小组" mark="group">
       <img slot="normalImg" src="./../assets/images/ic_tab_group_normal.png" alt="">
       <img slot="activeImg" src="./../assets/images/ic_tab_group_active.png" alt="">
     </TabBarItem>
   </router-link>
    <router-link to="/mine">
      <TabBarItem text="我的" mark="mine">
        <img slot="normalImg" src="./../assets/images/ic_tab_profile_female_normal.png" alt="">
        <img slot="activeImg" src="./../assets/images/ic_tab_profile_female_active.png" alt="">
      </TabBarItem>
    </router-link>
  </div>
</template>
<script>
  import TabBarItem from './../components/tabBarItem'
  export default{
    components:{
      TabBarItem
    }

  }
</script>
<style scoped>
.tab-bar{
  width: 100%;
  height: .5rem;
  border-top:.01rem solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
}

</style>
