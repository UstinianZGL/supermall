<template>
  <swiper>
     <swiper-item v-for="item in banners">
       <a :href="item.link">
         <img :src="item.image" alt="" @load="swiperImgFinish">
       </a>
     </swiper-item>
   </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
  name:'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isload:false
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    swiperImgFinish(){
     if(!this.isload){
        this.$emit('swiperImgFinish');
     }
     this.isload = true;
    }
  }
}
</script>

<style>

</style>