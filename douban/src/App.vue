<template>
  <div id="app">
    <transition name='flash' mode='out-in'>
      <router-view/>
      <!--留坑给子组件显示-->
    </transition>
    <!--给所有界面添加刷新时的过度效果-->
    <!--<router-view></router-view>-->
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from './components/tabBar'
export default {
  name: 'App',
  components:{
    TabBar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
}
  html{
    font-size:100px;
  }
  h1{
    font-size: 20px;
  }
  a{
    text-decoration: none;
    color: white;
  }
  a:hover{
    color: white;
  }
/*定义渐变*/
.flash-enter-active, .flash-leave-active {
  transition: opacity .5s;
}
.flash-enter, .flash-leave-active {
  opacity: 0;
}
</style>
