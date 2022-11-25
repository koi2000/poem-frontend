<template>

  <div id="qroot" v-loading="loading">

    <div id="box">
      <el-input v-model="inputSentence" placeholder="请输入诗句"/>
      <el-input v-model="precision"
                placeholder="请输入查找的精度"/>
      <el-button type="primary" v-on:click="handleClick">生成</el-button>

      <div id="sentenceBox">
        <p class="sen" v-for="item in sentences">{{ item }}</p>
      </div>
    </div>

  </div>

</template>

<script>
import '../assets/style/xing.less';
import {generatePoem} from "@/api/api"
import {generateAcrostic} from "@/api/api"
import {queryRelatedSentence, generatePoemByGPT} from "@/api/api"
import {Message} from "element-ui";

export default {
  name: "QueryPoem",
  data() {
    return {
      loading: false,
      sentences: [],
      error: "",
      selectEnum: {
        generatePoem: "generatePoem",
        generateAcrostic: "generateAcrostic",
        querySameSentence: "querySameSentence"
      },
      inputSentence: "",
      precision: ""
    }
  },
  methods: {
    handlePromise(promise) {
      promise.then(() => {
        this.loading = false
      }).catch((err) => {
        console.log(err)
        this.loading = false
        Message.error(err)
        // alert("出错了")
      })
    },
    handleClick() {
      if(this.inputSentence===""){
        Message.error("输入的句子不能为空");
        return
      }
      let precision = 10000
      if(this.precision!==""){
        precision = this.precision
      }
      this.loading = true
      this.handlePromise(this.queryRelatedSentence10(this.inputSentence, precision))
    },
    queryRelatedSentence10(sentence, precision) {
      let data = {
        "text": sentence,
        "precision": precision,
        "number": 10
      }
      return queryRelatedSentence(data).then((res) => {
        this.sentences = res.data.data
        // this.sentences.map((item) => {
        //   return item[0]
        // })
      })
    }
  }
}
</script>

<style scoped>
#qroot {
  display: flex;

  flex-direction: column;
  align-items: center;
  /*overflow-y: scroll;*/
  height: 100%;
  top: 10%;
}

#box {
  display: block;
  margin-top: 20px;
  /*top: 20%;*/
}

#sentenceBox {
  overflow: auto;
  justify-content: center;
  text-align: center;
}

.el-input {
  width: 200px;
}

.sen {
  font-family: 'xing';
  font-size: 25px;
  font-weight: 20;
  color: #555;
}
</style>
