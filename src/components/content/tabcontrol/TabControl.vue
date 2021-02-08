<template>
  <div class="home-tabbar-control">
    <div class="control-item" 
         v-for="(item,index) in titles" 
         :class="{'active':index == currentIndex}" 
         @click="btnClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    btnClick(index){
      this.currentIndex = index;
      this.$emit('tabControlClick',index);
    }
  }
}
</script>

<style>
.home-tabbar-control{
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
}
.home-tabbar-control .control-item{
  flex: 1;
}
.control-item span{
  padding: 4px;
}
.active{
  color: var( --color-high-text);
}
.active span{
  border-bottom: 3px solid  var( --color-high-text);
}
</style>