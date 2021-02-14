<template>
  <div>
    <Tabbar>
      <TabbarItem path="/home" activeColor="#e24b64">
        <img slot="imgSrc" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="active_imgSrc" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="tabbarName" class="title">首页</div>
      </TabbarItem>
      <TabbarItem path="/category" activeColor="#e24b64">
        <img slot="imgSrc" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="active_imgSrc" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="tabbarName" class="title">分类</div>
      </TabbarItem>
      <TabbarItem path="/shopcart" activeColor="#e24b64">
        <img slot="imgSrc" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="active_imgSrc" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="tabbarName" class="title">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile" activeColor="#e24b64">
        <img slot="imgSrc" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="active_imgSrc" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="tabbarName" class="title">个人</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar'
// import Tabbar from '../../common/tabbar/Tabbar'
// import TabbarItem from '../../common/tabbar/TabbarItem'
import TabbarItem from 'components/common/tabbar/TabbarItem'
export default {
  name:'MainTabbar',
  components: { Tabbar,TabbarItem},
}
</script>

<style>

</style>