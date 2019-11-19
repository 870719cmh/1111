<template>
  <video-player
    class="video-player vjs-custom-skin"
    ref="videoPlayer"
    :playsinline="true"
    :options="playerOptions"
  >
  </video-player>
</template>

<script>
export default {
  data() {
    return {
      playerOptions: {
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '16:9',
        fluid: true,
        sources: [
          {
            type: '', 
            src: 'http://183.230.5.183:7086/live/cameraid/1000170%2422/substream/2.m3u8'
          }
        ],
        poster: require('@/assets/images/cover.png'),
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
}
</script>

<style scoped>
/deep/ .vjs-fluid{
  padding-bottom: 26%;
}
</style>