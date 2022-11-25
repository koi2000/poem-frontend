//示例代码
<template>
  <!-- 创建要插入Tableau可视化元素的容器 -->
  <div id="container" ref="container" style="width:700px; height:1000px;"></div>
</template>
<script>
export default {
  name: "TableauTest",
  mounted() {
    // 获取容器元素
    let containerDiv = this.$refs.container;
    // 数据服务器路径
    // let url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
    // let url = "https://public.tableau.com/views/WorldIndicators/GDPpercapita";
    let url = "https://prod-apnortheast-a.online.tableau.com/t/koi2000/views/_0/Sheet1?:origin=card_share_link&:embed=n";

    // 配置选项
    let options = {
      //隐藏tab栏
      hideTabs: true,
      //加载后执行的回调函数
      onFirstInteractive: function () {
        console.log("Run this code when the viz has finished loading.");
      },
      //offsetWidth/offsetHeight  获取的是盒子的真实宽高（width/height+border+padding）

      //设置图表模块和容器等宽
      width: containerDiv.offsetWidth,
      //设置图标模块和容器等高
      height: containerDiv.offsetHeight
    };
    // 实例化一个Talleau视图对象,并传入上述三个参数
    let view = new tableau.Viz(containerDiv, url, options);
  }
};
</script>
<style lang="scss">
#container{
  align-items: center;
}

</style>