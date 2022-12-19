<template>
  <div class="animate__animated animate__fadeIn" style="animation-duration: 3s">
    <!--    <iframe src="../assets/html/aaaa.html" id="qt"></iframe>-->
    <full-page :options="options" ref="fullpage">
      <div class="section" :key="0">

        <div class="slide" id="slide0">
          <iframe src="static/html/animated/index.html" width="100%" height="100%" frameborder="0"
                  scrolling="auto"></iframe>
        </div>

        <div class="slide" id="slide5">
          <div>
            <G6 v-if="this.index===1"/>
          </div>
        </div>


        <div class="slide" id="slide8">
          <h1>边塞诗词云图</h1>
          <div style="font-family: 'kxfont';">
            <iframe src="https://koi2000.top/" width="100%" height="800px" style="margin-top: -100px" frameborder="0"
                    scrolling="auto"></iframe>
          </div>
        </div>


        <div class="slide" id="slide1">
          <div class="animate__animated animate__fadeIn" style="animation-duration: 3s">
            <TimeRiver v-if="this.index===3"/>
          </div>
          <!--          <TimeRiver v-if="this.index===1"/>-->
        </div>

        <div class="slide" id="slide2">
          <div>
            <ChinaMap v-if="this.index===4"/>
          </div>
        </div>


        <div class="slide" id="slide3">
          <div>
            <SentAnalysisSankey v-if="this.index===5"/>
          </div>
        </div>

        <div class="slide" id="slide7">
          <div>
            <Emotion v-if="this.index===6"/>
          </div>
        </div>

        <div class="slide" id="slide4">
          <div>
            <SentAnalysisPie v-if="this.index===7"/>
          </div>
        </div>

        <div class="slide" id="slide6">
          <div>
            <Sun v-if="this.index===8"/>
          </div>
        </div>

        <div class="slide" id="slide-1">
          <div>
            <MainPage/>
          </div>
        </div>


        <!--        <div class="slide">-->
        <!--          <iframe src="static/html/visualization-master/cn.html" width="100%" height="100%" frameborder="0"-->
        <!--                  scrolling="auto"></iframe>-->
        <!--        </div>-->

        <!--        <div class="slide">-->
        <!--          <iframe src="static/html/visualization-master/ka.html" width="100%" height="100%" frameborder="0"-->
        <!--                  scrolling="auto"></iframe>-->
        <!--        </div>-->

      </div>
      <!--      <div class="section" :key="0">-->
      <!--        <ChinaMap/>-->
      <!--      </div>-->
      <!--      <div class="section">-->
      <!--        <div>-->
      <!--          <SentAnalysisSankey v-if="this.index===1" :key="1"/>-->
      <!--        </div>-->
      <!--        &lt;!&ndash;                        <SentAnalysisSankey/>&ndash;&gt;-->
      <!--      </div>-->

      <!--      <div class="section" :key="2">-->
      <!--        <div>-->
      <!--          <SentAnalysisPie v-if="this.index===2"/>-->
      <!--        </div>-->
      <!--      </div>-->

      <!--      <div class="section" :key="3">-->
      <!--        &lt;!&ndash;        <iframe src="https://www.koi2000.top/"></iframe>&ndash;&gt;-->
      <!--        &lt;!&ndash;        <iframe src="../../public/static/html/aaaa.html" width="100%" height="600px"></iframe>&ndash;&gt;-->
      <!--        <iframe src="static/html/visual/sun.html" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>-->
      <!--      </div>-->

      <!--      <div class="section">-->
      <!--        <div class="slide">-->
      <!--          <div style="height: 100vh">-->
      <!--            <img width="100%"-->
      <!--                 src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote9pro/section14-8.jpg"-->
      <!--                 alt="">-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="slide">-->
      <!--          <div style="height: 100vh">-->
      <!--            <img width="100%"-->
      <!--                 src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote9pro/section14-6.jpg"-->
      <!--                 alt="">-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="slide">-->
      <!--          <div style="height: 100vh">-->
      <!--            <img width="100%"-->
      <!--                 src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote9pro/section16-2.jpg"-->
      <!--                 alt="">-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="section">-->
      <!--        <div class="box3">-->
      <!--          <div style="height: 100vh">-->
      <!--            <img height="100%"-->
      <!--                 src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote9pro/section11-1.jpg"-->
      <!--                 alt="">-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
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
import Emotion from "@/views/subviews/Emotion";
import G6 from "@/views/G6";
import WordCloud from "@/views/subviews/WordCloud";
import Sun from "@/views/subviews/Sun";
import D3Cloud from "@/views/D3Cloud";
import React from 'react'
import HomePage from "@/views/HomePage";
import TimeRiver from "@/views/subviews/TimeRiver";
import MainPage from "@/views/MainPage";

