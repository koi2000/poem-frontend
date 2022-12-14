<template>
  <div>

    <div class="main2">

      <div class="header2">
        <div class="leftcolumn2">
          <div class="animate__animated animate__fadeInDown">

            <div class="doc-title">
              <h1>情感分析</h1>
          </div>


          </div>
          <div class="animate__animated animate__fadeInDown">
            <p style="color: #7a7a7a ; width: 500px;margin-top: -30px; margin-left:100px;text-align: center">昔人论诗词，有景语、情语之别，不知一切景语，皆情语也。</p>
            <p style="color: #7a7a7a ; width: 500px;margin-top: -10px; margin-left:100px;text-align: right">——王国维《人间词话》</p>
          </div>
        </div>
        <div class="rightcolumn2">
          <div class="animate__animated animate__fadeIn " style="animation-duration: 3s">
          <div class="introductioncol">

            <p>古诗中的情感可以大致分为<span class="fontempa">喜、悲、怒、豪</span>四大类，通过对唐宋诗词数据集中的诗词进行分析，发现春夏之喜、秋冬之悲、晚秋之豪、深冬之怒是典型的季节情感表现。</p>

            <p><span class="fontempa">边塞军旅诗</span>常常透露出诗人建功立业的热情，又不乏远离亲人的离情别恨。<br>

              <span class="fontempa">写景咏物诗</span>常常托物言志，表达诗人高洁的志向，亦可借景抒怀，使情景交融。<br>

              <span class="fontempa">赠友送别诗</span>常寄依依惜别之情，却也不乏豪迈洒脱之作，表达对友人的美好祝愿。<br>

              <span class="fontempa">咏史怀古诗</span>多痛惜先贤、思考历史，亦有忧国伤时、怀古伤今之作。<br>

              <span class="fontempa">羁旅行役诗</span>，充满报国无门的孤苦愤恨，也蕴藏感念亲友的思乡之情。<br>

              <span class="fontempa">山水田园诗</span>表达了热爱自然、向往自由之意，亦有渴望归隐的闲适淡泊之心。<br>

            </p>
          </div>
          </div>
        </div>

      </div>


      <div class="leftcolumn2" style="margin:auto">
        <div id="a00862844d68469685e0d9aaea4ed7d0" class="chart-container" style="width:100%; height:800px;"></div>
      </div>
      <!--      <div class="header" style="margin:auto">-->
      <!--        <div id="5d4cf58ea685498a91237dceaee927c5" ref="wordcloud" class="chart-container" style="width:900px; height:500px;"></div>-->
      <!--      </div>-->
<!--      <div ref="wordcloud" class="wordcloud"></div>-->

    </div>
  </div>
</template>

