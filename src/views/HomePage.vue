<template>

  <body>
  <div class="main">

<!--    <MainPage/>-->

<!--    <EmotionPlace/>-->

    <div class="header">
      <div class="rightcolumn">
        <div class="doc-title">
          <h1>文案没想好555</h1>
        </div>
      </div>
      <div class="leftcolumn">
        <div class="introduction">
          <p>
            《从百草园到三味书屋》是鲁迅于1926年写的一篇童年妙趣生活的回忆性散文，此文被收入《朝花夕拾》。全文描述了色调不同，情韵各异的两大景片：百草园和三味书屋。作者写百草园，以“乐”为中心，以简约生动的文字，描绘了一个奇趣无穷的儿童乐园，其间穿插“美女蛇”的传说和冬天雪地捕鸟的故事，动静结合，详略得当，趣味无穷。三味书屋则是一个完全不同的世界，作者逼真地写出了三味书屋的陈腐味，说它是“全城中称为最严厉的书塾”，儿童在那里受到规矩的束缚。但作者并未将三味书屋写得死气沉沉，而是通过课间学生溜到后园嬉耍，老私塾先生在课堂上入神读书学生乘机偷乐两个小故事的叙述，使三味书屋充满了谐趣，表现了儿童不可压抑的快乐天性。该散文入选2018年版初中语文，人民教育出版社七年级（上册）。
          </p>
        </div>
      </div>


    </div>
    <div class="footer">
      <div id="chart3" class="chart1"></div>
      <div id="chart4" class="chart2"></div>
    </div>

  </div>
  </body>
</template>

<script>
import MainPage from "@/views/MainPage";
import vintage from '/src/assets/theme/theme'
import EmotionPlace from "@/views/subviews/EmotionPlace";
import "../assets/css/theme.css"
import * as echarts from "../assets/js/echarts.min.js"
import Test from "@/views/subviews/test";
import WordCloud from "@/views/subviews/WordCloud";
import D3Cloud from "@/views/D3Cloud";


