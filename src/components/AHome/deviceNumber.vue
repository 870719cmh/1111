<template>
  <div id="deviceNumber" class="content">
    <div class="top">
      <h4>设备总数</h4>
      <p>废气监测点：5个 废水监测点：10个</p>
    </div>
    <div id="deviceNumber_chart"></div>
  </div>
</template>

<script>
export default {
  name: "deviceNumber",
  data() {
    return {};
  },
  mounted() {
    this.deviceNumberChart();
  },
  methods: {
    deviceNumberChart() {
      const myChart = this.$echarts.init(
        document.getElementById("deviceNumber_chart")
      );
      myChart.setOption({
        color: ["#27d089", "#afafaf"],
        tooltip: {},
        legend: {
          x: "center",
          bottom: 0,
          data: ["在线", "离线"],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "状态",
            type: "pie",
            radius: "70%",
            center: ["50%", "44%"],
            label: {
              normal: {
                show: false,
                position: "center"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{ value: 10, name: "在线" }, { value: 5, name: "离线" }]
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  }
};
</script>

<style scoped>
#deviceNumber {
  width: 27%;
  height: 34%;
  position: absolute;
  top: 2%;
  left: 1%;
}

#deviceNumber_chart {
  width: 100%;
  height: 100%;
}
</style>