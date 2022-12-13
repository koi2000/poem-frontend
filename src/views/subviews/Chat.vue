<!--<template>-->
<!--  <div id="app">-->
<!--    <div ref="container"></div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import * as THREE from 'three';-->

<!--export default {-->
<!--  name: 'App',-->
<!--  data() {-->
<!--    return {-->
<!--      wordCloudData: [-->
<!--        { text: 'Hello', size: 24 },-->
<!--        { text: 'World', size: 18 },-->
<!--        { text: 'Vue', size: 28 },-->
<!--        { text: 'Three', size: 32 },-->
<!--        { text: 'JS', size: 20 },-->
<!--      ],-->
<!--    };-->
<!--  },-->
<!--  mounted() {-->
<!--    // 创建一个新的 three.js 场景-->
<!--    const scene = new THREE.Scene();-->

<!--    // 创建一个新的摄像机，并将其设置为透视投影-->
<!--    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);-->
<!--    camera.position.z = 100;-->

<!--    // 创建一个新的渲染器-->
<!--    const renderer = new THREE.WebGLRenderer();-->

<!--    // 设置渲染器的宽度和高度，并将其添加到页面-->
<!--    renderer.setSize(window.innerWidth, window.innerHeight);-->
<!--    this.$refs.container.appendChild(renderer.domElement);-->

<!--    // 创建一个新的词云材质-->
<!--    const cloudMaterial = new THREE.PointsMaterial({-->
<!--      color: 0xffffff,-->
<!--      size: 12,-->
<!--      transparent: true,-->
<!--      blending: THREE.AdditiveBlending,-->
<!--    });-->

<!--    // 创建一个新的词云点，并将其添加到场景中-->
<!--    const cloudGeometry = new THREE.Geometry();-->
<!--    for (let i =-->