<script>
import 'animate.css';
import * as echarts from "../../assets/js/echarts.min.js"
// import "../../assets/js/py/echarts.min.js"
// import "../../assets/js/py/echarts-wordcloud.min.js"
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
import WordCloud from "@/views/subviews/WordCloud";
import "../../assets/css/theme.css";
import "../../assets/css/lrtheme.css";
export default {
  name: "SentAnalysisSankey",
  components: {WordCloud},
  methods: {
    init1() {
      var chart_a00862844d68469685e0d9aaea4ed7d0 = echarts.init(
          document.getElementById('a00862844d68469685e0d9aaea4ed7d0'), 'white', {renderer: 'canvas'});
      var option_a00862844d68469685e0d9aaea4ed7d0 = {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "color": [
          "#800500",
          "#dcd1c4",
          "#b28b8b",
          "#9f6d70",
          "#9eb6c3",
          "#c4d9c2",
          "#b2bcc7",
          "#ab9293",
          "#ada585"
        ],

          textStyle: {
            fontFamily: 'kxfont'
          },
        "series": [
          {
            "type": "sankey",
            "name": "sankey",
            "data": [
              {
                "name": "\u559c Pleasure"
              },
              {
                "name": "\u60b2 Sadness"
              },
              {
                "name": "\u6012 Anger"
              },
              {
                "name": "\u8c6a Pride"
              },
              {
                "name": "\u6625 Spring"
              },
              {
                "name": "\u590f Summer"
              },
              {
                "name": "\u79cb Autumn"
              },
              {
                "name": "\u51ac Winter"
              },
              {
                "name": "\u82b3\u8349"
              },
              {
                "name": "\u6843\u82b1"
              },
              {
                "name": "\u7ea2\u8c46"
              },
              {
                "name": "\u4e1c\u98ce"
              },
              {
                "name": "\u9152"
              },
              {
                "name": "\u6708"
              },
              {
                "name": "\u68a7\u6850"
              },
              {
                "name": "\u675c\u9e43"
              },
              {
                "name": "\u6241\u821f"
              },
              {
                "name": "\u733f\u557c"
              },
              {
                "name": "\u51ed\u680f"
              },
              {
                "name": "\u94c1\u9a91"
              },
              {
                "name": "\u6ce2\u6d9b"
              },
              {
                "name": "\u5c71\u5ce6"
              },
              {
                "name": "\u6c5f\u6c34"
              },
              {
                "name": "\u957f\u57ce"
              }
            ],
            "links": [
              {
                "source": "\u6625 Spring",
                "target": "\u559c Pleasure",
                "value": 321
              },
              {
                "source": "\u590f Summer",
                "target": "\u559c Pleasure",
                "value": 159
              },
              {
                "source": "\u79cb Autumn",
                "target": "\u559c Pleasure",
                "value": 34
              },
              {
                "source": "\u79cb Autumn",
                "target": "\u60b2 Sadness",
                "value": 301
              },
              {
                "source": "\u51ac Winter",
                "target": "\u60b2 Sadness",
                "value": 213
              },
              {
                "source": "\u79cb Autumn",
                "target": "\u6012 Anger",
                "value": 99
              },
              {
                "source": "\u51ac Winter",
                "target": "\u6012 Anger",
                "value": 130
              },
              {
                "source": "\u6625 Spring",
                "target": "\u8c6a Pride",
                "value": 132
              },
              {
                "source": "\u590f Summer",
                "target": "\u8c6a Pride",
                "value": 102
              },
              {
                "source": "\u79cb Autumn",
                "target": "\u8c6a Pride",
                "value": 159
              },
              {
                "source": "\u51ac Winter",
                "target": "\u8c6a Pride",
                "value": 98
              },
              {
                "source": "\u559c Pleasure",
                "target": "\u82b3\u8349",
                "value": 36
              },
              {
                "source": "\u559c Pleasure",
                "target": "\u6843\u82b1",
                "value": 39
              },
              {
                "source": "\u559c Pleasure",
                "target": "\u7ea2\u8c46",
                "value": 17
              },
              {
                "source": "\u559c Pleasure",
                "target": "\u4e1c\u98ce",
                "value": 21
              },
              {
                "source": "\u559c Pleasure",
                "target": "\u9152",
                "value": 36
              },
              {
                "source": "\u60b2 Sadness",
                "target": "\u6708",
                "value": 53
              },
              {
                "source": "\u60b2 Sadness",
                "target": "\u68a7\u6850",
                "value": 32
              },
              {
                "source": "\u60b2 Sadness",
                "target": "\u675c\u9e43",
                "value": 36
              },
              {
                "source": "\u60b2 Sadness",
                "target": "\u6241\u821f",
                "value": 15
              },
              {
                "source": "\u60b2 Sadness",
                "target": "\u733f\u557c",
                "value": 22
              },
              {
                "source": "\u6012 Anger",
                "target": "\u51ed\u680f",
                "value": 22
              },
              {
                "source": "\u6012 Anger",
                "target": "\u94c1\u9a91",
                "value": 41
              },
              {
                "source": "\u6012 Anger",
                "target": "\u6ce2\u6d9b",
                "value": 16
              },
              {
                "source": "\u8c6a Pride",
                "target": "\u5c71\u5ce6",
                "value": 53
              },
              {
                "source": "\u8c6a Pride",
                "target": "\u6c5f\u6c34",
                "value": 69
              },
              {
                "source": "\u8c6a Pride",
                "target": "\u957f\u57ce",
                "value": 36
              }
            ],
            "left": "5%",
            "top": "5%",
            "right": "20%",
            "bottom": "10%",
            "nodeWidth": 20,
            "nodeGap": 8,
            "nodeAlign": "justify",
            "layoutIteration": 32,
            "orient": "vertical",
            "draggable": true,
            "focusNodeAdjacency": "allEdges",
            "label": {
              "show": true,
              "position": "top",
              "margin": 8
            },
            "lineStyle": {
              "show": true,
              "width": 1,
              "opacity": 0.2,
              "curveness": 0.5,
              "type": "solid",
              "color": "source"
            }
          }
        ],
        /*"legend": [
            {
                //"data": [
                //    "sankey"
                //],
                //"selected": {
                //    "sankey": true
                //},
                "show": true,
                "padding": 5,
                "itemGap": 10,
                "itemWidth": 25,
                "itemHeight": 14
            }
        ],*/
        "tooltip": {
          "show": true,
          "trigger": "item",
          "triggerOn": "mousemove",
          "axisPointer": {
            "type": "line"
          },
          "showContent": true,
          "alwaysShowContent": false,
          "showDelay": 0,
          "hideDelay": 100,
          "textStyle": {
            "fontSize": 14
          },
          "borderWidth": 0,
          "padding": 5
        },
        "title": [
          {
            "text": "",
            "padding": 5,
            "itemGap": 10
          }
        ]
      };
      chart_a00862844d68469685e0d9aaea4ed7d0.setOption(option_a00862844d68469685e0d9aaea4ed7d0);
      // window.onresize = function () {
      //   myChart.resize();
      // };
    },
  },
  mounted() {
    console.log("页面创建")
    this.init1();
  }
}
</script>

<style >

</style>
