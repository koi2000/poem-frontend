<!--<style lang="stylus" scoped>-->
<!--.chinaMap-->
<!--  //background url('../../assets/bg.jpg') no-repeat-->
<!--  background-size 100% 100%-->
<!--  .main-->
<!--    height calc(100% - 120px)-->
<!--    width 100%-->
<!--    transition all 0.5s linear-->
<!--</style>-->

<template>
  <div>
    <v-header :name="name" :legendArr="legendArr" :myChart="myChart"></v-header>
    <!--    <v-filter :myChart="myChart" v-if="myChart._dom"></v-filter>-->
    <div id="chinaMap" style="width: 630px;height:400px;"></div>
  </div>
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
      authorData:{},
      placeData:{}
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
      axios.get()
      axios.get('static/data/place/placeNumbers.json').then((res) => {
        this.placeData = res.data
        axios.get("static/data/place/provinceAuthor.json").then((res)=>{
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

</style>
