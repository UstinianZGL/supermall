<template>
  <div class="introduce-good">
    <div class="goods-detail">
      <div class="start"></div>
      <div class="good-desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="show-good" v-if="detailInfo.detailImage">
      <div class="show-title">{{detailInfo.detailImage[0].key}}</div>
      <div class="show-image" v-for="item in detailInfo.detailImage[0].list">
        <img :src="item" alt="商品效果展示" @load="detailInfoImage">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'detailIntroduceGood',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{
      counter:0,
      imageInfoLength:0  
    }
  },
  methods:{
    detailInfoImage(){
      if(++this.counter == this.imageInfoLength){
        this.$emit('detailInfoImage');
      }
    }
  },
  watch:{
    detailInfo(){
      this.imageInfoLength = this.detailInfo.detailImage[0].list.length;
    }
  }
}
</script>

<style scoped>
.introduce-good{
  border-top: 4px solid rgb(241, 237, 237);
  /* text-align: center; */
}
.goods-detail{
  padding: 10px 8px 10px 8px;
  position: relative;
  /* text-align: center; */

}
.goods-detail .start,
.goods-detail .end{
  width: 26%;
  height: 2px;
  border-top: 1px solid #1e1e1e;
  position: relative;
}
.goods-detail .start::before,
.goods-detail .end::after{
  position: absolute;
  bottom: 0;
  content: "";
  width: 5px;
  height: 5px;
  background-color: #1e1e1e;
}
.goods-detail .end::after{
  right: 0;
  bottom: 0;
}
.goods-detail .end{
  position: absolute;
  right: 5px;
  bottom: -2px;
}
.goods-detail .good-desc{
  font-size: 13px;
  width: 100%;
  /* height: 60px; */
  padding: 13px 2px 1px 10px;
}
.show-image img{
  width: 100%;
}
.show-title{
  font-size: 13px;
  color: #1e1e1e;
  padding: 0px 0px 6px 14px;
}

</style>