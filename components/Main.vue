<template>
   <main>
    <div class="menu-area">
        <h1>点击按钮随机获取妹子</h1>
        <p align="center">
            <p> 是否开启R18模式: <input type="checkbox" v-model="isR18"/> </p>
            <p> 你要几张图片？
              <input type="number" 
                     min="1" 
                     max="10" 
                     v-model="num" 
                     @blur="limitTheNum"
                     /> 
            </p> 
        </p>
        <p align="center">
            <button @click="getMeizi">获取妹子</button>
        </p>
    </div>
    <PictureList :img-list="imgList"/>
   </main>
</template>

<script lang="ts" setup>
   import { reactive } from "vue";
   import axios from "axios";
   import { Image } from "~~/interfaces/index"
   import PictureList from "~~/components/PictureList.vue";

   // 是否开启R18
   const isR18: Ref<boolean> = ref(false)

   // 图片数量
   const num: Ref<number> = ref(1)


   // 限制数字的数量在1-10这个范围内
   function limitTheNum(){
    if(num.value > 10) num.value = 10
    if(num.value < 1) num.value = 1
   }

   // 存放拿到的图片列表, 使用reactive深度监听对象
   let imgList: { data: Image[] } = reactive({
     data: []
   })

   // 请求自建后端接口，通过后端转发请求给真实API来解决前端直接调用API的跨域问题
   function getMeizi(){
      axios.get("http://localhost:2334/getMeizi",{
          params: {
            r18: isR18.value,
            num: num.value
          }
        }).then(
          res => {
            imgList.data = res.data.data as Image[];
          }
        );
   }

</script>

<style lang="scss" scoped>
  main{
    position: relative;
    top: 45px;
    
    height: 400px;
    .menu-area{
        position: relative;
        margin: 0 auto;
        width: 90%;
        h1{
            margin: 0 auto;
            text-align: center;
        }
        p{
          margin: 10px auto;

          width: fit-content;
        }
        input{
          &[type=number]{
            position: relative;
            height: 30px;
            width: 60px;
            font-size: 18px;
            &::-webkit-inner-spin-button, &::-webkit-outer-spin-button{
              height: 40px;
            }
          }
          &[type=checkbox]{
            position: relative;
            margin: 0 auto;
            width: 22px;
            height: 22px;
            top: 5px;
            &:checked{
               color: deeppink;
            }
          }
        }
        button{
            position: relative;
            margin: 0 auto;
            width: 100px;
            height: 40px;
            background-color: cyan;
            border-radius: 8px;
            border: 3px solid yellow;
            color: black;
            transition: width, 0.5s;
            font-family: myziti;
            font-size: 18px;
            &:hover{
                background-color: deeppink;
                border: 5px solid orange;
                transform: scale(107%, 107%);
                cursor: pointer;
            }
        }
    }
    
  }
</style>