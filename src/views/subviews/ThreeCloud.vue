<template>
  <div id="container" class="container_box"></div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "ThreeCloud",
  data() {
    return {}
  },
  methods: {
    _init() {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      const mesh = new THREE.Mesh(
          new THREE.Geometry(),
          new THREE.MeshBasicMaterial({color: 0x00ff00}),
      );
      // 创建数据集
      const data = this.createData();


      // 添加数据到网格中
      const geometry = new THREE.Geometry();
      for (const datum of data) {
        const {x, y, z, scale} = datum;
        const vertex = new THREE.Vector3(x, y, z);
        geometry.vertices.push(vertex);
        geometry.colors.push(new THREE.Color(0xffffff));
      }

      // 调整网格的几何形状和材质
      geometry.colorsNeedUpdate = true;
      mesh.geometry = geometry;
      mesh.material.vertexColors = THREE.VertexColors;
      // 设置渲染器的大小
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$el.appendChild(renderer.domElement);
      // 把网格添加到场景中
      scene.add(mesh);

      // 通过相机来渲染3D词云图
      camera.position.z = 5;
      renderer.render(scene, camera);
    },
    // 定义一个构造函数来创建一个简单的数据集
    createData() {
      const data = [];
      for (let i = 0; i < 100; i++) {
        const text = "hello world";
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 0.5;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = Math.random() * 0.5;
        const scale = Math.random() * 0.5 + 0.5;

        // 保存词的位置和尺寸
        data.push({text, x, y, z, scale});
      }
      return data;
    }

  },
  mounted() {
    this._init();
  }
}
</script>

<style scoped>

</style>
