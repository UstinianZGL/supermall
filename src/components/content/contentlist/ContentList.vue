<template>
  <div class="content-list">
    <content-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
import ContentListItem from './ContentListItem'
export default {
  components: { ContentListItem },
  name:'Content',
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style>
.content-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>