export default {
  name: "HomePage",
  components: {D3Cloud, WordCloud, Test, EmotionPlace, MainPage},
  methods: {
    init1() {
      var myChart = echarts.init(document.getElementById('chart3'), 'vintage');

      // 指定图表的配置项和数据
      //     var chartDom = document.getElementById('main');
      // var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {}
          }
        },
        // legend: {
        //   data: ['’]
        // },
        singleAxis: {
          top: 50,
          bottom: 50,
          axisTick: {},
          axisLabel: {},
          type: 'time',
          axisPointer: {
            animation: false,
            label: {
              show: false
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              type: 'dashed',
              opacity: 0.2
            }
          }
        },
        series: [
          {
            type: 'themeRiver',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#568595' // 0% 处的颜色
                  },

                  // {
                  //   offset: 0.25,
                  //   color: '#B9B1A7' // 0% 处的颜色
                  // },
                  {
                    offset: 0.492,
                    color: 'rgba(185,177,169,0.4)' // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: '#C1B9B6 ' // 50% 处的颜色
                  },
                  {
                    offset: 0.508,
                    color: 'rgba(128, 128, 128,0.1)' // 0% 处的颜色
                  },
                  // {
                  //   offset: 0.75,
                  //   color: '#B9B1A7' // 0% 处的颜色
                  // },
                  {
                    offset: 1,
                    color: 'rgba(92,130,151,0.3)' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.4)'
              }
            },
            data: [
              ['0300/01/01', 8020, ''],
              ['0500/01/01', 12586, ''],
              ['0600/01/01', 6170, ''],
              ['0800/01/01', 50195, ''],
              ['1000/01/01', 120195, ''],
              ['1127/01/01', 287114, ''],
              ['1250/01/01', 29058, ''],
              ['1300/01/01', 47375, ''],
              ['1400/01/01', 25736, ''],
              ['1450/01/01', 166957, ''],
              ['1500/01/01', 236957, ''],
              ['1650/01/01', 27700, ''],
              ['1750/01/01', 90089, ''],
              ['1900/01/01', 20367, ''],
              ['1920/01/01', 28419, ''],
              ['1970/01/01', 28219, ''],

              // ['1150/01/01', 19058, ''],


              // ['-0500/01/01', 570, ''],
              // ['-0100/01/01', 363, '']
            ]
          }
        ]
      };

      myChart.setOption(option);
      window.onresize = function () {
        myChart.resize();
      };
    },
    init2() {
      var myChart = echarts.init(document.getElementById('chart4'), 'vintage');
      // var svgimg ="M545.41,233.69L338.2,231.5l46.98-7.98c4.21-0.72,6.49-4.46,4.64-7.64L288.17,41.1,c-3.04-5.22-12.63-3.45-12.63,2.33v39.75c-0.23,0.21-0.45,0.43-0.66,0.69L182.65,197.3c-1.31,1.61-1.41,3.66-0.27,5.35l18.56,27.4,l-114.53-1.21c-5.29-0.06-7.76,5.77-3.73,8.81c13.79,10.41,29.63,22.41,57.95,32.13c65.91,22.64,135.31,21.12,175.98,20.21,c96.67-2.17,176.66-25.51,231.01-46.72C553.18,241.11,551.49,233.75,545.41,233.69z M275.53,230.84l-44.25-0.47,c3.92-16.36,8.12-33.73,10.98-42.14c10.89-32.07,21.8-56.65,33.28-79.03V230.84z"
      // 指定图表的配置项和数据

      var svgimg = "path://M537.75,337.72C483.39,316.51,403.4,293.16,306.74,291c-40.67-0.91-110.07-2.43-175.98,20.21,c-28.32,9.73-44.15,21.72-57.95,32.13c-4.02,3.04-1.55,8.87,3.73,8.81l114.53-1.21l-18.56,27.4c-1.14,1.69-1.04,3.74,0.27,5.35,l92.23,113.44c0.2,0.25,0.43,0.48,0.66,0.69v39.75c0,5.78,9.59,7.55,12.63,2.33l101.66-174.78c1.85-3.17-0.43-6.92-4.64-7.64,l-46.98-7.98l207.21-2.19C541.61,347.25,543.31,339.89,537.75,337.72z M265.66,471.79c-11.48-22.38-22.39-46.97-33.28-79.03,c-2.85-8.41-7.05-25.78-10.98-42.14l44.25-0.47V471.79z M545.41,233.69L338.2,231.5l46.98-7.98c4.21-0.72,6.49-4.46,4.64-7.64L288.17,41.1,c-3.04-5.22-12.63-3.45-12.63,2.33v39.75c-0.23,0.21-0.45,0.43-0.66,0.69L182.65,197.3c-1.31,1.61-1.41,3.66-0.27,5.35l18.56,27.4,l-114.53-1.21c-5.29-0.06-7.76,5.77-3.73,8.81c13.79,10.41,29.63,22.41,57.95,32.13c65.91,22.64,135.31,21.12,175.98,20.21,c96.67-2.17,176.66-25.51,231.01-46.72C553.18,241.11,551.49,233.75,545.41,233.69z M275.53,230.84l-44.25-0.47,c3.92-16.36,8.12-33.73,10.98-42.14c10.89-32.07,21.8-56.65,33.28-79.03V230.84z"
      var option = {
        dataset: {
          source: [[1127, 0, 13.205487820150566, 9446, '宋'],
            [1500, 0, 12.116018993325094, 4439, '明'],
            [1750, 0, 13.11504365016171, 8872, '清'],
            [800, 0, 11.417852514885897, 2736, '唐'],
            [1300, 0, 10.239598529249124, 1209, '元'],
            [1920, 0, 9.625708843064466, 790, '近现代'],
            [1970, 0, 7.467605550082998, 177, '当代'],
            [1650, 0, 7.459431618637297, 176, '明末清初'],
            [1400, 0, 6.303780748177103, 79, '元末明初'],
            [1900, 0, 7.129283016944966, 140, '清末民国初'],
            [1150, 0, 5.672425341971495, 51, '宋末元初'],
            [500, 0, 8.761551232444479, 434, '南北朝'],
            [300, 0, 7.971543553950772, 251, '魏晋'],
            [600, 0, 6.392317422778761, 84, '隋'],
          ]
        },
        symbol: svgimg,
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            console.info(params)
            return (
                '作者数量：' +
                params.value[3] +
                ' ，朝代：' +
                params.value[4]
            );
          },
          textStyle: {
            fontFamily: 'kxfont'
          }
        },

        emphasis: {
          scale: true,
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.4)'
          }
        },
        visualMap: {
          show: false,
          dimension: 2, // 指向第三列（列序号从 0 开始记，所以设置为 2）。
          min: 2, // 需要给出数值范围，最小数值。
          max: 15, // 需要给出数值范围，最大数值。
          inRange: {
            color: ['rgba(41,45,48, 0.2)', 'rgba(41,45,48, 0.8)'],
            // 气泡尺寸：5 像素到 60 像素。
            symbolSize: [10, 33]
          }
        },
        xAxis: {
          show: false,
          min: 300,
          max: 1970
        },
        yAxis: {
          show: false,
          min: -10,
          max: 10,
        },
        series: {
          type: 'scatter'
        }
      }
      myChart.setOption(option);
      window.onresize = function () {
        myChart.resize();
      };
    }
  },
  mounted() {
    echarts.registerTheme("vintage", vintage)
    this.init1();
    this.init2();
  }
}
</script>


