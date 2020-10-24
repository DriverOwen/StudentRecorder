<template>
  <div class="activity" >
    <div class="activity-item" v-for="item in activity">
      <div class="item-img">
        <img :src="item.logo" alt="">
      </div>
      <div class="detailInfo">
        <div class="title">{{item.title}}</div>
        <div class="time">{{item.startTime | formatDate}}-{{item.endTime | formatDate}}</div>
        <div class="place">{{item.addr}}</div>
        <div class="status">
          <span class="capsule pink">{{item.statusName}}</span>
          <span class="capsule blue" v-if="item.typeName">{{item.typeName}}</span>
          <span class="capsule blue" v-if="item.type">{{item.type}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
 import {formatDate} from '@/utils/utils'
  export default {
    name: "activity",
    props: {
      activity: {
        type: Array,
        default(){
          return []
        }
      }
    },
    filters: {
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy.MM.dd')
      }
    }
  }
</script>

<style scoped>
  .activity {
    display: flex;
    flex-wrap: wrap;
  }
  .activity-item {
    display: flex;
    width: 290px;
    max-height: 80px;
    font-size: 12px;
    background: #e5efbe;
    box-shadow: 0 0 6px -1px rgba(140,146,163,0.5);
    margin: 6px 6px;

  }
  .item-img img{
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }
  .detailInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align:left;
    margin-left: 5px;

  }
  .capsule {

    margin: 0px 2px;
    padding: 2px 3px;
    border-radius: 3px;
  }
  .pink {
    background: #ff8198;
  }
  .blue {
    background: #6fdaff;
  }

</style>