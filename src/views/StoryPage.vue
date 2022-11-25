<template>
  <div id="atroot">
    <WordCloud/>
  </div>
</template>

<script>

import WordCloud from "@/views/subviews/WordCloud";
export default {
  name: "StoryPage",
  components: {WordCloud},
  data() {
    return {

    }
  },
  mounted() {

  },
  methods() {

  }
}
</script>

<style scoped>
#atroot {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  padding-top: 5%;
  background: url('../assets/sunps.png');
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
}


</style>
