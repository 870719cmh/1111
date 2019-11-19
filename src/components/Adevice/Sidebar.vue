<template>
  <div id="app">
      <el-menu style="background:#3d3d3d;">
        <el-menu-item index="1">
        <span slot="title">查询设备</span>
      </el-menu-item>
        <el-menu-item index="2">
        <span slot="title">增加设备</span>
      </el-menu-item>
        <el-menu-item index="3">
        <span slot="title">修改设备</span>
      </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app{
    background-color:#3d3d3d;
    width:17%;
}
span{
    color:#fff;
}
.el-menu-item:focus, .el-menu-item:hover{
    background-color:#333333
}
</style>