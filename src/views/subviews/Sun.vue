<template>
  <div class="animate__animated animate__fadeIn " style="animation-duration: 3s">
  <body>
  <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
<!--  <div style="margin-top: 10% ">-->
  <div class="main2">
    <div class="leftcolumn2" >
      <div id="main" style="width: 80%;height:800px;margin-left: 10%;float: left "></div>
    </div>
    <div class="header2" >
      <div class="uprow">
<!--    <div id="title" style="width: 1800px;height: 100px;align-content: center">-->
        <div style="width: 500px; margin-right: 40%;margin-left: -20%;margin-top: 20%">
    <h1>诗词聚类</h1>
        </div>
    </div>
      <div class="downrow">
  <div id="value" style="width: 100%;height: 800px;">

    <div style="width: 15%;float: left"></div>

    <div id="text" style="margin-top: 17% ;margin-right: 20%">
      <div class="up">
      <p id="demo0" style="font-size: 20px">
        中国古典诗词中的情感美是古典诗词内涵美的一项重要内容。这种情感美主要包括五种情感:即深沉的爱国情、浓烈的思乡情、执着的男女情、美好的朋友情和温馨的骨肉情。中国古典诗词中所蕴含的这种崇高伟大的情感美，对于我们今天建立幸福、繁荣、稳定的和谐社会，具有十分重要的现实意义。
      </p>
    </div>
      <div class="down">
      <img id="demo1" src="static/html/visual/img/vn.png" style="height: 500px;width: 600px;float: left">
      </div>
    </div>
  </div>
    </div>

  </div>

  </div>
  </body>
  </div>
</template>

