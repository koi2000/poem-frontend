<template>
  <div id="main" style="width: 600px;height:400px;"></div>
</template>

<script>

import echarts from "echarts/lib/echarts";
import vintage from "@/assets/theme/theme";

let Echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar'); //所需图表
// import vintage from '/src/assets/theme/theme'
export default {
  name: 'BarChart',
  methods:{
    myEcharts(){
      echarts.registerTheme('vintage', vintage) // 注册主题
      // 基于准备好的dom，初始化echarts实例
      var myChart = Echarts.init(document.getElementById('main'),'vintage');

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
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

</style>
