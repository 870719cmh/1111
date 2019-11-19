<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  outline: none;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  color: #ffffff;
  background: #00092b;
}

a{
  text-decoration:none;
}

img{
  height: 100%;
  width: 100%;
}

</style>