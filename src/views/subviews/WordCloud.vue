<template>
  <div ref="wordcloud" class="wordcloud"></div>
</template>

<script>

import echarts from 'echarts'
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";

export default {
  name: 'WordCloud',
  data() {
    return {
      wordList: [
        {
          name: "珍珠奶茶",
          value: 15000
        },
        {
          name: "冰激凌红茶",
          value: 10081
        },
        {
          name: "椰果奶茶",
          value: 9386
        },
        {
          name: "波霸奶茶",
          value: 7500
        },
        {
          name: "金桔柠檬",
          value: 7500
        },
        {
          name: "乌龙奶茶",
          value: 6500
        },
        {
          name: "芒果欧蕾",
          value: 6500
        },
        {
          name: "仙草奶茶",
          value: 6000
        },
        {
          name: "翡翠柠檬",
          value: 4500
        },
        {
          name: "芒果养乐多",
          value: 3800
        },
        {
          name: "柠檬养乐多",
          value: 3000
        },
        {
          name: "波霸奶绿",
          value: 2500
        },
        {
          name: "四季春茶",
          value: 2300
        },
        {
          name: "茉莉绿茶",
          value: 2000
        },
        {
          name: "阿萨姆红茶",
          value: 1900
        },
        {
          name: "奶冻摇摇乐",
          value: 1800
        },
        {
          name: "冻顶乌龙茶",
          value: 1700
        },
        {
          name: "咖啡",
          value: 1600
        },
        {
          name: "焦糖玛奇朵",
          value: 1500
        },
        {
          name: "金桔柠檬",
          value: 1200
        },
      ],
      value: [
        {
          name: " 没有",
          value: 30,
        },
        {
          name: " 屏幕",
          value: 24
        },
        {
          name: " 不错",
          value: 21
        },
        {
          name: " 可以",
          value: 19
        },
        {
          name: " 发货",
          value: 18
        },
        {
          name: " 这个",
          value: 18
        },
        {
          name: " 什么",
          value: 17
        },
        {
          name: " 一个",
          value: 12
        },
        {
          name: " 不好",
          value: 12
        },
        {
          name: " 质量",
          value: 11
        },
        {
          name: " 快递",
          value: 11
        },
        {
          name: " 问题",
          value: 10
        },
        {
          name: " 物流",
          value: 9
        },
        {
          name: " 几天",
          value: 9
        },
        {
          name: " 一般",
          value: 9
        },
        {
          name: " 就是",
          value: 9
        },
        {
          name: " 使用",
          value: 8
        },
        {
          name: " 怎么",
          value: 8
        },
        {
          name: " 电池",
          value: 8
        },
        {
          name: " 不能",
          value: 8
        },
        {
          name: " 速度",
          value: 8
        },
        {
          name: " 客服",
          value: 8
        },
        {
          name: " 一星",
          value: 8
        },
        {
          name: " 拍照",
          value: 8
        },
        {
          name: " 摄像头",
          value: 7
        },
        {
          name: " 外观",
          value: 7
        },
        {
          name: " 包装",
          value: 7
        },
        {
          name: " 到货",
          value: 7
        },
        {
          name: " 有点",
          value: 7
        },
        {
          name: " 抢购",
          value: 6
        },
        {
          name: " 这样",
          value: 6
        },
        {
          name: " 性价比",
          value: 6
        },
        {
          name: " 一般般",
          value: 6
        },
        {
          name: " 出现",
          value: 6
        },
        {
          name: " 以前",
          value: 6
        },
        {
          name: " 知道",
          value: 6
        },
        {
          name: " 一次",
          value: 6
        },
        {
          name: " 真的",
          value: 6
        },
        {
          name: " 收到",
          value: 6
        },
        {
          name: " 其他",
          value: 6
        },
        {
          name: " 电量",
          value: 6
        },
        {
          name: " 还是",
          value: 6
        },
        {
          name: " 不行",
          value: 6
        },
        {
          name: " 红米",
          value: 6
        },
        {
          name: " 那么",
          value: 6
        },
        {
          name: " 挺快",
          value: 5
        },
        {
          name: " 现在",
          value: 5
        },
        {
          name: " 服务",
          value: 5
        },
        {
          name: " 充电",
          value: 5
        },
        {
          name: " 流畅",
          value: 5
        },
        {
          name: " 系统",
          value: 5
        },
        {
          name: " 非常",
          value: 5
        },
        {
          name: " 满意",
          value: 5
        },
        {
          name: " 购物",
          value: 5
        },
        {
          name: " 玩游戏",
          value: 5
        },
        {
          name: " 信号",
          value: 5
        },
        {
          name: " 不了",
          value: 5
        },
        {
          name: " 别人",
          value: 5
        },
        {
          name: " 死机",
          value: 5
        },
        {
          name: " 耗电",
          value: 5
        },
        {
          name: " 一直",
          value: 5
        },
        {
          name: " 像素",
          value: 5
        },
        {
          name: " 第一次",
          value: 5
        },
        {
          name: " 广告",
          value: 5
        },
        {
          name: " 买个",
          value: 5
        },
        {
          name: " 黑屏",
          value: 5
        },
        {
          name: " 为什么",
          value: 4
        },
        {
          name: " 猴王",
          value: 4
        },
        {
          name: " 视频",
          value: 4
        },
        {
          name: " 体验",
          value: 4
        },
        {
          name: " 好评",
          value: 4
        },
        {
          name: " 闪屏",
          value: 4
        },
        {
          name: " 价格",
          value: 4
        },
        {
          name: " 饥饿",
          value: 4
        },
        {
          name: " 营销",
          value: 4
        },
        {
          name: " 发热",
          value: 4
        },
        {
          name: " 还行",
          value: 4
        },
        {
          name: " 一天",
          value: 4
        },
        {
          name: " 需要",
          value: 4
        },
        {
          name: " 特别",
          value: 4
        },
        {
          name: " 而且",
          value: 4
        },
        {
          name: " 运行",
          value: 4
        },
        {
          name: " 等到",
          value: 4
        },
        {
          name: " 手机卡",
          value: 4
        },
        {
          name: " 呵呵",
          value: 4
        },
        {
          name: " 时候",
          value: 4
        },
        {
          name: " 东西",
          value: 4
        },
        {
          name: " 感觉",
          value: 4
        },
        {
          name: " 卡机",
          value: 4
        },
        {
          name: " 没什么",
          value: 4
        },
        {
          name: " 大家",
          value: 4
        },
        {
          name: " 没货",
          value: 4
        },
        {
          name: " 售后",
          value: 4
        },
        {
          name: " 比较",
          value: 4
        },
        {
          name: " 退货",
          value: 4
        },
        {
          name: " 加价",
          value: 3
        },
        {
          name: " 耳机",
          value: 3
        },
        {
          name: " 呜呜",
          value: 3
        },
        {
          name: " 一分钱",
          value: 3
        },
        {
          name: " 一分货",
          value: 3
        },
        {
          name: " 默认",
          value: 3
        },
        {
          name: " 说好",
          value: 3
        },
        {
          name: " 你们",
          value: 3
        },
        {
          name: " 一点",
          value: 3
        },
        {
          name: " 超级",
          value: 3
        },
        {
          name: " 耐用",
          value: 3
        },
        {
          name: " 很快",
          value: 3
        },
        {
          name: " 断流",
          value: 3
        },
        {
          name: " 套装",
          value: 3
        },
        {
          name: " 一样",
          value: 3
        },
        {
          name: " 发票",
          value: 3
        },
        {
          name: " 买回来",
          value: 3
        },
        {
          name: " 软件",
          value: 3
        },
        {
          name: " 还好",
          value: 3
        },
        {
          name: " 以后",
          value: 3
        },
        {
          name: " 下单",
          value: 3
        },
        {
          name: " 打游戏",
          value: 3
        },
        {
          name: " 我们",
          value: 3
        },
        {
          name: " 但是",
          value: 3
        },
        {
          name: " 一部",
          value: 3
        },
        {
          name: " 王者",
          value: 3
        },
        {
          name: " 不怎么样",
          value: 3
        },
        {
          name: " 看看",
          value: 3
        },
        {
          name: " 自己",
          value: 3
        },
        {
          name: " 里面",
          value: 3
        },
        {
          name: " 边框",
          value: 3
        },
        {
          name: " 看着",
          value: 3
        },
        {
          name: " 要死",
          value: 3
        },
        {
          name: " 原因",
          value: 3
        },
        {
          name: " 新机",
          value: 3
        },
        {
          name: " 不如",
          value: 3
        },
        {
          name: " 老是",
          value: 3
        },
        {
          name: " 购买",
          value: 3
        },
        {
          name: " 更好",
          value: 3
        },
        {
          name: " 相机",
          value: 3
        },
        {
          name: " 竟然",
          value: 3
        },
        {
          name: " 一分",
          value: 3
        },
        {
          name: " 天才",
          value: 3
        },
        {
          name: " 荣耀",
          value: 3
        },
        {
          name: " 正常",
          value: 3
        },
        {
          name: " 回复",
          value: 3
        },
        {
          name: " 联系",
          value: 3
        },
        {
          name: " 总体",
          value: 3
        },
        {
          name: " 反应",
          value: 3
        },
        {
          name: " 老爸",
          value: 3
        },
        {
          name: " 星期",
          value: 3
        },
        {
          name: " 半个",
          value: 3
        },
        {
          name: " 打电话",
          value: 3
        },
        {
          name: " 不是",
          value: 3
        },
        {
          name: " 保护膜",
          value: 3
        },
        {
          name: " 充电器",
          value: 3
        },
        {
          name: " 买不到",
          value: 2
        },
        {
          name: " 老子",
          value: 2
        },
        {
          name: " 差评",
          value: 2
        },
        {
          name: " 这么",
          value: 2
        },
        {
          name: " 真香",
          value: 2
        },
        {
          name: " 真是",
          value: 2
        },
        {
          name: " 三天",
          value: 2
        },
        {
          name: " 填写内容",
          value: 2
        },
        {
          name: " 帮别人",
          value: 2
        },
        {
          name: " 终于",
          value: 2
        },
        {
          name: " 有时候",
          value: 2
        },
        {
          name: " 极致",
          value: 2
        },
        {
          name: " 还有",
          value: 2
        },
        {
          name: " 希望",
          value: 2
        },
        {
          name: " 必须",
          value: 2
        },
        {
          name: " 好像",
          value: 2
        },
        {
          name: " 严重",
          value: 2
        },
        {
          name: " 反应速度",
          value: 2
        },
        {
          name: " 后面",
          value: 2
        },
        {
          name: " 音乐",
          value: 2
        },
        {
          name: " 商品",
          value: 2
        },
        {
          name: " 哈哈",
          value: 2
        },
        {
          name: " 垃圾",
          value: 2
        },
        {
          name: " 好用",
          value: 2
        },
        {
          name: " 突出",
          value: 2
        },
        {
          name: " 价钱",
          value: 2
        },
        {
          name: " 耍猴",
          value: 2
        },
        {
          name: " 磕碰",
          value: 2
        },
        {
          name: " 几次",
          value: 2
        },
        {
          name: " 失灵",
          value: 2
        },
        {
          name: " 支持",
          value: 2
        },
        {
          name: " 快充",
          value: 2
        },
        {
          name: " 意思",
          value: 2
        },
        {
          name: " 失败",
          value: 2
        },
        {
          name: " 整整",
          value: 2
        },
        {
          name: " 没收",
          value: 2
        },
        {
          name: " 已经",
          value: 2
        },
        {
          name: " 无法",
          value: 2
        },
        {
          name: " 方面",
          value: 2
        },
        {
          name: " 为啥",
          value: 2
        },
        {
          name: " 喜欢",
          value: 2
        },
        {
          name: " 套餐",
          value: 2
        },
        {
          name: " 完全",
          value: 2
        },
        {
          name: " 专业",
          value: 2
        },
        {
          name: " 选择",
          value: 2
        },
        {
          name: " 48mp",
          value: 2
        },
        {
          name: " 无线",
          value: 2
        },
        {
          name: " 一个月",
          value: 2
        },
        {
          name: " 不过",
          value: 2
        },
        {
          name: " ldquo",
          value: "-"
        },
        {
          name: " rdquo",
          value: "-"
        },
        {
          name: " 这种",
          value: 2
        },
        {
          name: " 送货",
          value: 2
        },
        {
          name: " 卡死",
          value: 2
        },
        {
          name: " 来看",
          value: 2
        },
        {
          name: " 糊弄人",
          value: 2
        },
        {
          name: " note7",
          value: 2
        },
        {
          name: " 时间",
          value: 2
        },
        {
          name: " 短信",
          value: 2
        },
        {
          name: " 滑落",
          value: 2
        },
        {
          name: " 那样",
          value: 2
        },
        {
          name: " vivo",
          value: 2
        },
        {
          name: " 防水",
          value: 2
        },
        {
          name: " 等待",
          value: 2
        },
        {
          name: " 直播",
          value: 2
        },
        {
          name: " 难受",
          value: 2
        },
        {
          name: " 四个",
          value: 2
        },
        {
          name: " 到手",
          value: 2
        },
        {
          name: " 发现",
          value: 2
        },
        {
          name: " 掉电",
          value: 2
        },
        {
          name: " 华为",
          value: 2
        },
        {
          name: " 再也",
          value: 2
        },
        {
          name: " 不用",
          value: 2
        },
        {
          name: " 给力",
          value: 2
        },
        {
          name: " 两天",
          value: 2
        },
        {
          name: " 立马",
          value: 2
        },
        {
          name: " 两周",
          value: 2
        },
        {
          name: " 处理器",
          value: 2
        },
        {
          name: " 关机",
          value: 2
        },
        {
          name: " 要么",
          value: 2
        },
        {
          name: " 满血",
          value: 2
        },
        {
          name: " 不会",
          value: 2
        },
        {
          name: " 定金",
          value: 2
        },
        {
          name: " 付款",
          value: 2
        },
        {
          name: " 心情",
          value: 2
        },
        {
          name: " 另外",
          value: 2
        },
        {
          name: " 游戏",
          value: 2
        },
        {
          name: " 公司",
          value: 2
        },
        {
          name: " 按键",
          value: 2
        },
        {
          name: " 卡顿",
          value: 2
        },
        {
          name: " 晚上",
          value: 2
        },
        {
          name: " 百分之",
          value: 2
        },
        {
          name: " 手机信号",
          value: 2
        },
        {
          name: " 一下",
          value: 2
        },
        {
          name: " 开学",
          value: 2
        },
        {
          name: " 上班",
          value: 2
        },
        {
          name: " 上天",
          value: 2
        },
        {
          name: " 配送",
          value: 2
        },
        {
          name: " 最后",
          value: 2
        },
        {
          name: " 太慢",
          value: 2
        },
        {
          name: " 手机套",
          value: 2
        },
        {
          name: " 笨重",
          value: 2
        },
        {
          name: " 半年",
          value: 2
        },
        {
          name: " 屏险",
          value: 2
        },
        {
          name: " 先发",
          value: 2
        },
        {
          name: " 不灵敏",
          value: 2
        },
        {
          name: " 硬度",
          value: 2
        },
        {
          name: " 这次",
          value: 2
        },
        {
          name: " 性能",
          value: 2
        },
        {
          name: " 介绍",
          value: 2
        },
        {
          name: " 卡针",
          value: 2
        },
        {
          name: " 不理",
          value: 2
        },
        {
          name: " 这是",
          value: 2
        },
        {
          name: " 买来",
          value: 2
        },
        {
          name: " 两次",
          value: 2
        },
        {
          name: " 网络",
          value: 2
        },
        {
          name: " 就裂",
          value: 2
        },
        {
          name: " 没用",
          value: 2
        },
        {
          name: " 多次",
          value: 2
        },
        {
          name: " 钢化",
          value: 2
        },
        {
          name: " 一星怪",
          value: 1
        },
        {
          name: " 新款",
          value: 1
        },
        {
          name: " 你行",
          value: 1
        },
        {
          name: " 没送",
          value: 1
        },
        {
          name: " 一个多",
          value: 1
        },
        {
          name: " 礼拜",
          value: 1
        },
        {
          name: " 只能",
          value: 1
        },
        {
          name: " 价位",
          value: 1
        },
        {
          name: " 闪退",
          value: 1
        },
        {
          name: " 抢到",
          value: 1
        },
        {
          name: " 其它",
          value: 1
        },
        {
          name: " 便宜",
          value: 1
        },
        {
          name: " 两百",
          value: 1
        },
        {
          name: " 盈利",
          value: 1
        },
        {
          name: " 机智",
          value: 1
        },
        {
          name: " 更新换代",
          value: 1
        },
        {
          name: " 太乱",
          value: 1
        },
        {
          name: " 赔付",
          value: 1
        },
        {
          name: " 自营",
          value: 1
        },
        {
          name: " 产品",
          value: 1
        },
        {
          name: " 手持",
          value: 1
        },
        {
          name: " 夜景",
          value: 1
        },
        {
          name: " 机子",
          value: 1
        },
        {
          name: " 拆过",
          value: 1
        }],
    }
  },
  methods: {
    initChart() {
      let myChart = echarts.init(this.$refs.wordcloud);
      var data = {
        value: [
          {
            name: " 没有",
            value: 30,
          },
          {
            name: " 屏幕",
            value: 24
          },
          {
            name: " 不错",
            value: 21
          },
          {
            name: " 可以",
            value: 19
          },
          {
            name: " 发货",
            value: 18
          },
          {
            name: " 这个",
            value: 18
          },
          {
            name: " 什么",
            value: 17
          },
          {
            name: " 一个",
            value: 12
          },
          {
            name: " 不好",
            value: 12
          },
          {
            name: " 质量",
            value: 11
          },
          {
            name: " 快递",
            value: 11
          },
          {
            name: " 问题",
            value: 10
          },
          {
            name: " 物流",
            value: 9
          },
          {
            name: " 几天",
            value: 9
          },
          {
            name: " 一般",
            value: 9
          },
          {
            name: " 就是",
            value: 9
          },
          {
            name: " 使用",
            value: 8
          },
          {
            name: " 怎么",
            value: 8
          },
          {
            name: " 电池",
            value: 8
          },
          {
            name: " 不能",
            value: 8
          },
          {
            name: " 速度",
            value: 8
          },
          {
            name: " 客服",
            value: 8
          },
          {
            name: " 一星",
            value: 8
          },
          {
            name: " 拍照",
            value: 8
          },
          {
            name: " 摄像头",
            value: 7
          },
          {
            name: " 外观",
            value: 7
          },
          {
            name: " 包装",
            value: 7
          },
          {
            name: " 到货",
            value: 7
          },
          {
            name: " 有点",
            value: 7
          },
          {
            name: " 抢购",
            value: 6
          },
          {
            name: " 这样",
            value: 6
          },
          {
            name: " 性价比",
            value: 6
          },
          {
            name: " 一般般",
            value: 6
          },
          {
            name: " 出现",
            value: 6
          },
          {
            name: " 以前",
            value: 6
          },
          {
            name: " 知道",
            value: 6
          },
          {
            name: " 一次",
            value: 6
          },
          {
            name: " 真的",
            value: 6
          },
          {
            name: " 收到",
            value: 6
          },
          {
            name: " 其他",
            value: 6
          },
          {
            name: " 电量",
            value: 6
          },
          {
            name: " 还是",
            value: 6
          },
          {
            name: " 不行",
            value: 6
          },
          {
            name: " 红米",
            value: 6
          },
          {
            name: " 那么",
            value: 6
          },
          {
            name: " 挺快",
            value: 5
          },
          {
            name: " 现在",
            value: 5
          },
          {
            name: " 服务",
            value: 5
          },
          {
            name: " 充电",
            value: 5
          },
          {
            name: " 流畅",
            value: 5
          },
          {
            name: " 系统",
            value: 5
          },
          {
            name: " 非常",
            value: 5
          },
          {
            name: " 满意",
            value: 5
          },
          {
            name: " 购物",
            value: 5
          },
          {
            name: " 玩游戏",
            value: 5
          },
          {
            name: " 信号",
            value: 5
          },
          {
            name: " 不了",
            value: 5
          },
          {
            name: " 别人",
            value: 5
          },
          {
            name: " 死机",
            value: 5
          },
          {
            name: " 耗电",
            value: 5
          },
          {
            name: " 一直",
            value: 5
          },
          {
            name: " 像素",
            value: 5
          },
          {
            name: " 第一次",
            value: 5
          },
          {
            name: " 广告",
            value: 5
          },
          {
            name: " 买个",
            value: 5
          },
          {
            name: " 黑屏",
            value: 5
          },
          {
            name: " 为什么",
            value: 4
          },
          {
            name: " 猴王",
            value: 4
          },
          {
            name: " 视频",
            value: 4
          },
          {
            name: " 体验",
            value: 4
          },
          {
            name: " 好评",
            value: 4
          },
          {
            name: " 闪屏",
            value: 4
          },
          {
            name: " 价格",
            value: 4
          },
          {
            name: " 饥饿",
            value: 4
          },
          {
            name: " 营销",
            value: 4
          },
          {
            name: " 发热",
            value: 4
          },
          {
            name: " 还行",
            value: 4
          },
          {
            name: " 一天",
            value: 4
          },
          {
            name: " 需要",
            value: 4
          },
          {
            name: " 特别",
            value: 4
          },
          {
            name: " 而且",
            value: 4
          },
          {
            name: " 运行",
            value: 4
          },
          {
            name: " 等到",
            value: 4
          },
          {
            name: " 手机卡",
            value: 4
          },
          {
            name: " 呵呵",
            value: 4
          },
          {
            name: " 时候",
            value: 4
          },
          {
            name: " 东西",
            value: 4
          },
          {
            name: " 感觉",
            value: 4
          },
          {
            name: " 卡机",
            value: 4
          },
          {
            name: " 没什么",
            value: 4
          },
          {
            name: " 大家",
            value: 4
          },
          {
            name: " 没货",
            value: 4
          },
          {
            name: " 售后",
            value: 4
          },
          {
            name: " 比较",
            value: 4
          },
          {
            name: " 退货",
            value: 4
          },
          {
            name: " 加价",
            value: 3
          },
          {
            name: " 耳机",
            value: 3
          },
          {
            name: " 呜呜",
            value: 3
          },
          {
            name: " 一分钱",
            value: 3
          },
          {
            name: " 一分货",
            value: 3
          },
          {
            name: " 默认",
            value: 3
          },
          {
            name: " 说好",
            value: 3
          },
          {
            name: " 你们",
            value: 3
          },
          {
            name: " 一点",
            value: 3
          },
          {
            name: " 超级",
            value: 3
          },
          {
            name: " 耐用",
            value: 3
          },
          {
            name: " 很快",
            value: 3
          },
          {
            name: " 断流",
            value: 3
          },
          {
            name: " 套装",
            value: 3
          },
          {
            name: " 一样",
            value: 3
          },
          {
            name: " 发票",
            value: 3
          },
          {
            name: " 买回来",
            value: 3
          },
          {
            name: " 软件",
            value: 3
          },
          {
            name: " 还好",
            value: 3
          },
          {
            name: " 以后",
            value: 3
          },
          {
            name: " 下单",
            value: 3
          },
          {
            name: " 打游戏",
            value: 3
          },
          {
            name: " 我们",
            value: 3
          },
          {
            name: " 但是",
            value: 3
          },
          {
            name: " 一部",
            value: 3
          },
          {
            name: " 王者",
            value: 3
          },
          {
            name: " 不怎么样",
            value: 3
          },
          {
            name: " 看看",
            value: 3
          },
          {
            name: " 自己",
            value: 3
          },
          {
            name: " 里面",
            value: 3
          },
          {
            name: " 边框",
            value: 3
          },
          {
            name: " 看着",
            value: 3
          },
          {
            name: " 要死",
            value: 3
          },
          {
            name: " 原因",
            value: 3
          },
          {
            name: " 新机",
            value: 3
          },
          {
            name: " 不如",
            value: 3
          },
          {
            name: " 老是",
            value: 3
          },
          {
            name: " 购买",
            value: 3
          },
          {
            name: " 更好",
            value: 3
          },
          {
            name: " 相机",
            value: 3
          },
          {
            name: " 竟然",
            value: 3
          },
          {
            name: " 一分",
            value: 3
          },
          {
            name: " 天才",
            value: 3
          },
          {
            name: " 荣耀",
            value: 3
          },
          {
            name: " 正常",
            value: 3
          },
          {
            name: " 回复",
            value: 3
          },
          {
            name: " 联系",
            value: 3
          },
          {
            name: " 总体",
            value: 3
          },
          {
            name: " 反应",
            value: 3
          },
          {
            name: " 老爸",
            value: 3
          },
          {
            name: " 星期",
            value: 3
          },
          {
            name: " 半个",
            value: 3
          },
          {
            name: " 打电话",
            value: 3
          },
          {
            name: " 不是",
            value: 3
          },
          {
            name: " 保护膜",
            value: 3
          },
          {
            name: " 充电器",
            value: 3
          },
          {
            name: " 买不到",
            value: 2
          },
          {
            name: " 老子",
            value: 2
          },
          {
            name: " 差评",
            value: 2
          },
          {
            name: " 这么",
            value: 2
          },
          {
            name: " 真香",
            value: 2
          },
          {
            name: " 真是",
            value: 2
          },
          {
            name: " 三天",
            value: 2
          },
          {
            name: " 填写内容",
            value: 2
          },
          {
            name: " 帮别人",
            value: 2
          },
          {
            name: " 终于",
            value: 2
          },
          {
            name: " 有时候",
            value: 2
          },
          {
            name: " 极致",
            value: 2
          },
          {
            name: " 还有",
            value: 2
          },
          {
            name: " 希望",
            value: 2
          },
          {
            name: " 必须",
            value: 2
          },
          {
            name: " 好像",
            value: 2
          },
          {
            name: " 严重",
            value: 2
          },
          {
            name: " 反应速度",
            value: 2
          },
          {
            name: " 后面",
            value: 2
          },
          {
            name: " 音乐",
            value: 2
          },
          {
            name: " 商品",
            value: 2
          },
          {
            name: " 哈哈",
            value: 2
          },
          {
            name: " 垃圾",
            value: 2
          },
          {
            name: " 好用",
            value: 2
          },
          {
            name: " 突出",
            value: 2
          },
          {
            name: " 价钱",
            value: 2
          },
          {
            name: " 耍猴",
            value: 2
          },
          {
            name: " 磕碰",
            value: 2
          },
          {
            name: " 几次",
            value: 2
          },
          {
            name: " 失灵",
            value: 2
          },
          {
            name: " 支持",
            value: 2
          },
          {
            name: " 快充",
            value: 2
          },
          {
            name: " 意思",
            value: 2
          },
          {
            name: " 失败",
            value: 2
          },
          {
            name: " 整整",
            value: 2
          },
          {
            name: " 没收",
            value: 2
          },
          {
            name: " 已经",
            value: 2
          },
          {
            name: " 无法",
            value: 2
          },
          {
            name: " 方面",
            value: 2
          },
          {
            name: " 为啥",
            value: 2
          },
          {
            name: " 喜欢",
            value: 2
          },
          {
            name: " 套餐",
            value: 2
          },
          {
            name: " 完全",
            value: 2
          },
          {
            name: " 专业",
            value: 2
          },
          {
            name: " 选择",
            value: 2
          },
          {
            name: " 48mp",
            value: 2
          },
          {
            name: " 无线",
            value: 2
          },
          {
            name: " 一个月",
            value: 2
          },
          {
            name: " 不过",
            value: 2
          },
          {
            name: " ldquo",
            value: "-"
          },
          {
            name: " rdquo",
            value: "-"
          },
          {
            name: " 这种",
            value: 2
          },
          {
            name: " 送货",
            value: 2
          },
          {
            name: " 卡死",
            value: 2
          },
          {
            name: " 来看",
            value: 2
          },
          {
            name: " 糊弄人",
            value: 2
          },
          {
            name: " note7",
            value: 2
          },
          {
            name: " 时间",
            value: 2
          },
          {
            name: " 短信",
            value: 2
          },
          {
            name: " 滑落",
            value: 2
          },
          {
            name: " 那样",
            value: 2
          },
          {
            name: " vivo",
            value: 2
          },
          {
            name: " 防水",
            value: 2
          },
          {
            name: " 等待",
            value: 2
          },
          {
            name: " 直播",
            value: 2
          },
          {
            name: " 难受",
            value: 2
          },
          {
            name: " 四个",
            value: 2
          },
          {
            name: " 到手",
            value: 2
          },
          {
            name: " 发现",
            value: 2
          },
          {
            name: " 掉电",
            value: 2
          },
          {
            name: " 华为",
            value: 2
          },
          {
            name: " 再也",
            value: 2
          },
          {
            name: " 不用",
            value: 2
          },
          {
            name: " 给力",
            value: 2
          },
          {
            name: " 两天",
            value: 2
          },
          {
            name: " 立马",
            value: 2
          },
          {
            name: " 两周",
            value: 2
          },
          {
            name: " 处理器",
            value: 2
          },
          {
            name: " 关机",
            value: 2
          },
          {
            name: " 要么",
            value: 2
          },
          {
            name: " 满血",
            value: 2
          },
          {
            name: " 不会",
            value: 2
          },
          {
            name: " 定金",
            value: 2
          },
          {
            name: " 付款",
            value: 2
          },
          {
            name: " 心情",
            value: 2
          },
          {
            name: " 另外",
            value: 2
          },
          {
            name: " 游戏",
            value: 2
          },
          {
            name: " 公司",
            value: 2
          },
          {
            name: " 按键",
            value: 2
          },
          {
            name: " 卡顿",
            value: 2
          },
          {
            name: " 晚上",
            value: 2
          },
          {
            name: " 百分之",
            value: 2
          },
          {
            name: " 手机信号",
            value: 2
          },
          {
            name: " 一下",
            value: 2
          },
          {
            name: " 开学",
            value: 2
          },
          {
            name: " 上班",
            value: 2
          },
          {
            name: " 上天",
            value: 2
          },
          {
            name: " 配送",
            value: 2
          },
          {
            name: " 最后",
            value: 2
          },
          {
            name: " 太慢",
            value: 2
          },
          {
            name: " 手机套",
            value: 2
          },
          {
            name: " 笨重",
            value: 2
          },
          {
            name: " 半年",
            value: 2
          },
          {
            name: " 屏险",
            value: 2
          },
          {
            name: " 先发",
            value: 2
          },
          {
            name: " 不灵敏",
            value: 2
          },
          {
            name: " 硬度",
            value: 2
          },
          {
            name: " 这次",
            value: 2
          },
          {
            name: " 性能",
            value: 2
          },
          {
            name: " 介绍",
            value: 2
          },
          {
            name: " 卡针",
            value: 2
          },
          {
            name: " 不理",
            value: 2
          },
          {
            name: " 这是",
            value: 2
          },
          {
            name: " 买来",
            value: 2
          },
          {
            name: " 两次",
            value: 2
          },
          {
            name: " 网络",
            value: 2
          },
          {
            name: " 就裂",
            value: 2
          },
          {
            name: " 没用",
            value: 2
          },
          {
            name: " 多次",
            value: 2
          },
          {
            name: " 钢化",
            value: 2
          },
          {
            name: " 一星怪",
            value: 1
          },
          {
            name: " 新款",
            value: 1
          },
          {
            name: " 你行",
            value: 1
          },
          {
            name: " 没送",
            value: 1
          },
          {
            name: " 一个多",
            value: 1
          },
          {
            name: " 礼拜",
            value: 1
          },
          {
            name: " 只能",
            value: 1
          },
          {
            name: " 价位",
            value: 1
          },
          {
            name: " 闪退",
            value: 1
          },
          {
            name: " 抢到",
            value: 1
          },
          {
            name: " 其它",
            value: 1
          },
          {
            name: " 便宜",
            value: 1
          },
          {
            name: " 两百",
            value: 1
          },
          {
            name: " 盈利",
            value: 1
          },
          {
            name: " 机智",
            value: 1
          },
          {
            name: " 更新换代",
            value: 1
          },
          {
            name: " 太乱",
            value: 1
          },
          {
            name: " 赔付",
            value: 1
          },
          {
            name: " 自营",
            value: 1
          },
          {
            name: " 产品",
            value: 1
          },
          {
            name: " 手持",
            value: 1
          },
          {
            name: " 夜景",
            value: 1
          },
          {
            name: " 机子",
            value: 1
          },
          {
            name: " 拆过",
            value: 1
          }],

        //小鸟图片
        image: "data:image/png;base64,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"
      }
      var maskImage = new Image();
      maskImage.src = data.image
      // maskImages.src = "data:image/png;base64,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"
      // maskImages.src = "data:image/png;base64,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"
      // maskImages.src = "data:image/png;base64,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"
      myChart.setOption({
        series: [{
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [14, 60],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [0, 0],
            maskImage: maskImage,
            //随机生成字体颜色
            // maskImage: maskImage,
            textStyle: {
              normal: {
                color: function () {
                  return (
                      "rgb(" +
                      Math.round(Math.random() * 255) +
                      ", " +
                      Math.round(Math.random() * 255) +
                      ", " +
                      Math.round(Math.random() * 255) +
                      ")"
                  );
                }
              }
            },
            //位置相关设置
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "200%",
            height: "200%",
            //数据
            data: this.value
          }]
      })

      myChart.on('click', function (params) {
        alert(params.data.name)
        console.log('myChart----click---:', params, '------', params.data.name)
      });
    }

  },
  mounted() {
    this.initChart();
  }
}
</script>

<style>
.wordcloud {
  width: 100%;
  height: 300px;
  margin: auto;
}

</style>
