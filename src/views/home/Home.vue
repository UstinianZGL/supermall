<template>
  <div id="home">
   <nav-bar class="nav_bar"><div slot="center">购物街</div></nav-bar>
   <home-swiper :banners="banners" class="home-banners"></home-swiper>
   <home-recommend-view :recommends="recommends"></home-recommend-view>
   <feature-view></feature-view>
   <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabControlClick="tabControlClick"></tab-control>
   <content-list :goods="goods[currentGoodType].list"></content-list>
   <ul>
     <li>序号1</li>
     <li>序号2</li>
     <li>序号3</li>
     <li>序号4</li>
     <li>序号5</li>
     <li>序号6</li>
     <li>序号7</li>
     <li>序号8</li>
     <li>序号9</li>
     <li>序号10</li>
     <li>序号11</li>
     <li>序号12</li>
     <li>序号13</li>
     <li>序号14</li>
     <li>序号15</li>
     <li>序号16</li>
     <li>序号17</li>
     <li>序号18</li>
     <li>序号19</li>
     <li>序号20</li>
     <li>序号21</li>
     <li>序号22</li>
     <li>序号23</li>
     <li>序号24</li>
     <li>序号25</li>
     <li>序号26</li>
     <li>序号27</li>
     <li>序号28</li>
     <li>序号29</li>
     <li>序号30</li>
     <li>序号31</li>
     <li>序号32</li>
     <li>序号33</li>
     <li>序号34</li>
     <li>序号35</li>
     <li>序号36</li>
     <li>序号37</li>
     <li>序号38</li>
     <li>序号39</li>
     <li>序号40</li>
     <li>序号41</li>
     <li>序号42</li>
     <li>序号43</li>
     <li>序号44</li>
     <li>序号45</li>
     <li>序号46</li>
     <li>序号47</li>
     <li>序号48</li>
     <li>序号49</li>
     <li>序号50</li>
     <li>序号51</li>
     <li>序号52</li>
     <li>序号53</li>
     <li>序号54</li>
     <li>序号55</li>
     <li>序号56</li>
     <li>序号57</li>
     <li>序号58</li>
     <li>序号59</li>
     <li>序号60</li>
     <li>序号61</li>
     <li>序号62</li>
     <li>序号63</li>
     <li>序号64</li>
     <li>序号65</li>
     <li>序号66</li>
     <li>序号67</li>
     <li>序号68</li>
     <li>序号69</li>
     <li>序号70</li>
     <li>序号71</li>
     <li>序号72</li>
     <li>序号73</li>
     <li>序号74</li>
     <li>序号75</li>
     <li>序号76</li>
     <li>序号77</li>
     <li>序号78</li>
     <li>序号79</li>
     <li>序号80</li>
     <li>序号81</li>
     <li>序号82</li>
     <li>序号83</li>
     <li>序号84</li>
     <li>序号85</li>
     <li>序号86</li>
     <li>序号87</li>
     <li>序号88</li>
     <li>序号89</li>
     <li>序号90</li>
     <li>序号91</li>
     <li>序号92</li>
     <li>序号93</li>
     <li>序号94</li>
     <li>序号95</li>
     <li>序号96</li>
     <li>序号97</li>
     <li>序号98</li>
     <li>序号99</li>
     <li>序号100</li>
   </ul>
  </div>
</template>

<script>
 import NavBar from 'components/common/navbar/NavBar'

 import TabControl from 'components/content/tabcontrol/TabControl'
 import ContentList from 'components/content/contentlist/ContentList'

 import HomeSwiper from './childcomps/HomeSwiper'
 import HomeRecommendView from './childcomps/HomeRecommendView'
 import FeatureView from './childcomps/FeatureView'


 import {getSwiperMultidata,getGoodsData} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      ContentList,
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
        currentGoodType:'sell'
      }
    },
    created(){
      //请求多个数据
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
    }
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
    padding-top: 44px;
  }
</style>
