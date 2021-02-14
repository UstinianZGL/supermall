<template>
  <div id='detail'>
    <detail-nav-bar :titles="['商品','参数','评论','推荐']" ></detail-nav-bar>
    <b-scroll class="content" ref="scroll">
      <detail-swiper :imgUrls="imgUrls"></detail-swiper>
      <detail-base-mass :goods="goods"></detail-base-mass>
      <detail-shop-mass :shop="shop"></detail-shop-mass>
      <detail-introduce-good :detailInfo="detailInfo" @detailInfoImage="detailInfoImage"></detail-introduce-good>
    </b-scroll>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailBaseMass from './childcomps/DetailBaseMass'
import DetailShopMass from './childcomps/DetailShopMass'
import detailIntroduceGood from './childcomps/DetailIntroduceGood'

 import BScroll from 'components/common/betterscroll/BScroll' 

import {getDetailData,Goods,Shop} from 'network/detail'
export default {
  name:'Detail',
  data(){
    return {
      id:'',
      imgUrls:[],
      goods:{},
      shop:{},
      detailInfo:{}
    }
  },
  methods:{
    //防抖函数
    debounce(func,delay){
      let timer = null;
      return function(...args){
        if(timer) clearInterval(timer);
          timer = setTimeout(()=>{
            func.apply();
          },delay)
      }
    },


    detail_getData(){
      getDetailData(this.id).then((res)=>{
        console.log(res);
        const data = res.result;

        //获取轮播图数据
        this.imgUrls = data.itemInfo.topImages;

        //获取基本详情数据
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);

        //获取店铺信息
        this.shop = new Shop(data.shopInfo);

        //获取商品具体的介绍信息
        this.detailInfo = data.detailInfo
      })
    },
    //监听商品详情展示的图片是否已经全部加载完了，加载完了后refresh一下
    detailInfoImage(){
      this.$refs.scroll.refreshMass();
    }
  },
  mounted(){
    const refreshFunc = this.debounce(this.$refs.scroll.refreshMass,100);
    //监听商品详情展示的图片是否已经全部加载完了，加载完了后refresh一下
    // this.detailInfoImage()
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseMass,
    DetailShopMass,
    detailIntroduceGood,
    BScroll
  },
  created(){
    //获取当前页面的id值
    this.id = this.$route.query.iid;
    
    //根据id值发送网络请求，拿到对应的数据
    this.detail_getData();
  },
  destroyed(){
    console.log('detail destroy');
  }
}
</script>

<style scoped>
#detail{
  background-color: #fff;
  position: relative;
  z-index: 10;
  height: 100vh;
}
.content{
  height: calc(100% - 44px);
}
.nav-bar{
  /* position: relative; */
  z-index: 9;
}
</style>