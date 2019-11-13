<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <el-button @click="dialogFormVisible = true">添加</el-button>
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号" type="index"></el-table-column>
          <el-table-column label="备注" prop="remark"></el-table-column>
          <el-table-column label="链接" prop="type"></el-table-column>
          <el-table-column label="创建时间">
            <template slot-scope="scope">
              <span>{{scope.row.dates}}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>{{scope.row.time}}</span>
            </template>
          </el-table-column>

          <el-table-column align="right" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->

        <el-pagination
          background
          layout="sizes, prev, pager, next "
          :total="total"
          :page-size="count"
          @current-change="fun"
          :page-sizes="[2, 3, 4, 5]"
          @size-change="changes"
        ></el-pagination>
        <!-- 添修 -->
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="备注">
              <el-input v-model="sizeForm.remark"></el-input>
            </el-form-item>
            <el-form-item label="链接">
              <el-input v-model="sizeForm.url"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker v-model="sizeForm.dates" type="date" placeholder="选择日期"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="sizeForm.time" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>

            <el-form-item size="large">
              <el-button type="primary" @click="onSubmit">确定</el-button>
              <el-button @click="dialogFormVisible = false">取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      sizeForm: {
        remark: "",
        url: "",
        type: "链接",
        time: ""
      },
      id: null,
      total: 0,
      count: 2,
      limit: 1
    };
  },
  created() {
    this.getList();
  },
  methods: {
    //请求数据
    getList(obj) {
      Axios.get("/api/list", { params: obj }).then(res => {
        if (res.data.code === 1) {
          this.tableData = res.data.data;
          this.total = res.data.queryIndex;
        }
      });
    },
    //分页修改器
    changes(count) {
      this.count = count;
      this.getList({ count });
    },
    //显示修改
    handleEdit(index, row) {
      this.id = row.id;
      this.dialogFormVisible = true;
      this.sizeForm.remark = row.remark;
      this.sizeForm.type = row.type;
      this.sizeForm.dates = row.dates;
      this.sizeForm.time = row.time;
    },
    //添加或者修改
    onSubmit() {
      let url = "";
      if (this.id) {
        url = "/api/upd";
      } else {
        url = "/api/add";
      }

      Axios.post(url, { ...this.sizeForm, id: this.id }).then(res => {
        if (res.data.code === 1) {
          this.getList();
        }
        this.$message({
          type: "success",
          message: res.data.msg
        });
        this.dialogFormVisible = false;
        this.sizeForm.remark = "";
        this.sizeForm.type = "链接";
        this.sizeForm.dates = "";
        this.sizeForm.time = "";
        this.sizeForm.url = "";
      });
    },
    //删除
    handleDelete(index, row) {
      this.$confirm("删除后将无法恢复", "删除banner图", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          Axios.get("/api/del", { params: { id: row.id } }).then(res => {
            if (res.data.code === 1) {
              this.getList();
            }
            this.$message({
              type: "success",
              message: res.data.msg
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //下一页
    fun(limit) {
      this.getList({ limit, count: this.count });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app,
.el-container {
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
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>