export default {
  components: {
    MainPage,
    TimeRiver,
    HomePage,
    WordCloud,
    G6,
    Emotion,
    ChinaMap,
    EmotionPlace,
    SentAnalysisSankey,
    SentAnalysisPie,
    D3Cloud,
    Sun,
    // Three
  },
  data() {
    return {
      index: 0,
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        //是否显示导航，默认为false
        navigation: true,
        afterLoad: this.afterLoad,
        onLeave: this.onLeave,
        afterSlideLoad: this.afterSlideLoad,
        onSlideLeave: this.onSlideLeave,
        css3: false, //需要把这个值设置为false
        easing: 'easeInOutCubic', //之后你就可以随意选择easing.js里面的动画效果名称了
        // fadingEffect:true,
        // fadingEffect:'slides'
        // 为每个section设置背景色
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
    parentClickHandle(data) {
      console.log(data);
    },
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    },
    afterLoad(anchorLink, index) {
      // console.log(index.index)
      // this.index = index.index
    },
    onLeave(index, aindex, direction) {
      // this.index = aindex.index
      // if (index.index === 0) {
      //   $('#slide1').addClass('animated fadeInDown');
      // }
    },
    afterSlideLoad(anchorLink, index, slideIndex, direction, nextSlideIndex) {
      this.index = slideIndex.index
      // if (slideIndex.index === 0) {
      //   // 向ID为P1的元素添加class，animated是animate.css激活动画必须加的class,后面跟的是动画class
      //   console.log("创建" + index.index);
      //   $('#slide0').addClass('animated zoomIn');
      // }
      if (slideIndex.index === 1) {
        console.log("创建" + index.index);
        $('#slide1').addClass('animated zoomIn');
      }

      if (slideIndex.index === 2) {
        console.log("创建" + index.index);
        $('#slide2').addClass('animated zoomIn');
      }
      if (slideIndex.index === 3) {
        console.log("创建" + index.index);
        $('#slide3').addClass('animated zoomIn');
      }
      if (slideIndex.index === 4) {
        console.log("创建" + index.index);
        $('#slide4').addClass('animated zoomIn');
      }
    },
    onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex) {
      // if (slideIndex.index === 0) {
      //   // 向ID为P1的元素添加class，animated是animate.css激活动画必须加的class,后面跟的是动画class
      //   console.log("创建" + index.index);
      //   $('#slide0').removeClass('animated zoomIn');
      // }
      if (slideIndex.index === 1) {
        console.log("创建" + index.index);
        $('#slide1').removeClass('animated zoomIn');
      }
      if (slideIndex.index === 2) {
        console.log("创建" + index.index);
        $('#slide2').removeClass('animated zoomIn');
      }
      if (slideIndex.index === 3) {
        console.log("创建" + index.index);
        $('#slide3').removeClass('animated zoomIn');
      }
      if (slideIndex.index === 4) {
        console.log("创建" + index.index);
        $('#slide4').removeClass('animated zoomIn');
      }
    }
  },
}
</script>

<style scoped>
@import "../assets/css/animate.min.css";
</style>
