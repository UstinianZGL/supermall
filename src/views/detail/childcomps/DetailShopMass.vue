<template>
  <div class="detail-shop-mass">
    <div class="shop-name">
      <img :src="shop.shopLogo" alt="">
      <span>{{shop.shopName}}</span>
    </div>
    <div class="shop-mass">
      <div class="goods-and-sell shop-mass-item">
        <div class="csells item">
          <div class="number">{{shop.cSells}}</div><span class="title">总销量</span>
        </div>
        <div class="cgoods item">
          <div class="number">{{shop.cGoods}}</div><span class="title">全部宝贝</span>
        </div>
        <div class="line"></div>
      </div>
      <div class="score shop-mass-item">
        <div class="score-item" v-for="item in shop.shopScore">
          <span class="type">{{item.name}}</span>
          <span class="type-score" :class={texthigh:item.isBetter,textlow:!item.isBetter}>{{item.score}}</span>
          <span class="type-level low" v-if="!item.isBetter">低</span>
          <span class="type-level high" v-else>高</span>
        </div>
      </div>
    </div>
    <div class="shop-link">
      <a :href="shop.shopUrl" class="link-button">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name:'DrtailShopMass',
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-shop-mass{
  border-top: 4px solid rgb(241, 237, 237);
}
.shop-name{
  height: 45px;
  line-height: 45px;
  padding: 16px 9px 15px 9px;
  /* vertical-align: center; */
}
.shop-name img{
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid rgba(100,100,100,.15);
}
.shop-name span{
  display: inline-block;
  position: relative;
  left: 9px;
  bottom: 12px;
  font-size: 14px;
}
.shop-mass{
  margin-top: 25px;
  display: flex;
  /* line-height: 74px; */
  /* justify-content: center; */
  align-items: center;
}
.shop-mass .shop-mass-item{
  flex: 1;
  /* justify-content: center; */
}
.goods-and-sell{
  display: flex;
  margin-left: 15px;
  color: #1e1e1e;
  position: relative;
  /* text-align: center; */
  width: 130px;
  /* border-right: 1px solid red; */
}
.line{
  width: 10px;
  height: 36px;
  border-right: 1px solid #d6d1d1;
  position: absolute;
  left: 77%;
}
.goods-and-sell .item{
  text-align: center;
  margin-right: 10px;
}
.goods-and-sell .number{
  font-size: 15px;
  color: #1d1d1d;
}
.goods-and-sell .title{
  font-size: 12px;
  color: #666363;
}
.score-item{
  font-size: 12px;
  line-height: 25px;
  position: relative;
}
.score-item .type-score{
  margin-left: 4px;
}
.score-item .type-level{
  width: 17px;
  height: 21px;
  line-height: 21px;
  text-align: center;
  /* background-color: pink; */
  color: #fff;
  position: absolute;
  right: 50px;
}
.textlow{
  color: green;
}
.texthigh{
  color: red;
}
.low{
  background-color: green;
}
.high{
  background-color: red;
}
.shop-link{
  width: 100%;
  height: 55px;
  line-height: 55px;
  text-align: center;
  padding-bottom: 8px;
}
.shop-link .link-button{
  width: 120px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color: #f2f5f8;
  border-radius: 5px;
  /* border: 1px solid #2e1e1e; */
  display: inline-block;
  font-size: 13px;
}
</style>