import {request} from './request'

export function getDetailData(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

//获取基本详情页的信息
export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
  }
}

//获取店铺信息
export class Shop{
  constructor(shopInfo){
    this.shopName = shopInfo.name;
    this.shopLogo = shopInfo.shopLogo;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.shopScore = shopInfo.score;
    this.shopUrl = shopInfo.shopUrl;
  }
}