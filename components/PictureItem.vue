<template>
    <div>
      <a :href="props.imgUrl" target="_blank">
        <img :src="props.imgUrl" alt="妹子"/>
      </a>
    </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    imgUrl: String
  })
</script>

<style lang="scss" scoped>
  img{
    padding: 20px;
    max-width: 200px;
    max-height: 300px;
    transition: width, 0.5s;
    position: relative;
    &:hover{
      transform: scale(105%, 105%);
      filter: drop-shadow(0 0 20px yellow);
      cursor: pointer;
    }
  }
</style>