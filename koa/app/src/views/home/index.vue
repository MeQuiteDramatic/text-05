<template>
  <el-container class="box">
    <el-header>
      用户名 ：userName
      <el-button type="primary" size="mini">退出</el-button>
    </el-header>
    <el-main>
      <!-- 表格 -->

      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" type="index" width="50"></el-table-column>
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="标题">
          <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.title }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="作者">
          <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.username }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="重要性">
          <template slot-scope="scope">
            <el-rate v-model=" scope.row.sign" :max="3"></el-rate>
          </template>
        </el-table-column>
        <el-table-column label="浏览数">
          <template slot-scope="scope">
            <span>{{ scope.row.browse}}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  created() {
    axios.get("/api/list").then(res => {
      console.log(res.data.data)
      if (res.data.code == 1) {
        
        this.tableData = res.data.data.data;
      }
    });
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>