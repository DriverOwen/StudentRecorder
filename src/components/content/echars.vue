<template>
  <div class="echarts">
    <div class="chart" ref="myEchartPillar" >
    </div>
  </div>
</template>
<script>
export default {
  name: 'Echarts',
  methods:{
    myEcharts(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.myEchartPillar);

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '每月学习情况'
        },
        tooltip: {},
        color: ["#9be9a8"],
        legend: {
          data:['有效次数']
        },
        grid: {
          show: true,
          //grid 组件离容器左侧的距离。
          left: "3%",
          //grid 组件离容器右侧的距离。
          right: "4%",
          //grid 组件离容器下侧的距离。
          bottom: "3%",
          //grid 区域是否包含坐标轴的刻度标签。true这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件。
          containLabel: true,
          // 网格背景色，此配置项生效的前提是，设置了 show: true
          backgroundColor: "#E7F1F5"
        },
        xAxis: {
          data: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
        },
        yAxis: {},
        series: [{
          name: '次数',
          type: 'bar',
          data: [1, 20, 36, 10, 10, 20,20,30,15,1,8,20]
        }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.myEcharts();
  }
}
</script>
<style>
.echarts {
  margin: 20px 0;
}
.chart {
  width: 100%;
  height: 300px;
}

</style>