<style>

.main {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  flex-direction: column;
  z-index: -999;
  top: 0;
}

.header {
  flex: 1;
  display: flex;
  /*flex-direction: row;*/
  /* border: 1em;
  border-style:solid; */
  justify-content: center;
  align-items: center;
  /* margin: auto; */
}

.footer {
  flex: 1;
  display: flex;
  position: absolute;
  bottom: 0;
  /*z-index: -99;*/
  /*flex-direction: row;*/
  /* border: 1em;
  border-style:solid; */
  /* margin: auto; */
}

h1 {
  font-size: 60px;
  text-align: center;
}

p {
  font-size: 18px;
}

.footer {
  flex: 1;
  /* display: flex;
  flex-direction: row; */
  position: relative;
  /*border: 1em;*/
  /*border-style: solid;*/
  /* margin: auto; */
}

.chart1 {
  position: absolute;
  width: 90%;
  height: 400px;
  margin-right: 5%;
  margin-left: 5%;
}

.chart2 {
  position: absolute;
  margin-top: 0.3%;
  width: 100%;
  height: 400px;
}

</style>

<!--<style scoped>-->

<!--@font-face {-->
<!--  font-family: 'kxfont';-->
<!--  src: url('../assets/fonts/康熙字典体完整版本.TTF');-->
<!--}-->

<!--* {-->
<!--  font-family: 'kxfont';-->
<!--}-->

<!--body {-->
<!--  background-color: #F6F6F4;-->
<!--  background-image: url("https://www.transparenttextures.com/patterns/rice-paper-2.png");-->
<!--  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */-->
<!--}-->

<!--.main {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--}-->

<!--.header {-->
<!--  flex: 1;-->
<!--  display: flex;-->
<!--  flex-direction: row;-->
<!--  /* border: 1em;-->
<!--border-style:solid; */-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  /* margin: auto; */-->
<!--}-->

<!--.footer {-->
<!--  flex: 1;-->
<!--  display: flex;-->
<!--  flex-direction: row;-->
<!--  /* border: 1em;-->
<!--  border-style:solid; */-->
<!--  /* margin: auto; */-->
<!--}-->

<!--/* Left column */-->
<!--.leftcolumn {-->
<!--  flex: 1;-->

<!--  /* margin: auto; */-->
<!--}-->

<!--/* Right column */-->
<!--.rightcolumn {-->
<!--  flex: 1;-->

<!--  /* margin: auto; */-->
<!--}-->

<!--h1 {-->
<!--  font-size: 60px;-->
<!--  text-align: center;-->
<!--}-->

<!--p {-->
<!--  font-size: 18px;-->
<!--}-->

<!--.introduction {-->
<!--  margin-top: 10%;-->
<!--  margin-bottom: 5%;-->
<!--  margin-right: 20%;-->
<!--  margin-left: 10%;-->
<!--}-->

<!--.doc-title {-->
<!--  margin-top: 10%;-->
<!--  margin-bottom: 5%;-->
<!--  margin-right: 10%;-->
<!--  margin-left: 30%;-->
<!--}-->

<!--.chart {-->
<!--  width: 100%;-->
<!--  height: 400px;-->
<!--}-->

<!--</style>-->
