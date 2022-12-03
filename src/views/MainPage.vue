<template>
  <div id="root">

    <div class="wrap">
      <div class="content">
        <h1 id="head">诗词可视化与分析</h1>

        <div>
          <!--          <el-button type="primary" v-on:click="() => {-->
          <!--      this.$router.push({path: '/GeneratePoem'})-->
          <!--    }">诗词生成-->
          <!--          </el-button>-->

          <!--          <el-button type="primary" v-on:click="() => {-->
          <!--      this.$router.push({path: '/QueryPoem'})-->
          <!--    }">查找相似诗词-->
          <!--          </el-button>-->

          <!--          <el-button type="primary" v-on:click="() => {-->
          <!--      this.$router.push({path: '/WordConnect'})-->
          <!--    }">查看关联词-->
          <!--          </el-button>-->

<!--          <el-button type="primary" v-on:click="() => {-->
<!--            this.$router.push({path: '/DashBoard'})}">DashBoard-->
<!--          </el-button>-->

<!--          <el-button type="primary" v-on:click="() => {-->
<!--            this.$router.push({path: '/temp'})}">temp-->
<!--          </el-button>-->

<!--          <el-button type="primary" v-on:click="() => {-->
<!--            this.$router.push({path: '/StoryPage'})}">StoryPage-->
<!--          </el-button>-->

<!--          <el-button type="primary" v-on:click="() => {-->
<!--            this.option = optionEnum.GeneratePoem}">诗词生成-->
<!--          </el-button>-->

<!--          <el-button type="primary" v-on:click="() => {-->
<!--            this.option = optionEnum.QueryPoem}">查找相似诗词-->
<!--          </el-button>-->

<!--          <el-button type="primary" v-on:click="() => {-->
<!--            this.option = optionEnum.WordConnect}">查看关联词-->
<!--          </el-button>-->
        </div>
      </div>
    </div>
    <!--    <WordCloud/>-->

    <!--    <TableauTest/>-->
    <!--    <DashBoard v-if="option===optionEnum.DashBoard"/>-->
    <!--    <GeneratePoem v-if="option===optionEnum.GeneratePoem"/>-->
    <ChinaMap/>
    <GeneratePoem/>
    <QueryPoem/>
    <WordConnect/>
    <!--    <QueryPoem v-if="option===optionEnum.QueryPoem"/>-->
    <!--    <WordConnect v-if="option===optionEnum.WordConnect"/>-->
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

export default {
  name: "MainPage",
  components: {BarChart, ChinaMap, WordCloud, WorldCloud, TableauTest, WordConnect, QueryPoem, GeneratePoem,point},
  data() {
    return {
      option: "",
      optionEnum: {
        GeneratePoem: "generatePoem",
        WordConnect: "wordconnect",
        QueryPoem: "querypoem",
        DashBoard: "DashBoard"
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
  /*overflow-y: scroll;*/
  top: 0;
  /*height: 100%;*/
  /*width: 100%;*/
  /*top:1%;*/
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
