<template>
  <div id="index">
    <div class="top">
      <h1>污 染 源 在 线 监 测 平 台</h1>
      <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#3d3d3d"
        text-color="#fff"
        active-text-color="#ffd04b">
        
        <el-menu-item index="1"><router-link to="AHome">首页</router-link></el-menu-item>
        <el-menu-item index="2"> <router-link to="AbnormalAlarm">异常报警</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="Adevice">设备列表</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="">后台管理</router-link></el-menu-item>
      </el-menu>
      <div class="right">
        <button><i class="el-icon-user-solid"></i>admin</button>
        <button><i class="el-icon-switch-button"></i>退出</button>
      </div>
    </div>
    <router-view
      style="height: 100%; position: relative; display: flex;"
    />
  </div>
</template>

<script>

export default {
  name: 'index',
  data() {
    return {
      data: null
    }
  },
  methods: {}
}
</script>

<style scoped>
#index {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.top{
  width: 100%;
  height: 120px;
  overflow: hidden;
  color: #fff;
  background: #3d3d3d;
  z-index: 999;
}

.top>*{
}

.top>h1{
  font-size: 30px;
  height: 50px;
  padding: 5px 5px 5px 30px;
  font-weight: 300;
  line-height: 50px;
  text-align: center;
}

.top>div{
  position: absolute;
  top:20px;
  right:20px;
  color: #ffffff;
}

.top>div>a{
  color: #ffffff;
}

.top>.el-menu-demo{
  margin-left: 20px;
  border: none;
}

button{
  background: #00000000;
  border: none;
  color: #ffffff;
  cursor:pointer;
  margin-right: 20px;
}
</style>