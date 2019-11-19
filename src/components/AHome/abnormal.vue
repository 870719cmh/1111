<template>
  <div id="abnormal" class="content">
    <h4>异常情况</h4>
    <div>
      <p v-for="(m,index) in data" :key="index" @click="sendData(m)">{{ index+1 }}. {{ m.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      data: [
        {
          text: '重庆兴吉矸砖有限公司 C废水流量超标'
        },
        {
          text: '重庆兴吉矸砖有限公司 COD超标1.5倍'
        },
        {
          text: '重庆市安鑫建材有限公司 C废水流量超标'
        },
        {
          text: '重庆市安鑫建材有限公司 COD超标1.5倍'
        },
        {
          text: '重庆市永川区永荣镇民峰砖厂 C废水流量超标'
        },
        {
          text: '重庆市永川区永荣镇民峰砖厂 COD超标1.5倍'
        },
        {
          text: '重庆市永川区蒋家南坳矸砖厂 C废水流量超标'
        },
        {
          text: '重庆市永川区蒋家南坳矸砖厂 COD超标1.5倍'
        },
        {
          text: '重庆市开晨建材有限公司 C废水流量超标'
        },
        {
          text: '重庆市开晨建材有限公司 COD超标1.5倍'
        }
      ]
    }
  },
  methods: {
    sendData(m) {
      this.$emit('sendData', m)
    }
  }
}
</script>

<style scoped>
#abnormal {
  height: 60%;
  position: absolute;
  right: 1%;
  bottom: 2%;
  overflow: hidden;
}

h4 {
  text-align: center;
  padding-top: 10px;
}

p {
  margin: 0 5px;
  padding: 5px 0;
  border-bottom: 1px solid #858585;
}
</style>