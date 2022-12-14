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

            <p>边塞诗常见意象包含<span class="fontempa">自然景物，战事器具，地域关隘</span>等。
            典型的有：大漠、长烟、落日、孤城；旌旗、烽火、羌笛；玉门关、轮台、楼兰等。<br>
              山水田园诗采用<span class="fontempa">动静结合、点面结合、白描、反衬</span>等多种手法描写自然景色。
              常见的意象有溪水、山石、松林、野老、柴门、桑麻、南亩、五柳、明月、渔歌等。<br>
              赠别诗，按照情感色彩鲜明地分成两派：<span class="fontempa">凄清感伤</span>之别和<span class="fontempa">清新乐观</span>之别。
              常见的意象有杨柳、杨花、柳絮、长亭、灞桥、江水、春草等。<br>
            </p>
          </div>
          </div>
        </div>

      </div>

      <div class="leftcolumn2" style="margin:auto">
        <div class="animate__animated animate__fadeIn " style="animation-duration: 1s">

        <div id="6dfb6e046ebb4dc3aacd6de256b615bd" class="chart-container" style="width:100%; height:800px;"></div>
        </div>
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
  name: "EmotionPlace",
  components: {WordCloud},

  methods: {
    init2() {
      var chart_6dfb6e046ebb4dc3aacd6de256b615bd = echarts.init(
          document.getElementById('6dfb6e046ebb4dc3aacd6de256b615bd'), 'white', {renderer: 'canvas'});
      var option_6dfb6e046ebb4dc3aacd6de256b615bd = {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,

        textStyle: {
          fontFamily: 'kxfont'
        },
        "color": [
          "#eab7b5",
          "#8eb0c7",
          "#85bbc2",
          "#d2aea1",
          "#b2d3bf",
          "#f1cf9a",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c7d0d9",
          "#eebbc3",
          "#b0889a",
          "#c2a693",
          "#d7b19c",
          "#eac3a6",
          "#7f8ea6",
          "#7173a8",
          "#918c6c",
          "#959d7a",
          "#6d8346",
          "#a28b8b",
          "#839a89",
          "#a8a1b7",
          "#918597"
        ],
        "series": [
          {
            "type": "sunburst",
            "data": [
              {
                "name": "\u5c71\u6c34\n\u7530\u56ed\u8bd7",
                "itemStyle": {
                  "color": "#bda9b2"
                },
                "children": [
                  {
                    "name": "\u70ed\u7231\u81ea\u7136 \u5411\u5f80\u81ea\u7531",
                    "value": 1,
                    "itemStyle": {
                      "color": "#93767c"
                    }
                  },
                  {
                    "name": "\u6e34\u671b\u5f52\u9690 \u95f2\u9002\u6de1\u6cca",
                    "itemStyle": {
                      "color": "#d2aab7"
                    },
                    "children": [
                      {
                        "name": "\u4e1c\u7bf1",
                        "value": 1,
                        "itemStyle": {
                          "color": "#e7c8a2"
                        }
                      },
                      {
                        "name": "\u4e94\u67f3",
                        "value": 1,
                        "itemStyle": {
                          "color": "#cec7c8"
                        }
                      },
                      {
                        "name": "\u9e64",
                        "value": 1,
                        "itemStyle": {
                          "color": "#f6ecc1"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "name": "\u8fb9\u585e\n\u519b\u65c5\u8bd7",
                "itemStyle": {
                  "color": "#946a6c"
                },
                "children": [
                  {
                    "name": "\u5efa\u529f\u7acb\u4e1a \u62a5\u6548\u7956\u56fd",
                    "itemStyle": {
                      "color": "#5e3d3f"
                    },
                    "children": [
                      {
                        "name": "\u8fb9\u5173",
                        "value": 1,
                        "itemStyle": {
                          "color": "#4f383e"
                        }
                      },
                      {
                        "name": "\u94c1\u9a91",
                        "value": 1,
                        "itemStyle": {
                          "color": "#708291"
                        }
                      },
                      {
                        "name": "\u65cc\u65d7",
                        "value": 1,
                        "itemStyle": {
                          "color": "#6b6d94"
                        }
                      },
                      {
                        "name": "\u70fd\u706b",
                        "value": 1,
                        "itemStyle": {
                          "color": "#9a817b"
                        }
                      }
                    ]
                  },
                  {
                    "name": "\u79bb\u60c5\u522b\u6068 \u5f81\u58eb\u4e61\u6101",
                    "itemStyle": {
                      "color": "#775c5a"
                    },
                    "children": [
                      {
                        "name": "\u7fbd\u4e66",
                        "value": 1,
                        "itemStyle": {
                          "color": "#735156"
                        }
                      },
                      {
                        "name": "\u79cb\u6708",
                        "value": 1,
                        "itemStyle": {
                          "color": "#76816f"
                        }
                      }
                    ]
                  },
                  {
                    "name": "\u62a5\u56fd\u65e0\u95e8 \u58ee\u5fd7\u672a\u916c",
                    "itemStyle": {
                      "color": "#7c987d"
                    },
                    "children": [
                      {
                        "name": "\u98ce\u6c99",
                        "value": 1,
                        "itemStyle": {
                          "color": "#bb9892"
                        }
                      },
                      {
                        "name": "\u5b64\u57ce",
                        "value": 1,
                        "itemStyle": {
                          "color": "#818993"
                        }
                      },
                      {
                        "name": "\u91d1\u9f13",
                        "value": 1,
                        "itemStyle": {
                          "color": "#a19a83"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "name": "\u5199\u666f\n\u548f\u7269\u8bd7",
                "itemStyle": {
                  "color": "#777167"
                },
                "children": [
                  {
                    "name": "\u6258\u7269\u8a00\u5fd7 \u5fd7\u5411\u9ad8\u6d01",
                    "itemStyle": {
                      "color": "#e5dbb1"
                    },
                    "children": [
                      {
                        "name": "\u6885\u82b1",
                        "value": 1,
                        "itemStyle": {
                          "color": "#9ea718"
                        }
                      },
                      {
                        "name": "\u677e\u67cf",
                        "value": 1,
                        "itemStyle": {
                          "color": "#94a76f"
                        }
                      },
                      {
                        "name": "\u7af9",
                        "value": 1,
                        "itemStyle": {
                          "color": "#cec19d"
                        }
                      },
                      {
                        "name": "\u83ca\u82b1",
                        "value": 1,
                        "itemStyle": {
                          "color": "#90a26f"
                        }
                      }
                    ]
                  },
                  {
                    "name": "\u501f\u666f\u6292\u60c5 \u60c5\u666f\u4ea4\u878d",
                    "itemStyle": {
                      "color": "#aba380"
                    },
                    "children": [
                      {
                        "name": "\u54c0\u9e3f",
                        "value": 1,
                        "itemStyle": {
                          "color": "#ab859a"
                        }
                      },
                      {
                        "name": "\u6e14\u821f",
                        "value": 1,
                        "itemStyle": {
                          "color": "#b48a86"
                        }
                      },
                      {
                        "name": "\u5f52\u96c1",
                        "value": 1,
                        "itemStyle": {
                          "color": "#8d8877"
                        }
                      },
                      {
                        "name": "\u843d\u82b1",
                        "value": 1,
                        "itemStyle": {
                          "color": "#8f8271"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "name": "\u548f\u53f2\n\u6000\u53e4\u8bd7",
                "itemStyle": {
                  "color": "#6e8c75"
                },
                "children": [
                  {
                    "name": "\u6000\u624d\u4e0d\u9047 \u58ee\u5fd7\u672a\u916c",
                    "value": 1,
                    "itemStyle": {
                      "color": "#aeb08c"
                    }
                  },
                  {
                    "name": "\u75db\u60dc\u5148\u8d24 \u601d\u8003\u5386\u53f2",
                    "value": 1,
                    "itemStyle": {
                      "color": "#929a7b"
                    }
                  },
                  {
                    "name": "\u5fe7\u56fd\u4f24\u65f6 \u6000\u53e4\u4f24\u4eca",
                    "itemStyle": {
                      "color": "#8ea694"
                    },
                    "children": [
                      {
                        "name": "\u91d1\u9675\u6708",
                        "value": 1,
                        "itemStyle": {
                          "color": "#a7ab8e"
                        }
                      },
                      {
                        "name": "\u5927\u6c5f",
                        "value": 1,
                        "itemStyle": {
                          "color": "#7c8d72"
                        }
                      },
                      {
                        "name": "\u540e\u5ead",
                        "value": 1,
                        "itemStyle": {
                          "color": "#a3c4b7"
                        }
                      },
                      {
                        "name": "\u4e91\u9704",
                        "value": 1,
                        "itemStyle": {
                          "color": "#7a9d8d"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "name": "\u8d60\u53cb\n\u9001\u522b\u8bd7",
                "itemStyle": {
                  "color": "#82a7ab"
                },
                "children": [
                  {
                    "name": "\u8c6a\u8fc8\u6d12\u8131 \u7f8e\u597d\u795d\u613f",
                    "itemStyle": {
                      "color": "#9db2b7"
                    },
                    "children": [
                      {
                        "name": "\u6768\u67f3",
                        "value": 1,
                        "itemStyle": {
                          "color": "#8b8c90"
                        }
                      },
                      {
                        "name": "\u6b67\u8def",
                        "value": 1,
                        "itemStyle": {
                          "color": "#beb276"
                        }
                      },
                      {
                        "name": "\u660e\u6708",
                        "value": 1,
                        "itemStyle": {
                          "color": "#deded0"
                        }
                      },
                      {
                        "name": "\u6d41\u6c34",
                        "value": 1,
                        "itemStyle": {
                          "color": "#968e79"
                        }
                      }
                    ]
                  },
                  {
                    "name": "\u60fa\u60fa\u76f8\u60dc \u4f9d\u4f9d\u60dc\u522b",
                    "itemStyle": {
                      "color": "#b2cdd0"
                    },
                    "children": [
                      {
                        "name": "\u5b64\u5e06",
                        "value": 1,
                        "itemStyle": {
                          "color": "#80a89d"
                        }
                      },
                      {
                        "name": "\u957f\u4ead",
                        "value": 1,
                        "itemStyle": {
                          "color": "#def2fd"
                        }
                      },
                      {
                        "name": "\u5bd2\u8749",
                        "value": 1,
                        "itemStyle": {
                          "color": "#7a9bae"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "name": "\u7f81\u65c5\n\u884c\u5f79\u8bd7",
                "itemStyle": {
                  "color": "#be9fa7"
                },
                "children": [
                  {
                    "name": "\u7f81\u65c5\u4e4b\u82e6 \u5fe7\u6101\u51c4\u51c9",
                    "value": 1,
                    "itemStyle": {
                      "color": "#856a70"
                    }
                  },
                  {
                    "name": "\u611f\u5ff5\u4eb2\u53cb \u601d\u4e61\u4e4b\u60c5",
                    "value": 1,
                    "itemStyle": {
                      "color": "#cb9b9d"
                    }
                  },
                  {
                    "name": "\u62a5\u56fd\u65e0\u95e8 \u5b64\u82e6\u6124\u61d1",
                    "itemStyle": {
                      "color": "#ab858a"
                    },
                    "children": [
                      {
                        "name": "\u733f\u557c",
                        "value": 1,
                        "itemStyle": {
                          "color": "#c2b29a"
                        }
                      },
                      {
                        "name": "\u51c4\u98ce\u82e6\u96e8",
                        "value": 1,
                        "itemStyle": {
                          "color": "#9d7c7c"
                        }
                      },
                      {
                        "name": "\u675c\u9e43",
                        "value": 1,
                        "itemStyle": {
                          "color": "#ecd1c1"
                        }
                      },
                      {
                        "name": "\u9ec4\u53f6",
                        "value": 1,
                        "itemStyle": {
                          "color": "#a18c85"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "center": [
              "50%",
              "50%"
            ],
            "radius": [
              0,
              "95%"
            ],
            "highlightPolicy": "ancestor",
            "nodeClick": "rootToNode",
            "sort": "null",
            "levels": [
              {},
              {
                "r0": "15%",
                "r": "35%",
                "itemStyle": {
                  "borderWidth": 2
                },
                "label": {
                  "rotate": "tangential"
                }
              },
              {
                "r0": "35%",
                "r": "70%",
                "label": {
                  "align": "right"
                }
              },
              {
                "r0": "70%",
                "r": "72%",
                "label": {
                  "position": "outside",
                  "padding": 3,
                  "silent": false
                },
                "itemStyle": {
                  "borderWidth": 3
                }
              }
            ],
            "label": {
              "show": true,
              "position": "top",
              "margin": 8,
              "formatter": "{b}"
            },
            "rippleEffect": {
              "show": true,
              "brushType": "stroke",
              "scale": 2.5,
              "period": 4
            }
          }
        ],
        "legend": [
          {
            "data": [],
            "selected": {},
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
          }
        ],
        "tooltip": {
          "show": true,
          "trigger": "item",
          "triggerOn": "mousemove|click",
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
            "text": " ",
            "padding": 5,
            "itemGap": 10
          }
        ]
      };
      chart_6dfb6e046ebb4dc3aacd6de256b615bd.setOption(option_6dfb6e046ebb4dc3aacd6de256b615bd);
    },
  },
  mounted() {
    this.init2();
  }
}
</script>

<style >



</style>
