<template>
  <div>
    <svg style="background-color: black" :width="width" :height="height">
      <a class="fontA" v-for="(tag, index) in tags" :key="`tag-${index}`">
        <text
            :id="tag.id"
            :x="tag.x"
            :y="tag.y"
            :font-size="20 * (600 / (600 - tag.z))"
            :fill-opacity="(400 + tag.z) / 600"
            @mousemove="listenerMove($event)"
            @mouseout="listenerOut($event)"
            @click="clickToPage"
        >
          {{ tag.text }}
        </text>
      </a>
    </svg>
  </div>
</template>

<script>
export default {
  name: "D3Cloud",
  //数据，宽，高，半径，半径一般位宽高的一半。
  // props: ["data", "width", "height", "RADIUS"],
  data() {
    return {
      width: 600, //svg宽度
      height: 600, //svg高度
      tagsNum: 0, //标签数量
      RADIUS: 300, //球的半径
      speedX: Math.PI / 360 / 1.5, //球一帧绕x轴旋转的角度
      speedY: Math.PI / 360 / 1.5, //球-帧绕y轴旋转的角度
      tags: [],
      data: [
        "金晨",
        "昆凌",
        "李冰冰",
        "刘诗诗",
        "刘雯",
        "刘亦菲",
        "林心如",
        "林志玲",
        "李湘",
        "李亚男",
        "李若彤",
        "李沁",
        "李嘉欣",
        "林依晨",
        "刘嘉玲",
        "闰妮",
        "李宇春",
        "李晟",
        "罗震环",
        "刘雨欣",
        "李波儿",
        "黎姿",
        "张敏",
        "梁小冰",
        "黎美娴",
        "李彩桦",
        "林允儿",
        "米雪",
        "李菲儿",
        "娄艺潇",
        "李金铭",
        "李萌萌",
      ],
      timer: null,
    };
  },
  computed: {
    CX() {
      //球心x坐标
      return this.width / 2;
    },
    CY() {
      //球心y坐标
      return this.height / 2;
    },
  },
  created() {
    this.initData();
  },
  methods: {
    // 初始化数据
    initData() {
      //初始化标签位置
      let tags = [];
      this.tagsNum = this.data.length;
      for (let i = 0; i < this.data.length; i++) {
        let tag = {};
        let k = -1 + (2 * (i + 1) - 1) / this.tagsNum;
        let a = Math.acos(k);
        let b = a * Math.sqrt(this.tagsNum * Math.PI); //计算标签相对于球心的角度
        tag.text = this.data[i];
        tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b); //根据标签角度求出标签的x,y,z坐标
        tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b);
        tag.z = this.RADIUS * Math.cos(a);
        tag.id = i; // 给标签添加id
        tags.push(tag);
        // console.log(tag);
      }
      this.tags = tags; //让vue替我们完成视图更新
    },
    // 纵向旋转
    rotateX(angleX) {
      var cos = Math.cos(angleX);
      var sin = Math.sin(angleX);
      for (let tag of this.tags) {
        var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY;
        var z1 = tag.z * cos + (tag.y - this.CY) * sin;
        tag.y = y1;
        tag.z = z1;
      }
    },
    // 横向旋转
    rotateY(angleY) {
      var cos = Math.cos(angleY);
      var sin = Math.sin(angleY);
      for (let tag of this.tags) {
        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
        var z1 = tag.z * cos + (tag.x - this.CX) * sin;
        tag.x = x1;
        tag.z = z1;
      }
    },
    // 运动函数
    runTags() {
      if (typeof this.timer === "number") {
        clearInterval(this.timer);
        this.timer = null;
      }
      let timer = setInterval(() => {
        this.rotateX(this.speedX);
        this.rotateY(this.speedY);
      }, 17);
      this.timer = timer;
    },
    // 监听移入事件
    listenerMove(e) {
      if (e.target.id) {
        clearInterval(this.timer);
      }
    },
    // 监听移出事件
    listenerOut(e) {
      if (e.target.id) {
        this.runTags();
      }
    },
    // 点击事件
    clickToPage() {},
  },
  mounted() {
    this.runTags();
  },
};
</script>


<style scoped>
.fontA {
  fill: #60cae9;
  font-weight: bold;
}
.fontA:hover {
  fill: #ffffff;
  cursor: pointer;
}
</style>