<script>
// import "../../assets/css/lrtheme.css";
import * as echarts from "../../assets/js/py/echarts.min";
export default {
  name: "Sun",
  data() {
    return {}
  },
  methods: {
    sun_init() {
      var myChart = echarts.init(document.getElementById('main'));

      var colorMap = [
        "#800500",
        "#dcd1c4",
        "#b28b8b",
        "#9f6d70",
        "#9eb6c3",
        "#c4d9c2",
        "#b2bcc7",
        "#ab9293",
        "#ada585"
      ]


      var data = [{
        value: 20,
        name: "喜",
        itemStyle: {
          // color:"rgba(13,180,218,0.78)"
          color: "#800500"
        },
        children: [{
          name: "情爱婚姻之情",
          value: 12,
          itemStyle: {
            color: "#dcd1c4"
          }
        }, {
          name: "闲适恬淡之情",
          value: 8,
          itemStyle: {
            color: "#b28b8b"
          }
        }]
      },
        {
          value: 15,
          name: "哀",
          itemStyle: {
            color: "#9f6d70"
          },
          children: [{
            name: "悲伤",
            value: 9,
            itemStyle: {
              color: "#9eb6c3",
            },
            children: [{
              name: "惆怅送别之情",
              value: 5,
              itemStyle: {
                color: "#c4d9c2",
              }
            }, {
              name: "思乡怀远之情",
              value: 4,
              itemStyle: {
                color: "#b2bcc7",
              }
            }
            ]
          },
            {
              name: "抒怀",
              value: 6,
              itemStyle: {
                color: "#ab9293",
              },
              children: [{
                name: "咏物感遇之情",
                value: 4,
                itemStyle: {
                  color: "#ada585"
                }
              }, {
                name: "边塞行役之情",
                value: 2,
                itemStyle: {
                  color: "rgba(218,207,5,0.78)"
                }
              }]
            }]
        }
      ];
      var option = {
        // visualMap: {
        //   type: 'continuous',
        //   min: 0,
        //   max: 20,
        //   inRange: {
        //     color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
        //   },
        // },
        series: {
          type: 'sunburst',
          // highlightPolicy: 'ancestor',
          data: data,
          radius: [60, '90%'],
          itemStyle: {
            borderRadius: 7,
            borderWidth: 2,
          },
          label: {
            rotate: 'radial',
            textStyle: {
              fontSize: 20,
              fontFamily: "kxfont",
            }
          }
        }
      };


      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      myChart.on('mouseover', function (param) {
        var img = document.getElementById("demo1")
        if (param.name === "闲适恬淡之情") {
          img.src = "static/html/visual/img/v0.png"
          document.getElementById("demo0").innerHTML = "古人超于现实之外，寄情山水，流连田园。所写之诗或表达清闲恬淡的心情，或表达对隐居生活的向往。五柳、东篱、三径便成为象征归隐之情的暗号。例如：陶渊明的《饮酒》，诗句：采菊东篱下，悠然见南山。"
        } else if (param.name === "情爱婚姻之情") {
          img.src = "static/html/visual/img/v1.png"
          document.getElementById("demo0").innerHTML = "对爱情的渴望，夫妻间的悲欢离合，宫怨闺怨，成为人们无法回避的情感。莲、红豆、连理枝、比翼鸟便成为表达婚恋之情的暗号。例如： 白居易的《长恨歌》，诗句：在天愿做比鸟，在地愿为连理枝"
        } else if (param.name === "惆怅送别之情") {
          img.src = "static/html/visual/img/v2.png"
          document.getElementById("demo0").innerHTML = "古人喜宴游交友，然天下无不散之筵席，朋友间不免酬唱赠答、寄友送别，成为诗人抒发情感之由。杨柳、长亭、南浦、酒便成为解读送别之情的暗号。例如：柳永的《雨霖铃》，诗句：杨柳岸，晓风残月。"
        } else if (param.name === "思乡怀远之情") {
          img.src = "static/html/visual/img/v3.png"
          document.getElementById("demo0").innerHTML = "建功立业，志在四方是古人的胸襟，然而久别家乡，远离亲人之时，难免怅然，加之古时交通不便，联络缓慢，思乡怀远之情便能绵延千里。月亮、鸿雁、双鲤、捣衣、莼羹鲈脍便成为传递思乡之情的暗号。例如：孟浩然的《早寒有怀》，诗句：木落雁南度，北风江上寒。"
        } else if (param.name === "咏物感遇之情") {
          img.src = "static/html/visual/img/v4.png"
          document.getElementById("demo0").innerHTML = "古人有感于自然界各色景物的特性而有感于己，或抒发自己凄凉伤感、孤独寂寞的感叹；或表达自己怀才不遇、报国无门却坚贞不屈的感慨。梧桐、芭蕉、流水、猿猴、杜鹃、斜阳、松竹梅菊、黍离、历史事件、名胜古迹便成为寄托感遇之情的暗号。例如：王安石的《梅》，诗句：墙角数枝梅，凌寒独自开。"
        } else if (param.name === "边塞行役之情") {
          img.src = "static/html/visual/img/v5.png"
          document.getElementById("demo0").innerHTML = "古人常漫游天下，遍访名山大川、边塞关隘、通都大邑等。有感于兹或表达对战争的厌恶，或表达对和平的向往，或抒发忧国忧民的情怀。投笔、长城、楼兰、柳营、请缨、羌笛便成为见证行役之情的暗号。例如：王昌龄的《出塞》，诗句：秦时明月汉时关，万里长征人未还。"
        } else if (param.name === "喜") {
          img.src = "static/html/visual/img/v00.png"
        } else if (param.name === "悲伤") {
          img.src = "static/html/visual/img/v01.png"
        } else if (param.name === "抒怀") {
          img.src = "static/html/visual/img/v02.png"
        } else if (param.name === "悲") {
          img.src = "static/html/visual/img/v03.png"
        }
      });
      myChart.on('mouseout', function (param) {
        var img = document.getElementById("demo1")
        img.src = "static/html/visual/img/vn.png"
        document.getElementById("demo0").innerHTML = "中国古典诗词中的情感美是古典诗词内涵美的一项重要内容。这种情感美主要包括五种情感:即深沉的爱国情、浓烈的思乡情、执着的男女情、美好的朋友情和温馨的骨肉情。中国古典诗词中所蕴含的这种崇高伟大的情感美，对于我们今天建立幸福、繁荣、稳定的和谐社会，具有十分重要的现实意义。"
      });
    }
  },
  mounted() {
    this.sun_init();
  }
}
</script>

<style >
@import "../../assets/css/lrtheme.css";
.header2 {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* border: 1em;
  border-style:solid; */
  /*justify-content: center;*/
  /*align-items: center;*/
  /*margin-top: -10%;*/
  /*height: auto;*/
  /* margin: auto; */
}
.uprow{
  flex:1;
  width: 500px;
}
.downrow{
  flex:1;
  display: flex;
  /*margin-top: -16%;*/
}

.up{

  flex:1
}
.down{

  flex:1
}
</style>
