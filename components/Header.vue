<template>
  <header>
    <img src="~~/assets/logo/logo.png" alt="logo"/>
    <h2>获取妹子图片</h2>
  </header>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
  header{
    position: fixed;
    background-color: rgb(41, 41, 50);
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    z-index: 2;
    img{
      display: inline;
      position: relative;
      height: 100%;
    }
    h2{
        display: inline;
        position: absolute;
        margin: 0 0 0 5px;
        top: 7px;
    }
  }
</style>