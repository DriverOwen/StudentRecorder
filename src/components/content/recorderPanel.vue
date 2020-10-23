<template>
  <div class="panel">
    <div class="panel-head">
      {{countRecord}}次有效学习
    </div>
    <div class="recordPanel">
      <div class="left-side">
        <div class="box">周一</div>
        <div class="box">周四</div>
        <div class="box">周日</div>
      </div>

        <div class="right-side" @mouseenter="isShow=true" @mouseleave="isShow=false" ref="rightSide">
          <div class="box" :class="{
            less: allDays[index].record===0,
          little: allDays[index].record ===1,
          some: allDays[index].record>=2 && allDays[index].record <=4,
          many: allDays[index].record>4 && allDays[index].record <=8,
          much: allDays[index].record>8}"
               v-for="(item,index) in allDays.length"
               @mouseover="showInfo($event,index)"
          >
          </div>
          <float-msg v-show="isShow" class="floatMsg" ref="floatMsg">
            <span class="MsgText" slot="text">{{CurrentFloatMsg}}</span>
          </float-msg>
        </div>
        <div class="top-side">
          <div class="month" v-for="month in 12">
            第{{month }}月
          </div>
        </div>
    </div>
    <div class="detailInfo">
      <span> 少 </span>
      <div class="recordList">
        <div class="box less"></div>
        <div class="box little"></div>
        <div class="box some"></div>
        <div class="box many"></div>
        <div class="box much"></div>
      </div>
      <span> 多 </span>
    </div>
    <el-col>
      <echars></echars>
    </el-col>
  </div>
</template>

<script>
import FloatMsg from "@/components/content/floatMsg";
import Echars from "@/components/content/echars";
export default {
  name: "recorderPanel",
  components: {Echars, FloatMsg},
  data(){
    return {
      panelMonth: [],
      allDays: [],
      isShow: false,
      CurrentFloatMsg:'',
      year: '',
      month:1,
      day:1,

    }
  },
  created() {
    this.getYears()
  },
  methods: {
    getYears(){
      this.year = new Date().getFullYear()
      let s = 0, d;//获取当前年
      for (let i = 1; i < 13; i++) {
        d = new Date(this.year, i, 0);//获取某一个月的天数
        s += d.getDate();
        this.panelMonth.push({month:i,days:d.getDate()})
      }
      for(let i = 0; i < s; i++){
        this.allDays.push({record: Math.floor(Math.random()*10)})
      }
    },
    colors(){

    },
    showInfo(e,index){
      let ofx = this.$refs.rightSide.getBoundingClientRect().x
      let ofy = this.$refs.rightSide.getBoundingClientRect().y
      this.$refs.floatMsg.$el.style.left = e.pageX - ofx - 30 + 'px'
      this.$refs.floatMsg.$el.style.top = e.pageY - ofy - 25 + 'px'

      let day = index+1;
      let sum=0;

      for(let dates of this.panelMonth){
        for(let i = 0; i< dates.days; i++) {
            sum++;
            if(day === sum){
              //this.CurrentFloatMsg =  this.year+"-" + dates.month + "-" + ":"+ Math.floor(this.allDays[index].record)
              this.month = dates.month
              console.log("month" + dates.month)
            }
          }
        }
        let sumDay = 0;
        for(let i = 0; i < this.month-1; i++){
            sumDay += this.panelMonth[i].days
        }
      console.log("SS"+sumDay,day)
      this.day = day - sumDay
      this.CurrentFloatMsg =  this.year+"-" + this.month + "-" + this.day+ " 有效次数:"+
          Math.floor(this.allDays[index].record)
    }
  },
  computed: {
    countRecord(){
      return this.allDays.filter(item => item.record !== 0).length
    }
  }
}
</script>

<style scoped>
.panel {
  margin-top: 20px;
  background: #f1f1f1;
  padding: 10px;
  box-shadow: 0 0 6px -1px rgba(140,146,163,0.5);
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
  transition: background .5s;
}
.right-side .box:hover {
  background: red;
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
  z-index: 1000;
  transition: all 0.3s;
}
.MsgText {
  font-size: 12px;
}
.detailInfo {
  width: 100%;
  display: flex;
  font-size: 12px;
  justify-content: flex-start;
  margin-top: 20px;
}
.recordList {
  display: flex;
}
.recordList .box {
  width: 15px;
  height: 15px;
  border: 1px solid #FFF;
  position: relative;
  margin: 0px 1px;
}
</style>