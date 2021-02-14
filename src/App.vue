<template>
  <div id="app">
  <keep-alive exclude="Detail">
    <router-view></router-view>
  </keep-alive>
   <main-tabbar class="main-tabbar"/>
  </div>
</template>

<script>
import MainTabbar from 'components/content/maintabbar/mainTabbar'
export default {
  name: 'App',
  components: {
   MainTabbar
  }
}
</script>

<style>
@import url('./assets/css/base.css');

</style>
