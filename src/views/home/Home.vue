<template>
  <div id="home">
   <nav-bar class="nav_bar"><div slot="center">购物街</div></nav-bar>
   <b-scroll class="content" 
             ref="scroll"
             :probe-type="3"
             :is-pulling-up="true"
             @scrollPosition="getScrollPosition"
             @getPullingUp="getPullingUp">
     <home-swiper :banners="banners" class="home-banners"></home-swiper>
     <home-recommend-view :recommends="recommends"></home-recommend-view>
     <feature-view></feature-view>
     <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabControlClick="tabControlClick"></tab-control>
     <content-list :goods="goods[currentGoodType].list"></content-list>
   </b-scroll>
   <back-top @click.native="backTop" class="backtop" v-show="isShowUpLogo"></back-top>
  </div>
</template>

<script>
 import NavBar from 'components/common/navbar/NavBar'
 import BScroll from 'components/common/betterscroll/BScroll'

 import TabControl from 'components/content/tabcontrol/TabControl'
 import ContentList from 'components/content/contentlist/ContentList'
 import BackTop from 'components/content/backtop/BackTop'

 import HomeSwiper from './childcomps/HomeSwiper'
 import HomeRecommendView from './childcomps/HomeRecommendView'
 import FeatureView from './childcomps/FeatureView'


 import {getSwiperMultidata,getGoodsData} from 'network/home'


  export default {
    name: "Home",
    components: {
      NavBar,
      BScroll,
      TabControl,
      ContentList,
      BackTop,
      HomeSwiper,
      HomeRecommendView,
      FeatureView
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'sell':{page:0,list:[]},
          'new':{page:0,list:[]},
          'pop':{page:0,list:[]},
        },
        currentGoodType:'sell',
        isShowUpLogo:false
      }
    },
    created(){
      //请求多个数据  vue项目开发
      this.home_getSwiperMultidata()
      //请求商品数据
      this.home_getGoodsData('sell')
      this.home_getGoodsData('new')
      this.home_getGoodsData('pop')
    },
    methods:{
      /*
        事件监听相关方法
      */ 
     tabControlClick(index){
       switch (index) {
          case 0:
            this.currentGoodType = 'pop'
            break
          case 1:
            this.currentGoodType = 'new'
            break
          case 2:
            this.currentGoodType = 'sell'
            break
        }
     },
      backTop(){
        console.log('返回顶部');
        this.$refs.scroll.scrollTo(0,0,400);
      },
      getScrollPosition(position){
        // console.log(position)
        this.isShowUpLogo = -position.y > 1000;
      },
      getPullingUp(){
        this.home_getGoodsData(this.currentGoodType);
        this.$refs.scroll.finishPullingUp();
      },
      /**
       * 网络请求相关方法
       */
      home_getSwiperMultidata(){
        getSwiperMultidata().then(res=>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
       })
      },
      home_getGoodsData(type){
        const page = this.goods[type].page + 1;
        getGoodsData(type,page).then(
          res=>{
            console.log(res)
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page ++;
          }
        );
      }
    },
    mounted(){
      
    },
   
  }
</script>

<style scoped>
  .nav_bar{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 43px;
    z-index: 9;
  }
  .home-banners{
    /* padding-top: 44px; */
  }
  #home{
    position: relative;
    /* height:1700px; */
    height: 100vh;

  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /* height: 400px; */
    overflow: hidden;
  }

</style>
