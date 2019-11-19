<template>
  <div id="mymap">
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "",
  data() {
    return {
      mypoints: 
        {
          content: [
            { id: "00001", a: 1, b: [107.750464, 30.263761] },
            { id: "00001", a: 4, b: [107.850464, 30.263761] },
            { id: "00001", a: 1, b: [107.950464, 30.263761] },
            { id: "00001", a: 3, b: [107.814464, 30.563761] },
            { id: "00001", a: 2, b: [107.300464, 30.0263761] },
            { id: "00001", a: 4, b: [107.121567, 30.2133761] },
            { id: "00001", a: 3, b: [107.650464, 30.363761] },
            { id: "00001", a: 1, b: [106.650464, 29.663761] },
            { id: "00001", a: 2, b: [106.850464, 28.963761] },
            { id: "00002", a: 3, b: [108.250464, 30.263761] },
            { id: "00002", a: 2, b: [108.050464, 29.863761] },
            { id: "00002", a: 1, b: [107.550464, 30.863761] },
            { id: "00002", a: 4, b: [107.894464, 30.063761] },
            { id: "00002", a: 2, b: [107.900464, 30.0263761] },
            { id: "00002", a: 4, b: [107.821567, 30.3133761] },
            { id: "00002", a: 3, b: [107.850464, 30.863761] },
            { id: "00002", a: 1, b: [106.250464, 29.263761] },
            { id: "00002", a: 2, b: [107.150464, 30.063761] }
          ]
        },
    };
  },
  props: ['points'],
  watch: {
    points(val,oldval){
      this.mapLoad()
    }
  },
  mounted() {
    if(!this.points)
    {
      this.points = this.mypoints
    }
    this.mapLoad();
  },
  methods: {
    mapLoad() {
      lazyAMapApiLoaderInstance.load().then(() => {
        var cluster,
          markers = [];

        var map = new AMap.Map("mymap", {
          zoom: 8,
          center: new AMap.LngLat(107.750464, 30.263761),
          mapStyle: "amap://styles/normal"
        });
        for (var i = 0; i < this.points.content.length; i += 1) {
          if (this.points.content[i].a == 1) {
            markers.push(
              new AMap.Marker({
                position: this.points.content[i].b,
                content:
                  '<div style="background-image:url('+require('../../assets/images/tab1.jpg')+');background-size: 100%;background-repeat:no-repeat; height: 22px; width: 22px;"></div>',
                offset: new AMap.Pixel(-15, -15)
              })
            );
          } else if(this.points.content[i].a == 2){
            markers.push(
              new AMap.Marker({
                position: this.points.content[i].b,
                content:
                  '<div style="background-image:url('+require('../../assets/images/tab2.jpg')+');background-size: 100%;background-repeat:no-repeat; height: 22px; width: 22px;"></div>',
                offset: new AMap.Pixel(-15, -15)
              })
            );
          }else if(this.points.content[i].a == 3){
            markers.push(
              new AMap.Marker({
                position: this.points.content[i].b,
                content:
                  '<div style="background-image:url('+require('../../assets/images/tab3.jpg')+');background-size: 100%;background-repeat:no-repeat; height: 22px; width: 22px;"></div>',
                offset: new AMap.Pixel(-15, -15)
              })
            );
          }else if(this.points.content[i].a == 4){
            markers.push(
              new AMap.Marker({
                position: this.points.content[i].b,
                content:
                  '<div style="background-image:url('+require('../../assets/images/tab4.jpg')+');background-size: 100%;background-repeat:no-repeat; height: 22px; width: 22px;"></div>',
                offset: new AMap.Pixel(-15, -15)
              })
            );
          }
        }

        var count = markers.length;
        var _renderClusterMarker = function(context) {
          var factor = Math.pow(context.count / count, 1 / 18);
          var div = document.createElement("div");
          var Hue = 180 - factor * 180;
          var bgColor = "hsla(" + Hue + ",100%,50%,0.7)";
          var fontColor = "hsla(" + Hue + ",100%,20%,1)";
          var borderColor = "hsla(" + Hue + ",100%,40%,1)";
          var shadowColor = "hsla(" + Hue + ",100%,50%,1)";
          div.style.backgroundColor = bgColor;
          var size = Math.round(
            30 + Math.pow(context.count / count, 1 / 5) * 20
          );
          div.style.width = div.style.height = size + "px";
          div.style.border = "solid 1px " + borderColor;
          div.style.borderRadius = size / 2 + "px";
          div.style.boxShadow = "0 0 1px " + shadowColor;
          div.innerHTML = context.count;
          div.style.lineHeight = size + "px";
          div.style.color = fontColor;
          div.style.fontSize = "14px";
          div.style.textAlign = "center";
          context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
          context.marker.setContent(div);
        };

        addCluster(2);

        function addCluster(tag) {
          if (cluster) {
            cluster.setMap(null);
          }
          if (tag == 2) {
            //完全自定义
            cluster = new AMap.MarkerClusterer(map, markers, {
              gridSize: 80,
              renderClusterMarker: _renderClusterMarker
            });
          } else if (tag == 1) {
            //自定义图标
            var sts = [
              {
                url: "https://a.amap.com/jsapi_demos/static/images/blue.png",
                size: new AMap.Size(32, 32),
                offset: new AMap.Pixel(-16, -16)
              },
              {
                url: "https://a.amap.com/jsapi_demos/static/images/green.png",
                size: new AMap.Size(32, 32),
                offset: new AMap.Pixel(-16, -16)
              },
              {
                url: "https://a.amap.com/jsapi_demos/static/images/orange.png",
                size: new AMap.Size(36, 36),
                offset: new AMap.Pixel(-18, -18)
              },
              {
                url: "https://a.amap.com/jsapi_demos/static/images/red.png",
                size: new AMap.Size(48, 48),
                offset: new AMap.Pixel(-24, -24)
              },
              {
                url: "https://a.amap.com/jsapi_demos/static/images/darkRed.png",
                size: new AMap.Size(48, 48),
                offset: new AMap.Pixel(-24, -24)
              }
            ];
            cluster = new AMap.MarkerClusterer(map, markers, {
              styles: sts,
              gridSize: 80
            });
          } else {
            //默认样式
            cluster = new AMap.MarkerClusterer(map, markers, { gridSize: 80 });
          }
        }
      });
    }
  }
};
</script>

<style scoped>
#mymap {
  width: 100%;
  height: 100%;
}
</style>