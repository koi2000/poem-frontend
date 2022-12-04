<template>
  <div style="position: static">
<!--    <div class="header">-->
<!--      <div class="doc-title">-->
<!--        <h2>唐诗宋词中颜色，季节与情绪词的相似度桑基图</h2>-->
<!--        <h1>&nbsp;&nbsp;根据余弦相似度，对结果进行了差异放大后，将唐诗宋词中颜色，季节与情绪词的相似度绘制如下。将鼠标悬浮于某节点处，可以高亮与其相关的词项的图形。将鼠标悬浮于某一连线上，停止半秒即可高亮该连线和两节点并显示相似度值。</h1>-->
<!--      </div>-->
<!--    </div>-->
    <div id="title"><b>唐诗宋词中颜色，季节与情绪词的相似度桑基图</b> &nbsp</div>
    <p></p>
    <div id="text">
      <b>
        <p>根据余弦相似度，对结果进行了差异放大后，将唐诗宋词中颜色，季节与情绪词的相似度绘制如下。</p>
        <p>将鼠标悬浮于某节点处，可以高亮与其相关的词项的图形。<p>
        <p>将鼠标悬浮于某一连线上，停止半秒即可高亮该连线和两节点并显示相似度值。</p>
      </b>

    </div>

    <div id="d3Chart"></div>
  </div>
</template>

<script>


// import * as d3 from "../../assets/js/d3.v7.min.js";
// import {sankey as Sankey} from "../../assets/js/d3-sankey.min.js"
// import {sankey as Sankey} from "d3-sankey";
// var sankey = Sankey();
// import * as d3 from 'd3';

