<template>
  <div>
    <body>
    <div class="main">
      <div class="header">
        <div class="leftcolumn">
          <div class="doc-title">
            <h1>情感分析</h1>
          </div>

        </div>
        <div class="rightcolumn">
          <div class="introduction">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis inventore maxime, quisquam
              iure perspiciatis iste amet voluptates eveniet optio pariatur velit, numquam iusto beatae
              consequatur quae ab nam quod sunt vel labore non dolore fuga accusamus tempora! Laudantium,
              culpa distinctio quis quos sunt tempora maiores explicabo in numquam dolorem ducimus, magni
              incidunt cupiditate possimus officiis id. Ab, aut, consequatur laudantium accusamus tempora
              nostrum laboriosam, sequi aliquid pariatur enim atque cumque provident error vel id odit eos
              impedit ipsam porro sapiente iusto vero est praesentium. Eius omnis labore voluptate earum
              adipisci quas officia iure culpa, ipsam eveniet, aut, veniam ratione odit!</p>
          </div>

        </div>

      </div>
      <div class="header" style="margin:auto">
        <div id="a00862844d68469685e0d9aaea4ed7d0" class="chart-container" style="width:900px; height:500px;"></div>
      </div>

      <div class="header" style="margin:auto">
        <div id="6dfb6e046ebb4dc3aacd6de256b615bd" class="chart-container" style="width:1000px; height:600px;">
        </div>
      </div>


      <div class="header" style="margin:auto">
        <div id="5d4cf58ea685498a91237dceaee927c5" class="chart-container" style="width:900px; height:500px;"></div>
      </div>
    </div>
    </body>
  </div>
</template>

<script>

import * as echarts from "../../assets/js/py/echarts.min"

