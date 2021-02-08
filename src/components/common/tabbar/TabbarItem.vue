<template>
  <div class="tabbar-item" @click="clickTabbar">
      <div v-if="!isActive"><slot name="imgSrc"></slot></div>
      <div v-else><slot name="active_imgSrc"></slot></div>
      <div :style="isActiveStyle"><slot name="tabbarName"></slot></div>
  </div>
</template>

<script>
export default {
  name:"tabbarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  
  methods:{
    clickTabbar(){
      this.$router.push(this.path);
    }
  },
  computed:{
    isActiveStyle(){
      return this.isActive?{color:this.activeColor} : {}
    },
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    }
  }
}
</script>

<style>
.tabbar-item img{
  width: 25px;
  height: 25px;
}
.active{
  color: red;
}
</style>