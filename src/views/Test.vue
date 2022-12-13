<template>
  <div>
    <!--    <iframe src="../assets/html/aaaa.html" id="qt"></iframe>-->
    <full-page :options="options" ref="fullpage">
      <div class="section" :key="0">
        <ChinaMap/>
      </div>
      <div class="section">
        <div>
          <SentAnalysisSankey v-if="this.index===1" :key="1"/>
        </div>
        <!--                        <SentAnalysisSankey/>-->
      </div>

      <div class="section" :key="2">
        <div>
          <SentAnalysisPie v-if="this.index===2"/>
        </div>
      </div>

      <div class="section" :key="3">
<!--        <iframe src="https://www.koi2000.top/"></iframe>-->
        <!--        <iframe src="../../public/static/html/aaaa.html" width="100%" height="600px"></iframe>-->
        <iframe src="static/html/visual/sun.html" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
      </div>

      <div class="section">
        <div class="slide">
          <div style="height: 100vh">
            <img width="100%"
                 src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote9pro/section14-8.jpg"
                 alt="">
          </div>
        </div>
        <div class="slide">
          <div style="height: 100vh">
            <img width="100%"
                 src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote9pro/section14-6.jpg"
                 alt="">
          </div>
        </div>
        <div class="slide">
          <div style="height: 100vh">
            <img width="100%"
                 src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote9pro/section16-2.jpg"
                 alt="">
          </div>
        </div>
      </div>
      <div class="section">
        <div class="box3">
          <div style="height: 100vh">
            <img height="100%"
                 src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote9pro/section11-1.jpg"
                 alt="">
          </div>
        </div>
      </div>
    </full-page>
    <div>
    </div>
  </div>
</template>
<script>
import ChinaMap from "@/views/subviews/ChinaMap";
import EmotionPlace from "@/views/subviews/EmotionPlace";
import SentAnalysisSankey from "@/views/subviews/SentAnalysisSankey";
import SentAnalysisPie from "@/views/subviews/SentAnalysisPie";

export default {
  components: {ChinaMap, EmotionPlace, SentAnalysisSankey,SentAnalysisPie},
  data() {
    return {
      src: "../../public/static/html/aaaa.html",
      index: 0,
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        //是否显示导航，默认为false
        navigation: true,
        afterLoad: this.afterLoad,
        onLeave: this.onLeave,
        //为每个section设置背景色
        // sectionsColor: [
        //   "#41b883",
        //   "#ff5f45",
        //   "#0798ec",
        //   "#fec401",
        //   "#1bcee6",
        //   "#ee1a59",
        //   "#2c3e4f",
        //   "#ba5be9",
        //   "#b4b8ab"
        // ],
      }
    }
  },
  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    },
    afterLoad(anchorLink, index) {
      // console.log(index.index)
      // this.index = index.index
    },
    onLeave(index, aindex, direction) {
      console.log(aindex.index)
      this.index = aindex.index
    }
  }
}
</script>

<style scoped>
/*@import "../assets/css/theme.css";*/
</style>
