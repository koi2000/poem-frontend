# 诗词可视化

网址链接：https://koi2000.github.io/poem-frontend/

我们组的选题是Explorable Explanation，项目整体使用vue框架开发，同时也使用了echart，d3，G6，three.js等可视化工具。主题是对诗词数据进行可视化分析，点击右方小圆点，按键盘左右移动键可以切换页面，

我们筛选出唐诗宋词中出现概率较高的词语，使用word2vec进行向量化，然后使用余弦相似度找出较为相似的词语，可以通过拖拽点击进行交互，

使用three.js绘制了边塞诗的3D词云图，词频不同，字的大小不同，可以拖拽缩放进行交互，

纵观历史长河，我们对诗词在时间维度也进行了分析，绘制了时间走向图，可以查看每个事件节点的诗人数量。

横览五湖四海，我们也分析了各个省份的诗人数量，将其在地图上进行了可视化。红色球的数量和颜色代表了不同的数量，古人常常借助山川抒发情感，我们对诗词中名胜古迹出现次数进行了统计，颜色不同数量不同。

我们对诗词中的情感进行了分析，诗词中情感大致可分为喜怒悲豪四类，根据词向量，我们绘制了季节-情感-意向的桑基图，悬浮可展示不同信息。

同时我们也绘制了颜色-情感-季节的桑基图，悬浮可展示不同信息。

诗词可以分为多种类型，同一类型的诗词也可能抒发不同的情感，我们绘制了类型-情感-意向多级饼状图，可以点击展示更丰富的信息

我们对于诗词数据进行了层次聚类，对绘制了其中部分类别的词云图，悬浮在旭日图的不同部分，词云和文字会发生变化。

参考资料：

https://gallery.pyecharts.org/#/Sankey/sankey_diagram
https://gallery.pyecharts.org/#/Sunburst/drink_flavors

参考pyecharts示例中的样式设计可视化。在阅读python代码的基础上，利用对应的echarts方法，在原有设计上改进或调整（包括属性设定、布局、交互、外观等），以更好的适应可视化任务。
数据全部来自于词向量、分类器等模型，与原示例无关。


[//]: # (git subtree push  --prefix dist origin gh-pages)