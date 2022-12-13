<template>

  <body>
  <div class="main">
    <div class="header">
      <div class="leftcolumn">
        <div class="doc-title">
          <h1>地理数据</h1>
        </div>

      </div>
      <div class="rightcolumn">
        <div class="animate__animated animate__fadeIn " style="animation-duration: 3s">
          <div class="introductioncol" style="margin-top: 150px">
            <p>中国存在很多的名胜古迹，古代的诗人常常游历山川，借名胜古迹中抒发自己的情感，通过对唐宋诗词数据集中的诗词中出现的名胜古迹数量进行分析，发现<span
                class="fontempa">西湖，庐山，长安，泰山</span>出现的次数较多</p>
            <p>对中国古代各省份的诗人数量进行了统计，数据来源共已收录 42922 位诗人 1074550 首作品。信息按作者籍贯、出生或居住地分布。对其进行可视化分析，分析发现，<span class="fontempa">浙江省</span>的诗人数量最多，达到了5584人，<span
                class="fontempa">江苏省</span>其次，达到了5144人</p>

          </div>
        </div>

        <!--        <div class="introduction">-->
        <!--          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis inventore maxime, quisquam-->
        <!--            iure perspiciatis iste amet voluptates eveniet optio pariatur velit, numquam iusto beatae-->
        <!--            consequatur quae ab nam quod sunt vel labore non dolore fuga accusamus tempora! Laudantium,-->
        <!--            culpa distinctio quis quos sunt tempora maiores explicabo in numquam dolorem ducimus, magni-->
        <!--            incidunt cupiditate possimus officiis id. Ab, aut, consequatur laudantium accusamus tempora-->
        <!--            nostrum laboriosam, sequi aliquid pariatur enim atque cumque provident error vel id odit eos-->
        <!--            impedit ipsam porro sapiente iusto vero est praesentium. Eius omnis labore voluptate earum-->
        <!--            adipisci quas officia iure culpa, ipsam eveniet, aut, veniam ratione odit!</p>-->
        <!--        </div>-->
      </div>

    </div>
    <div id="mapBox">
      <v-header :name="name" :legendArr="legendArr" :myChart="myChart"></v-header>
      <!--    <v-filter :myChart="myChart" v-if="myChart._dom"></v-filter>-->
      <div id="chinaMap"></div>
    </div>

  </div>
  </body>
</template>

<script>

import axios from 'axios'
import echarts from 'echarts'
import china from 'echarts/map/js/china'
import header from '../../components/header/header'
import filter from '../../components/filter/filter'
// require("static/js/theme/final-project-theme-echart")
let Echarts = require('echarts/lib/echarts');
require('echarts/map/js/china'); //所需图表


export default {
  name: "ChinaMap",
  data() {
    return {
      legendArr: [],
      color: this.$store.state.color,
      myChart: {},
      geoCoordMap: {},
      name: '地理数据',
      authorData: {},
      placeData: {}
    }
  },
  components: {
    'v-header': header,
    'v-filter': filter
  },
  mounted() {
    this.getCityData()
    // this.init()
  },
  methods: {
    getCityData() {
      axios.get('static/data/place/allCity.json').then((res) => {
        this.geoCoordMap = res.data
        // this.getMyChart()
        this.$nextTick(() => {
          this.getMyChart()
        })
      })
    },
    init(options) {
      this.myChart = Echarts.init(document.getElementById('chinaMap'), 'vintage')
      this.myChart.setOption(options)
      this.legendArr = options.series
      this.legendArr.forEach((data) => {
        data.selected = true;
      })
      this.$root.charts.push(this.myChart)
      window.addEventListener('resize', function () {
        this.myChart.resize()
      }.bind(this))
    },
    convertData(data) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = this.geoCoordMap[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    },
    getMyChart() {
      // this.init(options)
      axios.get('static/data/place/placeNumbers.json').then((res) => {
        this.placeData = res.data
        axios.get("static/data/place/provinceAuthor.json").then((res) => {
          this.authorData = res.data
          let options = {
            // backgroundColor: '#404a59',
            title: {
              show: false
            },
            tooltip: {
              trigger: 'item',
              formatter: function (params) {
                return params.name + ' : ' + params.value[2];
              }
            },
            legend: {
              show: false
            },
            visualMap: {
              min: 0,
              max: 6000,
              left: 0,
              bottom: 50,
              splitNumber: 10,
              inRange: {
                color: ['#255B78', '#2A7484', '#2F9696', '#3BBCB0', '#51D4EB']
              },
              textStyle: {
                color: '#213d3d'
              }
            },
            geo: {
              map: 'china',
              label: {
                emphasis: {
                  show: false
                }
              },
              zoom: 1,
              top: 50,
              itemStyle: {
                normal: {
                  color: '#3c4247',
                  opacity: 0.6,
                  borderColor: 'rgba(255, 255, 255, 0.35)'
                },
                emphasis: {
                  color: '#2a333d'
                }
              }
            },
            series: [{
              name: '名胜古迹',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbolSize: function (val) {
                // return val[2] / 6;
                return 20;
              },
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                emphasis: {
                  borderColor: '#fff',
                  borderWidth: 1
                }
              },
              data: this.convertData(this.placeData)
              // data: res.data
            },
              {
                name: '诗人数据',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: function (val) {
                  return 20;
                },
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: false
                  }
                },
                itemStyle: {
                  emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                  }
                },
                data: this.convertData(this.authorData)
              },
            ]
          }
          this.init(options)
        })
      });
    },
  }
}
</script>

<style scoped>
.fontempa {
  color: #bd171e;
  font-weight: bold;
}

#chinaMap {
  width: 630px;
  height: 400px;
  /*justify-content: center;*/
  /*align-items: center;*/

  /*position: absolute;*/
  /*left: 500px;*/
  /*flex: 3;*/
  /*display: flex;*/
  /*flex-direction: column;*/
}

#mapBox {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.introductioncol {
  flex: 1;
}

.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  /*flex-direction: column;*/
  /*z-index: -999;*/
  /*top: 0;*/
}

</style>
