<template>
  <div id="root">
    <div id="choiceBox">
      <el-button type="info" plain style="color: black;width: 150px"
                 v-on:click="() => {this.option = optionEnum.GeneratePoem}">诗词生成
      </el-button>
      <el-button type="info" plain style="color: black;width: 150px"
                 v-on:click="() => {this.option = optionEnum.QueryPoem}">查找相近诗词
      </el-button>
<!--      <el-button type="info" plain style="color: black;width: 150px"-->
<!--                 v-on:click="() => {this.option = optionEnum.WordConnect}">查看关联词-->
<!--      </el-button>-->
      <el-button type="info" plain style="color: black;width: 150px" v-on:click="() => {this.option = optionEnum.None}">
        关闭
      </el-button>
    </div>
    <GeneratePoem v-if="this.option===optionEnum.GeneratePoem"/>
    <QueryPoem v-if="this.option===optionEnum.QueryPoem"/>
    <WordConnect v-if="this.option===optionEnum.WordConnect"/>
  </div>
</template>

<script>
import '../assets/style/xing.less';
// import '../assets/style/shuju.less';
import GeneratePoem from "@/views/GeneratePoem";
import QueryPoem from "@/views/QueryPoem";
import WordConnect from "@/views/WordConnect";
import TableauTest from "@/views/TableauTest";
import WorldCloud from "@/views/subviews/WordCloud";
import WordCloud from "@/views/subviews/WordCloud";
import ChinaMap from "@/views/subviews/ChinaMap";
import point from '@/components/point/point'
import BarChart from "@/views/BarChart";
import Emotion from "@/views/subviews/Emotion";

export default {
  name: "MainPage",
  components: {
    Emotion,
    BarChart, ChinaMap, WordCloud, WorldCloud, TableauTest, WordConnect, QueryPoem, GeneratePoem, point
  },
  data() {
    return {
      option: "",
      optionEnum: {
        GeneratePoem: "generatePoem",
        WordConnect: "wordconnect",
        QueryPoem: "querypoem",
        DashBoard: "DashBoard",
        None: "None"
        // querySameSentence: "querySameSentence"
      }
    }
  }
}
</script>

<style scoped>

#root {
  margin-top: 10px;
  display: flex;
  /*justify-content: center;*/
  /*flex-shrink: 0;*/
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  top: 0;
  height: 100vh;
  width: 100%;
  /*top:1%;*/
}

#choiceBox {
  /*margin-top: 10px;*/
  display: block;
  /*overflow: scroll;*/
  /*flex-shrink: 0;*/
  top: 10%;
}

#head {
  font-family: 'xing';
  font-size: 50px;
  font-weight: 20;
  color: #555;
  align: center;
}

.wrap {
  height: 10.666667rem;
  width: 100%;
  border: 1px #213d3d solid;
  display: table;
  text-align: center;
}

.content {
  vertical-align: middle;
  display: table-cell;
}

img {
  width: 5.333333rem;
  height: 2.666667rem;
}

.align-center {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
}
</style>