export default {
  name: "EmotionPlace",
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
          "#67001f",
          "#b2182b",
          "#d6604d",
          "#f4a582",
          "#fddbc7",
          "#d1e5f0",
          "#92c5de",
          "#4393c3",
          "#2166ac",
          "#053061"
        ],
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
    },
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
        "color": [
          "#c23531",
          "#2f4554",
          "#61a0a8",
          "#d48265",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3",
          "#f05b72",
          "#ef5b9c",
          "#f47920",
          "#905a3d",
          "#fab27b",
          "#2a5caa",
          "#444693",
          "#726930",
          "#b2d235",
          "#6d8346",
          "#ac6767",
          "#1d953f",
          "#6950a1",
          "#918597"
        ],
        "series": [
          {
            "type": "sunburst",
            "data": [
              {
                "name": "\u5c71\u6c34\n\u7530\u56ed\u8bd7",
                "itemStyle": {
                  "color": "#da0d68"
                },
                "children": [
                  {
                    "name": "\u70ed\u7231\u81ea\u7136 \u5411\u5f80\u81ea\u7531",
                    "value": 1,
                    "itemStyle": {
                      "color": "#975e6d"
                    }
                  },
                  {
                    "name": "\u6e34\u671b\u5f52\u9690 \u95f2\u9002\u6de1\u6cca",
                    "itemStyle": {
                      "color": "#e0719c"
                    },
                    "children": [
                      {
                        "name": "\u4e1c\u7bf1",
                        "value": 1,
                        "itemStyle": {
                          "color": "#f99e1c"
                        }
                      },
                      {
                        "name": "\u4e94\u67f3",
                        "value": 1,
                        "itemStyle": {
                          "color": "#ef5a78"
                        }
                      },
                      {
                        "name": "\u9e64",
                        "value": 1,
                        "itemStyle": {
                          "color": "#f7f1bd"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "name": "\u8fb9\u585e\n\u519b\u65c5\u8bd7",
                "itemStyle": {
                  "color": "#da1d23"
                },
                "children": [
                  {
                    "name": "\u5efa\u529f\u7acb\u4e1a \u62a5\u6548\u7956\u56fd",
                    "itemStyle": {
                      "color": "#dd4c51"
                    },
                    "children": [
                      {
                        "name": "\u8fb9\u5173",
                        "value": 1,
                        "itemStyle": {
                          "color": "#3e0317"
                        }
                      },
                      {
                        "name": "\u94c1\u9a91",
                        "value": 1,
                        "itemStyle": {
                          "color": "#e62969"
                        }
                      },
                      {
                        "name": "\u65cc\u65d7",
                        "value": 1,
                        "itemStyle": {
                          "color": "#6569b0"
                        }
                      },
                      {
                        "name": "\u70fd\u706b",
                        "value": 1,
                        "itemStyle": {
                          "color": "#ef2d36"
                        }
                      }
                    ]
                  },
                  {
                    "name": "\u79bb\u60c5\u522b\u6068 \u5f81\u58eb\u4e61\u6101",
                    "itemStyle": {
                      "color": "#c94a44"
                    },
                    "children": [
                      {
                        "name": "\u7fbd\u4e66",
                        "value": 1,
                        "itemStyle": {
                          "color": "#b53b54"
                        }
                      },
                      {
                        "name": "\u79cb\u6708",
                        "value": 1,
                        "itemStyle": {
                          "color": "#a5446f"
                        }
                      }
                    ]
                  },
                  {
                    "name": "\u62a5\u56fd\u65e0\u95e8 \u58ee\u5fd7\u672a\u916c",
                    "itemStyle": {
                      "color": "#dd4c51"
                    },
                    "children": [
                      {
                        "name": "\u98ce\u6c99",
                        "value": 1,
                        "itemStyle": {
                          "color": "#f2684b"
                        }
                      },
                      {
                        "name": "\u5b64\u57ce",
                        "value": 1,
                        "itemStyle": {
                          "color": "#e73451"
                        }
                      },
                      {
                        "name": "\u91d1\u9f13",
                        "value": 1,
                        "itemStyle": {
                          "color": "#e65656"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "name": "\u5199\u666f\n\u548f\u7269\u8bd7",
                "itemStyle": {
                  "color": "#ebb40f"
                },
                "children": [
                  {
                    "name": "\u6258\u7269\u8a00\u5fd7 \u5fd7\u5411\u9ad8\u6d01",
                    "itemStyle": {
                      "color": "#e1c315"
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
                          "color": "#d0b24f"
                        }
                      },
                      {
                        "name": "\u83ca\u82b1",
                        "value": 1,
                        "itemStyle": {
                          "color": "#8eb646"
                        }
                      }
                    ]
                  },
                  {
                    "name": "\u501f\u666f\u6292\u60c5 \u60c5\u666f\u4ea4\u878d",
                    "itemStyle": {
                      "color": "#b09733"
                    },
                    "children": [
                      {
                        "name": "\u54c0\u9e3f",
                        "value": 1,
                        "itemStyle": {
                          "color": "#8f1c53"
                        }
                      },
                      {
                        "name": "\u6e14\u821f",
                        "value": 1,
                        "itemStyle": {
                          "color": "#b34039"
                        }
                      },
                      {
                        "name": "\u5f52\u96c1",
                        "value": 1,
                        "itemStyle": {
                          "color": "#ba9232"
                        }
                      },
                      {
                        "name": "\u843d\u82b1",
                        "value": 1,
                        "itemStyle": {
                          "color": "#8b6439"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "name": "\u548f\u53f2\n\u6000\u53e4\u8bd7",
                "itemStyle": {
                  "color": "#187a2f"
                },
                "children": [
                  {
                    "name": "\u6000\u624d\u4e0d\u9047 \u58ee\u5fd7\u672a\u916c",
                    "value": 1,
                    "itemStyle": {
                      "color": "#a2b029"
                    }
                  },
                  {
                    "name": "\u75db\u60dc\u5148\u8d24 \u601d\u8003\u5386\u53f2",
                    "value": 1,
                    "itemStyle": {
                      "color": "#718933"
                    }
                  },
                  {
                    "name": "\u5fe7\u56fd\u4f24\u65f6 \u6000\u53e4\u4f24\u4eca",
                    "itemStyle": {
                      "color": "#3aa255"
                    },
                    "children": [
                      {
                        "name": "\u91d1\u9675\u6708",
                        "value": 1,
                        "itemStyle": {
                          "color": "#a2bb2b"
                        }
                      },
                      {
                        "name": "\u5927\u6c5f",
                        "value": 1,
                        "itemStyle": {
                          "color": "#62aa3c"
                        }
                      },
                      {
                        "name": "\u540e\u5ead",
                        "value": 1,
                        "itemStyle": {
                          "color": "#03a653"
                        }
                      },
                      {
                        "name": "\u4e91\u9704",
                        "value": 1,
                        "itemStyle": {
                          "color": "#038549"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "name": "\u8d60\u53cb\n\u9001\u522b\u8bd7",
                "itemStyle": {
                  "color": "#0aa3b5"
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
                          "color": "#fefef4"
                        }
                      },
                      {
                        "name": "\u6d41\u6c34",
                        "value": 1,
                        "itemStyle": {
                          "color": "#744e03"
                        }
                      }
                    ]
                  },
                  {
                    "name": "\u60fa\u60fa\u76f8\u60dc \u4f9d\u4f9d\u60dc\u522b",
                    "itemStyle": {
                      "color": "#76c0cb"
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
                  "color": "#ad213e"
                },
                "children": [
                  {
                    "name": "\u7f81\u65c5\u4e4b\u82e6 \u5fe7\u6101\u51c4\u51c9",
                    "value": 1,
                    "itemStyle": {
                      "color": "#794752"
                    }
                  },
                  {
                    "name": "\u611f\u5ff5\u4eb2\u53cb \u601d\u4e61\u4e4b\u60c5",
                    "value": 1,
                    "itemStyle": {
                      "color": "#cc3d41"
                    }
                  },
                  {
                    "name": "\u62a5\u56fd\u65e0\u95e8 \u5b64\u82e6\u6124\u61d1",
                    "itemStyle": {
                      "color": "#b14d57"
                    },
                    "children": [
                      {
                        "name": "\u733f\u557c",
                        "value": 1,
                        "itemStyle": {
                          "color": "#c78936"
                        }
                      },
                      {
                        "name": "\u51c4\u98ce\u82e6\u96e8",
                        "value": 1,
                        "itemStyle": {
                          "color": "#8c292c"
                        }
                      },
                      {
                        "name": "\u675c\u9e43",
                        "value": 1,
                        "itemStyle": {
                          "color": "#e5762e"
                        }
                      },
                      {
                        "name": "\u9ec4\u53f6",
                        "value": 1,
                        "itemStyle": {
                          "color": "#a16c5a"
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
    init3() {
      var chart_5d4cf58ea685498a91237dceaee927c5 = echarts.init(
          document.getElementById('5d4cf58ea685498a91237dceaee927c5'), 'white', {renderer: 'canvas'});
      var option_5d4cf58ea685498a91237dceaee927c5 = {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "color": [
          "#c23531",
          "#2f4554",
          "#61a0a8",
          "#d48265",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3",
          "#f05b72",
          "#ef5b9c",
          "#f47920",
          "#905a3d",
          "#fab27b",
          "#2a5caa",
          "#444693",
          "#726930",
          "#b2d235",
          "#6d8346",
          "#ac6767",
          "#1d953f",
          "#6950a1",
          "#918597"
        ],
        "series": [
          {
            "type": "wordCloud",
            "shape": "diamond",
            "rotationRange": [
              0,
              0
            ],
            "rotationStep": 45,
            "girdSize": 20,
            "sizeRange": [
              20,
              100
            ],
            "data": [
              {
                "name": "\u8fb9\u585e\u8bd7",
                "value": 10000,
                "textStyle": {
                  "normal": {
                    "color": "rgb(156,137,43)"
                  }
                }
              },
              {
                "name": "\u5927\u6f20",
                "value": 6181,
                "textStyle": {
                  "normal": {
                    "color": "rgb(6,91,95)"
                  }
                }
              },
              {
                "name": "\u79cb\u6708",
                "value": 4386,
                "textStyle": {
                  "normal": {
                    "color": "rgb(84,65,130)"
                  }
                }
              },
              {
                "name": "\u957f\u70df",
                "value": 4055,
                "textStyle": {
                  "normal": {
                    "color": "rgb(47,68,150)"
                  }
                }
              },
              {
                "name": "\u843d\u65e5",
                "value": 2467,
                "textStyle": {
                  "normal": {
                    "color": "rgb(114,51,24)"
                  }
                }
              },
              {
                "name": "\u5b64\u70df",
                "value": 2244,
                "textStyle": {
                  "normal": {
                    "color": "rgb(152,89,157)"
                  }
                }
              },
              {
                "name": "\u4e91\u6d77",
                "value": 1868,
                "textStyle": {
                  "normal": {
                    "color": "rgb(119,59,78)"
                  }
                }
              },
              {
                "name": "\u9ec4\u6c99",
                "value": 1484,
                "textStyle": {
                  "normal": {
                    "color": "rgb(19,0,118)"
                  }
                }
              },
              {
                "name": "\u96e8\u96ea",
                "value": 1112,
                "textStyle": {
                  "normal": {
                    "color": "rgb(156,23,91)"
                  }
                }
              },
              {
                "name": "\u5b64\u57ce",
                "value": 865,
                "textStyle": {
                  "normal": {
                    "color": "rgb(96,60,91)"
                  }
                }
              },
              {
                "name": "\u96c1\u98de",
                "value": 847,
                "textStyle": {
                  "normal": {
                    "color": "rgb(131,78,66)"
                  }
                }
              },
              {
                "name": "\u6c99\u789b",
                "value": 582,
                "textStyle": {
                  "normal": {
                    "color": "rgb(90,29,71)"
                  }
                }
              },
              {
                "name": "\u91d1\u9f13",
                "value": 5555,
                "textStyle": {
                  "normal": {
                    "color": "rgb(151,112,84)"
                  }
                }
              },
              {
                "name": "\u65cc\u65d7",
                "value": 4550,
                "textStyle": {
                  "normal": {
                    "color": "rgb(152,0,158)"
                  }
                }
              },
              {
                "name": "\u70fd\u706b",
                "value": 4462,
                "textStyle": {
                  "normal": {
                    "color": "rgb(56,27,49)"
                  }
                }
              },
              {
                "name": "\u7f8c\u7b1b",
                "value": 4366,
                "textStyle": {
                  "normal": {
                    "color": "rgb(51,96,155)"
                  }
                }
              },
              {
                "name": "\u80e1\u7b33",
                "value": 4360,
                "textStyle": {
                  "normal": {
                    "color": "rgb(50,59,59)"
                  }
                }
              },
              {
                "name": "\u7435\u7436",
                "value": 3782,
                "textStyle": {
                  "normal": {
                    "color": "rgb(131,95,12)"
                  }
                }
              },
              {
                "name": "\u8f95\u95e8",
                "value": 3273,
                "textStyle": {
                  "normal": {
                    "color": "rgb(18,38,29)"
                  }
                }
              },
              {
                "name": "\u753b\u89d2",
                "value": 2265,
                "textStyle": {
                  "normal": {
                    "color": "rgb(51,83,34)"
                  }
                }
              },
              {
                "name": "\u96c1\u95e8\u5173",
                "value": 2211,
                "textStyle": {
                  "normal": {
                    "color": "rgb(81,96,73)"
                  }
                }
              },
              {
                "name": "\u7389\u95e8\u5173",
                "value": 3152,
                "textStyle": {
                  "normal": {
                    "color": "rgb(104,21,64)"
                  }
                }
              },
              {
                "name": "\u8f6e\u53f0",
                "value": 1508,
                "textStyle": {
                  "normal": {
                    "color": "rgb(153,8,91)"
                  }
                }
              },
              {
                "name": "\u701a\u6d77",
                "value": 1402,
                "textStyle": {
                  "normal": {
                    "color": "rgb(123,58,44)"
                  }
                }
              },
              {
                "name": "\u591c\u90ce",
                "value": 998,
                "textStyle": {
                  "normal": {
                    "color": "rgb(153,102,153)"
                  }
                }
              },
              {
                "name": "\u697c\u5170",
                "value": 956,
                "textStyle": {
                  "normal": {
                    "color": "rgb(99,31,109)"
                  }
                }
              },
              {
                "name": "\u9634\u5c71",
                "value": 504,
                "textStyle": {
                  "normal": {
                    "color": "rgb(28,20,21)"
                  }
                }
              },
              {
                "name": "\u51c9\u5dde",
                "value": 583,
                "textStyle": {
                  "normal": {
                    "color": "rgb(84,135,93)"
                  }
                }
              },
              {
                "name": "\u53e4\u9053",
                "value": 423,
                "textStyle": {
                  "normal": {
                    "color": "rgb(34,29,123)"
                  }
                }
              }
            ],
            "drawOutOfBound": false,
            "textStyle": {
              "emphasis": {}
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
      chart_5d4cf58ea685498a91237dceaee927c5.setOption(option_5d4cf58ea685498a91237dceaee927c5);
    }
  },
  mounted() {
    this.init1();
    this.init2();
    this.init3();
  }
}
</script>

<style scoped>

</style>
