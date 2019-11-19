<template>
  <div id="video-box">
    <play />
  </div>
</template>

<script>
import play from "@/components/video";

export default {
  name: "video-box",
  components: {
    play
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#video-box {
  width: 24%;
  height: 40%;
  position: absolute;
  top: 2%;
  right: 1%;
}
</style>