<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in imgUrls">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name:'DetailSwiper',
  props:{
    imgUrls:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{

    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style>
.detail-swiper{
  height: 250px;
  overflow: hidden;
}
</style>