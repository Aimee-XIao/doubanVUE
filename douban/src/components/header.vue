<template>
  <div class="header">
    <p>{{text}}</p>
    <span >
      <slot name="headerImg01"></slot>
      <slot name="headerImg02"></slot>
    </span>
  </div>
</template>
<script>
  export default{
    props:['text']
  }
</script>
<style scoped>
  .header{
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    position:fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    text-align: center;
    border-bottom:.01rem solid #ccc;
    font-size:.25rem;
  }
  .header img {
    height: .4rem;
    margin-left: .1rem;
  }
  .header span{
    position:absolute ;
    top: 0;
    right: 0;
    margin: .1rem .1rem;
  }
</style>
