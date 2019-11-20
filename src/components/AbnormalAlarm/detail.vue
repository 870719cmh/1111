<template>
  <div id="detail">
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="ordinal" label="序号"></el-table-column>
        <el-table-column prop="date" label="时间"></el-table-column>
        <el-table-column prop="site" label="站点"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="pm25" label="pm2.5"></el-table-column>
        <el-table-column prop="pm10" label="pm10"></el-table-column>
        <el-table-column prop="SO2" label="二氧化硫"></el-table-column>
        <el-table-column prop="NO2" label="二氧化氮"></el-table-column>
        <el-table-column prop="O" label="臭氧"></el-table-column>
        <el-table-column prop="NO" label="一氧化碳"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="changeSizeHandle"
        @current-change="currentChangeHandle"
        :current-page="currentPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          ordinal: 1,
          date: "2016-05-02",
          site: "渝北",
          pm25: "0.1",
          pm10: "0.2",
          SO2: "0.03",
          NO2: "0.05",
          O:"0.02",
          NO:"0.03"
      
        },
        {
          ordinal: 2,
          date: "2016-05-02",
         site: "渝北",
          pm25: "0.1",
          pm10: "0.2",
          SO2: "0.03",
          NO2: "0.05",
          O:"0.02",
          NO:"0.03"
        },
        {
          ordinal: 3,
          date: "2016-05-02",
          site: "渝北",
          pm25: "0.1",
          pm10: "0.2",
          SO2: "0.03",
          NO2: "0.05",
          O:"0.02",
          NO:"0.03"
        },
        {
          ordinal: 4,
          date: "2016-05-02",
         site: "渝北",
          pm25: "0.1",
          pm10: "0.2",
          SO2: "0.03",
          NO2: "0.05",
          O:"0.02",
          NO:"0.03"
        },
        {
          ordinal: 5,
          date: "2016-05-02",
          site: "渝北",
          pm25: "0.1",
          pm10: "0.2",
          SO2: "0.03",
          NO2: "0.05",
          O:"0.02",
          NO:"0.03"
        },
        {
          ordinal: 6,
          date: "2016-05-02",
         site: "渝北",
          pm25: "0.1",
          pm10: "0.2",
          SO2: "0.03",
          NO2: "0.05",
          O:"0.02",
          NO:"0.03"
        },
        {
          ordinal: 7,
          date: "2016-05-02",
          site: "渝北",
          pm25: "0.1",
          pm10: "0.2",
          SO2: "0.03",
          NO2: "0.05",
          O:"0.02",
          NO:"0.03"
        },
        {
          ordinal: 8,
          date: "2016-05-02",
         site: "渝北",
          pm25: "0.1",
          pm10: "0.2",
          SO2: "0.03",
          NO2: "0.05",
          O:"0.02",
          NO:"0.03"
        },
        {
          ordinal: 9,
          date: "2016-05-02",
          site: "渝北",
          pm25: "0.1",
          pm10: "0.2",
          SO2: "0.03",
          NO2: "0.05",
          O:"0.02",
          NO:"0.03"
        },
        {
          ordinal: 10,
          site: "渝北",
          pm25: "0.1",
          pm10: "0.2",
          SO2: "0.03",
          NO2: "0.05",
          O:"0.02",
          NO:"0.03"
        }
      ]
    };
  }
};
</script>

<style >
#detail {
  width: 100%;
}
#pagination a {
  border: 1px solid #000000;
  width: 50px;
  height: 20px;
  float: left;
  margin-left: 10px;
  cursor: pointer;
}
.el-pagination {
  text-align: center;
}
</style>