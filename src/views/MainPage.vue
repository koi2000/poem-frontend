<template>
  <div>
    <el-button type="primary" v-on:click="() => {
      this.$router.push({path: '/GeneratePoem'})
    }">诗词查找与生成
    </el-button>
    <el-button type="primary" v-on:click="() => {
      this.$router.push({path: '/WordConnect'})
    }">查看关联词
    </el-button>
  </div>
</template>

<script>
export default {
  name: "MainPage",
}
</script>

<style scoped>

</style>