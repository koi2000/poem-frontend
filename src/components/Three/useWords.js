import { useRef } from "react";


export default () => {
  const arr = useRef(new Set());
  return (size) => {
    let nowNum = Math.floor(Math.random() * data.length);
    if(nowNum===data.length)
        nowNum--;
    if (size <= data.length)
      // while (arr.current.has(nowNum)) {
      //   nowNum = Math.floor(Math.random() * data.length);
      //   console.log(123);

      // }
    arr.current.add(nowNum);
    return data[nowNum];
  };
};

export function randomWord() {}

export const data = [
  {
    name: "阿里",
    url: "https://www.alibabagroup.com/",
    weight: 5,
  },
  {
    name: "百度",
    url: "https://home.baidu.com/",
    weight: 5,
  },
  {
    name: "腾讯",
    url: "https://www.tencent.com/zh-cn/",
    weight: 5,
  },
  {
    name: "字节",
    url: "https://www.bytedance.com/",
    weight: 5,
  },
  {
    name: "美团",
    url: "https://jimo.meituan.com/",
    weight: 3,
  },
  {
    name: "网易",
    url: "https://www.163.com/ipad",
    weight: 4,
  },
  {
    name: "滴滴",
    url: "https://www.didiglobal.com/",
    weight: 2,
  },
  {
    name: "中科大",
    url: "https://www.ustc.edu.cn/",
    weight: 5,
  },
  {
    name: "山建",
    url: "https://www.sdjzu.edu.cn/",
    weight: 2,
  },
  {
    name: "山大",
    url: "https://www.sdu.edu.cn/",
    weight: 5,
  },
];
