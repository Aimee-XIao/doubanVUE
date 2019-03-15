<template>
  <div class="radio">
    <Header text="书影音">
      <img slot="headerImg02" src="./../assets/images/ic_create_group_chat_blue.png" alt="">
      <img slot="headerImg01" src="./../assets/images/ic_actionbar_search_icon.png" alt="">
    </Header>
    <ul>
      <router-link  v-for="item in arr" :to="item.url" key="" >
        <li  @click="fn(item.mark2)"  :class="{active:$store.state.mark2 === item.mark2}">{{item.text}}</li>
      </router-link>
    </ul>
    <transition name='flash' mode='out-in'>
      <router-view/>
      <!--留坑给子组件显示-->
    </transition>
    <!--给所有界面添加刷新时的过度效果-->
  </div>
</template>
<script>
  import Header from './../components/header'
  export default{
    components:{
      Header
    },
    data:function(){
      return{
        arr:[
          {
            text:'电影',
            url:'/radio/movie',
            mark2:'movie'
          },{
            text:'阅读',
            url:'/radio/read',
            mark2:'read'
          },{
            text:'电视',
            url:'/radio/tv',
            mark2:'tv'
          },{
            text:'音乐',
            url:'/radio/music',
            mark2:'music'
          },{
            text:'同城',
            url:'/radio/city',
            mark2:'city'
          },
        ]
      }
    },
    methods:{
      fn:function( mark2){
        this.$store.state.mark2 = mark2;
      }
    }
  }
</script>
<style scoped>
ul{
  margin-top: .6rem;
  width: 100%;
  height: .5rem;
  line-height: .5rem;
  background-color: #9a9a9a;
  color: white;
  font-size: .15rem;
}
ul li{
  width: 20%;
  float: left;
  text-align: center;
}
  .active{
    color: #42BD56;
    border-bottom:.02rem solid #42bd56;
  }
</style>
