<template>
  <div>
    <full-page :options="options" ref="fullpage">
      <div class="section">
        <div style="text-align: center">
          <h1 style="color: white">小米手机拍照效果</h1>
          <button @click="next">下一页</button>
        </div>
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
export default {
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        //是否显示导航，默认为false
        navigation: true,
        //为每个section设置背景色
        sectionsColor: [
          "#41b883",
          "#ff5f45",
          "#0798ec",
          "#fec401",
          "#1bcee6",
          "#ee1a59",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab"
        ],
      }
    }
  },
  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    }
  }
}
</script>
