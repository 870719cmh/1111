<template>
  <div id="distribution" class="content">
      <h4>设备分布</h4>
      <div class="legend">
          <p><span></span><span>废水</span></p>
          <p><span></span><span>废气</span></p>
      </div>
      <myMap />
  </div>
</template>

<script>
import myMap from "@/components/AHome/distribution/map";

export default {
  name: "distribution",
  components: {
    myMap
  },
  data() {
    return {
    }
  },
};
</script>

<style scoped>
#distribution{
  width: 27%;
  height: 60%;
  position: absolute;
  bottom: 2%;
  left: 1%;
}

#home>.content{
    padding: 0;
}

h4{
    margin: 8px;
}

.legend{
    z-index: 999;
    font-size: 12px;
    position: absolute;
    top: 40px;
    left: 20px;
}

.legend>p>span:nth-child(1)
{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
}

.legend>p:nth-child(1)>span:nth-child(1){
    background: #07ffd1;
}

.legend>p:nth-child(2)>span:nth-child(1){
    background: #e6ff15;
}
</style>