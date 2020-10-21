<template>
  <div class="panel">
    <div class="panel-head">
      114次有效学习
    </div>
    <div class="recordPanel">
      <div class="left-side">
        <div class="box">周一</div>
        <div class="box">周四</div>
        <div class="box">周日</div>
      </div>

        <div class="right-side">
          <div class="box" :class="{
            less: allDays[index].record===0,
          little: allDays[index].record ===1,
          some: allDays[index].record>2 && allDays[index].record <4,
          many: allDays[index].record>4 && allDays[index].record <8,
          much: allDays[index].record>8}"
               v-for="(item,index) in allDays.length"
               @mouseover="showInfo($event)"
          >
          </div>
          <float-msg class="floatMsg" ref=""></float-msg>
        </div>
        <div class="top-side">
          <div class="month" v-for="month in 12">
            第{{month }}月
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import FloatMsg from "@/components/content/floatMsg";
export default {
  name: "recorderPanel",
  components: {FloatMsg},
  data(){
    return {
      panelMonth: [],
      allDays: []
    }
  },
  created() {
    this.getYears()
  },
  methods: {
    getYears(){
      let Year = new Date().getFullYear(), s = 0, d;//获取当前年
      for (let i = 1; i < 13; i++) {
        d = new Date(Year, i, 0);//获取某一个月的天数
        s += d.getDate();
        this.panelMonth.push({month:i,days:d.getDate()})
      }
      for(let i = 0; i < s; i++){
        this.allDays.push({record: Math.random()*10})
      }
    },
    colors(){

    },
    showInfo(e){

    }
  }
}
</script>

<style scoped>
.panel {
  margin-top: 20px;
}
.panel-head {
  font-size: 20px;
  text-align: left;
  padding-bottom: 20px;
}
.recordPanel {
  padding-top: 20px;
  width: 830px;
  height: 125px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
}
.left-side {
  width: 32px;
  font-size: 12px;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.right-side {

  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 15px;
}

.right-side .box {
  width: 15px;
  height: 15px;
  border: 1px solid #FFF;
  position: relative;
}
.right-side .month {
  position: absolute;
  top: 0;
  margin-top: -15px;
  margin-left: -15px;
  min-width: 45px;
  font-size: 12px;
  text-align: center;
}
.top-side {
  position: absolute;
  width: 90%;
  left: 0;
  top: 0;
  display: flex;
  margin-left: 70px;
  justify-content: space-around;
}
.top-side .month {
  font-size: 12px;
}
.less {
  background-color: rgb(235, 237, 240);
}
.little {
  background-color: #9be9a8;
}
.some {
  background-color: #40c463;
}
.many {
  background-color: #30a14e;
}
.much {
  background-color: #216e39;
}
.floatMsg {
  position: absolute;
  left: 0;
  top: 0;
}
</style>