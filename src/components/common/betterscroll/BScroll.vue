<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'BScroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    isPullingUp:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      bscroll:null
    }
  },
  mounted(){
    this.bscroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:this.isPullingUp,
      click:true
    })
    //获取当前滚动条滚动的位置
    this.bscroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scrollPosition',position);
    })

    //监听下拉触底
    this.bscroll.on('pullingUp',()=>{
      this.$emit('getPullingUp');
    })
  },
  methods:{
    scrollTo(x,y,time=400){
      this.bscroll && this.bscroll.scrollTo(x,y,time);
    },
    finishPullingUp(){
      this.bscroll && this.bscroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
</style>