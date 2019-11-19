<template>
  <div id="distribution_map"></div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "",
  data() {
    return {
      points: [
        { a: 1, b: [107.750464, 30.263761] },
        { a: 2, b: [107.850464, 30.263761] },
        { a: 1, b: [107.950464, 30.263761] },
        { a: 1, b: [107.814464, 30.563761] },
        { a: 2, b: [107.900464, 30.0263761] },
        { a: 2, b: [107.821567, 30.3133761] },
        { a: 1, b: [107.650464, 30.363761] },
        { a: 1, b: [106.650464, 29.663761] },
        { a: 2, b: [106.850464, 28.963761] },
      ]
    };
  },
  mounted() {
    this.mapLoad();
  },
  methods: {
    mapLoad() {
      lazyAMapApiLoaderInstance.load().then(() => {
        var cluster,
          markers = [];

        var map = new AMap.Map("distribution_map", {
          zoom: 7,
          center: new AMap.LngLat(107.750464, 30.263761),
          mapStyle: "amap://styles/darkblue"
        });
        for (var i = 0; i < this.points.length; i += 1) {
          if (this.points[i].a == 1) {
            markers.push(
              new AMap.Marker({
                position: this.points[i].b,
                content:
                  '<div style="background-color: #07ffd1; height: 16px; width: 16px; border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',
                offset: new AMap.Pixel(-15, -15)
              })
            );
          } else {
            markers.push(
              new AMap.Marker({
                position: this.points[i].b,
                content:
                  '<div style="background-color:#e6ff15; height: 16px; width: 16px; border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',
                offset: new AMap.Pixel(-15, -15)
              })
            );
          }
        }

        new AMap.DistrictSearch({
          extensions: "all",
          subdistrict: 0
        }).search("重庆市", (status, result) => {
          // 外多边形坐标数组和内多边形坐标数组
          var outer = [
            new AMap.LngLat(-360, 90, true),
            new AMap.LngLat(-360, -90, true),
            new AMap.LngLat(360, -90, true),
            new AMap.LngLat(360, 90, true)
          ];
          var holes = result.districtList[0].boundaries;
          var pathArray = [outer];
          pathArray.push.apply(pathArray, holes);
          var polygon = new AMap.Polygon({
            pathL: pathArray,
            strokeColor: "#00eeff",
            strokeWeight: 1,
            fillColor: "#000727",
            fillOpacity: 1
          });
          polygon.setPath(pathArray);
          map.add(polygon);
        });

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
#distribution_map {
  width: 100%;
  height: 100%;
}
</style>