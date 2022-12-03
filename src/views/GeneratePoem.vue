<template>
  <div id="proot" v-loading="loading">
    <div id="title"><b>请选择想要使用的模型</b> &nbsp</div>

    <div id="text"><b>请选择想要使用的模型</b> &nbsp</div>
    <el-select v-model="model" placeholder="请选择使用的模型">
      <el-option
          v-for="item in modelOption"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <div id="box">
      <el-input v-model="inputSentence"/>
      <el-select v-if="model===modelSelectEnum.LSTM" v-model="value" placeholder="LSTM中模式的选择">
        <el-option
            v-for="item in LSTMOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <el-select v-if="model===modelSelectEnum.GPT" v-model="value" placeholder="GPT中模式的选择">
        <el-option
            v-for="item in GPTOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <el-input v-if="model===modelSelectEnum.GPT&&value===selectEnum.generatePoem" v-model="poemLength"
                placeholder="请输入诗词的长度"/>
      <el-input v-if="model===modelSelectEnum.GPT&&value===selectEnum.generatePoem" v-model="poemNum"
                placeholder="请输入诗词的数量"/>
<!--      <el-input v-if="model===modelSelectEnum.LSTM&&value===selectEnum.querySameSentence" v-model="precision"-->
<!--                placeholder="请输入查找的精度"/>-->
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
  name: "GeneratePoem",
  data() {
    return {
      loading: false,
      sentences: [],
      error: "",
      modelSelectEnum: {
        GPT: "GPT",
        LSTM: "LSTM",
      },
      modelOption: [{
        value: 'GPT',
        label: 'GPT'
      }, {
        value: 'LSTM',
        label: 'LSTM'
      },],
      selectEnum: {
        generatePoem: "generatePoem",
        generateAcrostic: "generateAcrostic",
        // querySameSentence: "querySameSentence"
      },
      inputSentence: "",
      LSTMOptions: [{
        value: 'generatePoem',
        label: '续写诗词'
      }, {
        value: 'generateAcrostic',
        label: '生成藏头诗'
      },
      //   {
      //   value: 'querySameSentence',
      //   label: '查找相近诗句'
      // },
      ],
      GPTOptions: [{
        value: 'generatePoem',
        label: '续写诗词'
      },
      //   {
      //   value: 'generateAcrostic',
      //   label: '生成藏头诗'
      // }
      ],
      // 选择的模式
      value: "generatePoem",
      // 所选择的模型
      model: "GPT",
      poemNum: undefined,
      poemLength: undefined,
      errorMessage: "",
      precision: 10000
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
      if (this.model === this.modelSelectEnum.GPT) {
        this.loading = true
        this.handlePromise(this.generatePoemByGPT10(this.inputSentence, this.poemLength, this.poemNum))
      } else if (this.selectEnum.generatePoem === this.value) {
        this.loading = true
        this.handlePromise(this.generatePoem10(this.inputSentence))
      } else if (this.selectEnum.generateAcrostic === this.value) {
        this.loading = true
        this.handlePromise(this.generateAcrostic10(this.inputSentence))
      } else if (this.selectEnum.querySameSentence === this.value) {
        this.loading = true
        this.handlePromise(this.queryRelatedSentence10(this.inputSentence, this.precision))
      }
    },
    generatePoemByGPT10(sentence, poemLength, poemNum) {
      if ((poemLength > 0) && (poemNum > 0)) {
        let data = {
          "text": sentence,
          "poemLength": poemLength,
          "poemNum": poemNum
        }
        return generatePoemByGPT(data).then((res) => {
          var sens = res.data.data
          this.sentences = ""
          for (let i = 0; i < sens.length; i++) {
            this.sentences += sens[i]
          }
          this.sentences = this.sentences.split("。")
          this.sentences = this.sentences.map((item) => {
            if (item.length > 0) {
              return item + "。"
            } else {
              return item
            }
          })
        })
      } else {
        console.log(poemNum)
        console.log(poemLength)
        alert("参数有误")
        this.loading = false
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
      let data = {
        "text": sentence,
      }
      return generateAcrostic(data).then((res) => {
        var sens = res.data.data
        this.sentences = sens.split("。")
        this.sentences.map((item) => {
          if (item.length > 0) {
            return item + "。"
          } else {
            return item
          }
        })
      })
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
#proot {
  margin-top: 10px;
  display: flex;
  /*justify-content: center;*/
  /*flex-shrink: 0;*/

  flex-direction: column;
  align-items: center;
  /*overflow-y: scroll;*/
  height: 100%;
  /*top:1%;*/
}

#box {
  /*margin-top: 10px;*/
  display: block;
  /*overflow: scroll;*/
  /*flex-shrink: 0;*/
  top: 10%;
}

#sentenceBox {
  overflow: auto;
  justify-content: center;
  text-align: center;
  /*  display: block;*/
  /*  position: absolute;*/

  /*  top:15%*/
  /*}*/
  /*#box .el-button {*/
  /*  position: absolute;*/
  /*  left: 100%;*/
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
