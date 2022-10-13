<template>
  <div id="proot" v-loading="loading">
    <div id="box">
      <el-input v-model="inputSentence"/>
      <el-select v-model="value" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" v-on:click="handleClick">生成</el-button>
      <div id="sentenceBox" >
        <p class="sen" v-for="item in sentences">{{ item }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import '../assets/style/font.less';
import {generatePoem} from "@/api/api"
import {generateAcrostic} from "@/api/api"
import {queryRelatedSentence} from "@/api/api"

export default {
  name: "GeneratePoem",
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
      options: [{
        value: 'generatePoem',
        label: '续写诗词'
      }, {
        value: 'generateAcrostic',
        label: '生成藏头诗'
      }, {
        value: 'querySameSentence',
        label: '查找相近诗句'
      },],
      value: "generatePoem"
    }
  },
  methods: {
    handleClick() {
      if (this.selectEnum.generatePoem === this.value) {
        this.loading = true
        this.generatePoem10(this.inputSentence).then(() => {
          this.loading = false
        }).catch((err) => {
          console.log(err)
          this.loading = false
          alert("出错了")
        })
      } else if (this.selectEnum.generateAcrostic === this.value) {
        this.loading = true
        this.generateAcrostic10(this.inputSentence).then(() => {
          this.loading = false
        }).catch((err) => {
          this.loading = false
          alert("出错了")
        })
      } else if (this.selectEnum.querySameSentence === this.value) {
        this.loading = true
        this.queryRelatedSentence(this.inputSentence).then(() => {
          this.loading = false
        }).catch((err) => {
          this.loading = false
          alert("出错了")
        })
      }
    },
    generatePoem10(sentence) {
      let data = {
        "text": sentence,
      }
      return generatePoem(data).then((res) => {
        var sens = res.data.data
        this.sentences = sens.split("。")
        this.sentences = this.sentences.map((item) => {
          if (item.length > 0) {
            return item + "。"
          } else {
            return item
          }
        })
      })
    },
    generateAcrostic10(sentence) {
      return generateAcrostic(sentence).then((res) => {
        var sens = res.data.data
        this.sentences = sens.splice("。")
        this.sentences.map((item) => {
          if (len(item) > 0) {
            return item + "。"
          } else {
            return item
          }
        })
      })
    },
    queryRelatedSentence10() {
      return queryRelatedSentence(sentence).then((res) => {
        var sens = res.data.data
        this.sentences = sens.splice("。")
        this.sentences.map((item) => {
          return item + "。"
        })
      })
    }
  }
}
</script>

<style scoped>
#proot {
  display: flex;
  justify-content: center;
  /*flex-shrink: 0;*/
  align-items: center;
  /*overflow-y: scroll;*/
}

#box {
  display: block;
  position: absolute;
  /*overflow: scroll;*/
  /*flex-shrink: 0;*/
  top: 10%;
}

/*#sentenceBox{*/
/*  display: block;*/
/*  position: absolute;*/

/*  top:15%*/
/*}*/
/*#box .el-button {*/
/*  position: absolute;*/
/*  left: 100%;*/
/*}*/
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