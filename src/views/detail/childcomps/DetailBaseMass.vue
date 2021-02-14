<template>
  <div class="detail-base-mass" v-if="Object.keys(goods).length !== 0">
    <div class="top-mass">
      <div class="title">{{goods.title}}</div>
      <div class="price-mass">
        <span class="new-price">{{goods.newPrice}}</span>
        <span class="old-price">{{goods.oldPrice}}</span>
        <span class="discount" :style="{backgroundColor: goods.discountBgColor}" v-if="goods.discountDesc">{{goods.discountDesc}}</span>
      </div>
      <div class="columns-mass">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
    </div>
    <div class="bottom-mass services">
      <div v-for="index in goods.services.length - 2" class="services-item">
        <img :src="goods.services[index].icon" alt="" v-if="goods.services[index].icon"><span>{{goods.services[index].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseMass',
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.detail-base-mass{
  padding: 14px 9px 0 9px;
}
.title{
  color: #222;
  font-size: 13px;
  text-align: justify;
}
.price-mass{
  margin-top: 6px;
}
.price-mass span{
  display: inline-block;
  vertical-align: bottom;
}
.price-mass .new-price{
  color: #ff5777;
  font-size: 21px;
  /* font-weight: bold; */
  font-weight: 500;
}
.price-mass .old-price{
  color: rgb(155, 149, 149);
  font-size: 12px;
  text-decoration: line-through;
  margin-left: 3px;
  margin-bottom: 4px;
}
.price-mass .discount{
  color: #fff;
  display: inline-block;
  font-size: 12px;
  width: 29px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  font-weight: 600;
  margin-left: 5px;
  margin-bottom: 5px;
}
.columns-mass{
  margin-top: 14px;
  font-size: 13px;
  line-height: 26px;
  display: flex;
  justify-content: space-between;
  color: rgb(160, 150, 150);
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.services{
  display: flex;
  justify-content: space-between;
  padding: 18px 0 18px 0;
}
.services img{
  width: 10px;
  height: 10px;
}
.services span{
  font-size: 11px;
}

</style>