export default {
  name: "Emotion",

  mounted() {
    // d3.select("#d3Chart").remove();
    this.draw()
  },
  methods: {
    draw() {
      const data = {
        nodes: [
          {name: '红'},
          {name: '黄'},
          {name: '蓝'},
          {name: '绿'},
          {name: '青'},
          {name: '紫'},
          {name: '喜'},
          {name: '怒'},
          {name: '哀'},
          {name: '乐'},
          {name: '春'},
          {name: '夏'},
          {name: '秋'},
          {name: '冬'}
        ],
        links: [
          {source: '红', target: '喜', value: 8.6},
          {source: '红', target: '怒', value: 9.35},
          {source: '红', target: '哀', value: 15},
          {source: '红', target: '乐', value: 10.9},
          {source: '黄', target: '喜', value: 5.4},
          {source: '黄', target: '怒', value: 6.2},
          {source: '黄', target: '哀', value: 9.45},
          {source: '黄', target: '乐', value: 11.5},
          {source: '蓝', target: '喜', value: 12.15},
          {source: '蓝', target: '怒', value: 12.15},
          {source: '蓝', target: '哀', value: 19.7},
          {source: '蓝', target: '乐', value: 14.25},
          {source: '绿', target: '喜', value: 4.9},
          {source: '绿', target: '怒', value: 11.95},
          {source: '绿', target: '哀', value: 14},
          {source: '绿', target: '乐', value: 4.45},
          {source: '青', target: '喜', value: 8.55},
          {source: '青', target: '怒', value: 7.8},
          {source: '青', target: '哀', value: 9.1},
          {source: '青', target: '乐', value: 12.85},
          {source: '紫', target: '喜', value: 7.4},
          {source: '紫', target: '怒', value: 10.6},
          {source: '紫', target: '哀', value: 16.45},
          {source: '紫', target: '乐', value: 11.4},
          {source: '喜', target: '春', value: 1.55},
          {source: '喜', target: '夏', value: 15.9},
          {source: '喜', target: '秋', value: 9.6},
          {source: '喜', target: '冬', value: 5.45},
          {source: '怒', target: '春', value: 0.9},
          {source: '怒', target: '夏', value: 1.8},
          {source: '怒', target: '秋', value: 10.95},
          {source: '怒', target: '冬', value: 7.95},
          {source: '哀', target: '春', value: 3.65},
          {source: '哀', target: '夏', value: 10.95},
          {source: '哀', target: '秋', value: 1.35},
          {source: '哀', target: '冬', value: 10.7},
          {source: '乐', target: '春', value: 1.8},
          {source: '乐', target: '夏', value: 2.7},
          {source: '乐', target: '秋', value: 6.95},
          {source: '乐', target: '冬', value: 7.65}
        ]
      }
      // 画布
      const width = 700
      const height = 700
      const margin = 30
      const svg = d3
          .select('#d3Chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .style('background-color', '') //#1a3055

      // 图
      const chart = svg.append('g')
          .attr('transform', `translate(${margin}, ${margin})`)

      const colorScale = d3.scaleOrdinal(d3.schemeSet3)

      const sankey = d3
          .sankey()
          .nodeWidth(30)
          .nodePadding(20)
          .size([width - 2 * margin, height - 2 * margin])
          .nodeId((d) => d.name)

      const {nodes, links} = sankey({
        nodes: data.nodes,
        links: data.links
      })

      chart
          .append('g')
          .selectAll()
          .data(nodes)
          .join('g')
          .attr('class', 'node')
          .attr('indexName', (d) => d.name)
          .append('rect')
          .attr('fill', (d, i) => colorScale(d.name))
          .attr('x', (d) => d.x0)
          .attr('y', (d) => d.y0)
          .attr('height', (d) => d.y1 - d.y0)
          .attr('width', (d) => d.x1 - d.x0)
          .append('title')
          .text((d) => `${d.name}`)

      chart
          .append('g')
          .attr('fill', 'none')
          .selectAll()
          .data(links)
          .join('path')
          .attr('indexName', (d) => d.source.name + '-' + d.target.name)
          .attr('d', d3.sankeyLinkHorizontal())
          .attr('stroke', (d, i) => colorScale(d.source.name))
          .attr('stroke-width', (d) => d.width)
          .attr('stroke-opacity', '0.5')
          .append('title')
          .text((d) => `${d.value.toLocaleString()}`)

      chart
          .selectAll('.node')
          .append('text')
          .attr('class', 'text')
          .attr('x', (d) => (d.x0 + d.x1) / 2)
          .attr('y', (d) => (d.y0 + d.y1) / 2)
          .attr('stroke', '#000000')
          .attr('text-anchor', 'middle')
          .attr('dy', 6)
          .text((d) => d.name)

      d3.selectAll('.node')
          .on('mouseover', function (e, d) {
            d3.selectAll('.node, path').attr('fill-opacity', '0.1').attr('stroke-opacity', '0.1')

            d3.selectAll('[indexName*=' + d.name + ']')
                .attr('fill-opacity', '1')
                .attr('stroke-opacity', '0.6')
          })
          .on('mouseleave', function () {
            d3.selectAll('.node, path').attr('fill-opacity', '1').attr('stroke-opacity', '0.5')
          })

      // 连线
      d3.selectAll('path')
          .on('mouseover', function (e, d) {
            d3.selectAll('.node, path').attr('fill-opacity', '0.1').attr('stroke-opacity', '0.1')

            const hoverNodes = d3.select(e.target).attr('stroke-opacity', '0.5').attr('indexName').split('-')

            hoverNodes.forEach((name) => {
              d3.selectAll('[indexName=' + name + ']').attr('fill-opacity', '1')
            })
          })
          .on('mouseleave', function () {
            d3.selectAll('.node, path').attr('fill-opacity', '1').attr('stroke-opacity', '0.5')
          })
    }
  }
}
</script>

<style scoped>
h2 {
  font-family: 楷体;
  font-size: 50px;
  font-style: italic;
  font-weight: bold;
}

h1 {
  font-family: 宋体;
  font-size: 28px;
  font-style: normal;
  font-weight: lighter;
  font-variant: small-caps;
}
</style>
