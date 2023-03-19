<template>
  <div class="pic-list">
    <h1 v-if="props.imgList.data.length < 1">请点击「获取妹子」按钮来获取图片列表</h1>
    <div v-else>
      <PictureItem v-for="image of props.imgList.data" 
                  :img-url="image.url" 
                  :key="image.url"
                  />
    
    </div>
  </div>
</template>

<script lang="ts" setup>
 import PictureItem from '~~/components/PictureItem.vue';
 import { Image } from "~~/interfaces/index";

 const props = defineProps< {
  imgList: {data: Image[]}
 }>()


</script>

<style lang="scss" scoped>
    .pic-list{
        position: relative;
        margin: 0 auto;
        border: 5px solid violet;
        width: 90%;
        height: auto;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: center;
        h1{
          position: relative;
          width: fit-content;
          margin: 0 auto;
          padding: 50px;
        }
    }
</style>