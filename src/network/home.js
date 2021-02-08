import {request} from 'network/request'

export function getSwiperMultidata(){
  return request({
    url:'/home/multidata'
  })
}

export function getGoodsData(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}