<template>
  <div id="home">
    <!-- <myMap />
    <deviceNumber />
    <distribution />
    <div>
      <play />
      <abnormal />
    </div>-->
    <el-menu
      default-active
      class="left_nav"
      background-color="#3d3d3d"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      @open="select"
    >
      <el-submenu v-for="(item,index) in list" :key="index" :index="item.id">
        <template slot="title">
          <span @click.native="xx">{{ item.name }}</span>
        </template>
        <el-submenu :index="item.id+'-1'">
          <template slot="title">废水监测</template>
          <el-menu-item :index="item.id+'-1-1'" @click.native="xx">实时数据查看</el-menu-item>
          <el-menu-item :index="item.id+'-1-2'">历史数据查看</el-menu-item>
          <el-menu-item :index="item.id+'-1-3'">数据统计</el-menu-item>
          <el-menu-item :index="item.id+'-1-4'">异常报警</el-menu-item>
        </el-submenu>
        <el-submenu :index="item.id+'-2'">
          <template slot="title">废气监测</template>
          <el-menu-item :index="item.id+'-2-1'">实时数据查看</el-menu-item>
          <el-menu-item :index="item.id+'-2-2'">历史数据查看</el-menu-item>
          <el-menu-item :index="item.id+'-2-3'">数据统计</el-menu-item>
          <el-menu-item :index="item.id+'-2-4'">异常报警</el-menu-item>
        </el-submenu>
        <el-submenu :index="item.id+'-3'">
          <template slot="title">视频监控</template>
          <el-menu-item :index="item.id+'-3-1'">实时监控</el-menu-item>
          <el-menu-item :index="item.id+'-3-2'">监控录像</el-menu-item>
        </el-submenu>
        <el-submenu :index="item.id+'-4'">
          <template slot="title">工况监测</template>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <div class="content">
      <myMap :points="points"/>
    </div>
  </div>
</template>

<script>
import myMap from "@/components/AHome/mymap";
import deviceNumber from "@/components/AHome/deviceNumber";
import distribution from "@/components/AHome/distribution";
import play from "@/components/AHome/video-box";
import abnormal from "@/components/AHome/abnormal";

export default {
  name: "",
  components: {
    myMap,
    deviceNumber,
    distribution,
    play,
    abnormal
  },
  data() {
    return {
      list: [
        {
          name: "重庆兴吉矸砖有限公司",
          id: "00001"
        },
        {
          name: "重庆市安鑫建材有限公司",
          id: "00002"
        },
        {
          name: "重庆市永川区永荣镇民峰砖厂",
          id: "00003"
        },
        {
          name: "重庆市永川区蒋家南坳矸砖厂（普通合伙）",
          id: "00004"
        },
        {
          name: "重庆市开晨建材有限公司",
          id: "00005"
        },
        {
          name: "重庆市永川区仙龙镇新式福利机砖厂",
          id: "00006"
        },
        {
          name: "重庆市俊都建材有限公司",
          id: "00007"
        },
        {
          name: "重庆市永川区谢钢矸砖厂",
          id: "00008"
        },
        {
          name: "重庆市永川区颜桂建材厂",
          id: "00009"
        }
      ],
      allpoints: [
        {
          id: "00001",
          content: [
            { id: "00001", a: 1, b: [107.750464, 30.263761] },
            { id: "00001", a: 4, b: [107.850464, 30.263761] },
            { id: "00001", a: 1, b: [107.950464, 30.263761] },
            { id: "00001", a: 3, b: [107.814464, 30.563761] },
            { id: "00001", a: 2, b: [107.300464, 30.0263761] },
            { id: "00001", a: 4, b: [107.121567, 30.2133761] },
            { id: "00001", a: 3, b: [107.650464, 30.363761] },
            { id: "00001", a: 1, b: [106.650464, 29.663761] },
            { id: "00001", a: 2, b: [106.850464, 28.963761] }
          ]
        },
        {
          id: "00002",
          content: [
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
        }
      ],
      points: null
    };
  },
  methods: {
    select(key, keyPath) {
      for(var i=0;i<this.allpoints.length;i++)
      {
        if(this.allpoints[i].id == keyPath)
        {
          this.points = this.allpoints[i]
        }
      }
    },

    xx() {
      alert(1);
    }
  }
};
</script>

<style scoped>
#home {
  flex: 1;
}

.left_nav {
  width: 280px;
  height: 100%;
  overflow-y: scroll;
}

.left_nav::-webkit-scrollbar {
  width: 0;
}

.left_nav /deep/ span {
  display: inline-block;
  width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content {
  flex: 1;
}
</style>