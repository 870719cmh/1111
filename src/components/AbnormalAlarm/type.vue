<template>
  <div id="type">
      <el-select v-model="value" placeholder="类型">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
  </div>
</template>

<script>
export default {
     data() {
      return {
        options: [{
          value: '选项1',
          label: '所有'
        }, {
          value: '选项2',
          label: '废水'
        }, {
          value: '选项3',
          label: '废气'
        }],
        value: ''
      }
    }

 
  
};
</script>

<style >
/* #type{
    width:200px;
    float:left
} */
</style>