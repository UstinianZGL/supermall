<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="backToHome" @click="backToHome">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles" 
             class="title-item" 
             :class="{'active': index === currentIndex}" 
             @click="clickTitleItem(index)">
        {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'DetailNavBar',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  components:{
    NavBar
  },
  methods:{
    clickTitleItem(index){
      this.currentIndex = index;
    },
    backToHome(){
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.detail-nav-bar{
  background-color: #fff;
  z-index: 10;
  position: relative;
}
.titles{
  display: flex;
  font-size: 13px;
}
.title-item{
  flex:1;
}
.backToHome{
  margin-top: 8px;
  margin-left: 7px;
}
.active{
  color:var(--color-high-text);
}
</style>