<template>
  <div id="date">
  

      <el-date-picker 
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>    
  </div>
</template>

<script>
export default {
    data() {
      return {
        pickerOptions: {
          
        },
        value1: '',
        value2: ''
      };
    }
  };
</script>

<style >
/* #date{
    float: left;
} */
</style>