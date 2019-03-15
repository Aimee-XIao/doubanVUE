<template>
  <div @click="fn()" class="item">
   <span v-show="show">
     <slot name="activeImg"></slot>
   </span>
    <span v-show="!show">
      <slot name="normalImg"></slot>
    </span>
    <p :class="{active:show}">{{text}}</p>
  </div>
</template>
<script>
  export default{
    props:['text','mark'],

    methods:{
     fn:function(){
       this.$store.state.mark = this.mark;
      // console.log(this.mark);
      // console.log(this.$store.state.mark);
     }
    },
    computed:{
      show:function(){
        if(this.mark == this.$store.state.mark){
          return true;
        }
        return false;
      }
    },

  }
</script>
<style scoped>
  .item{
    width: 20%;
    height: .6rem;
    float: left;
    font-size: .13rem;
    color:#ccc;
    text-align: center;
  }
  .active{
    color:#42BD56;
  }
  .item img{
    height: .3rem;
  }
</style>
