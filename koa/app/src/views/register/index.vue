<template>
  <div>
    <p>
      用户名：
      <el-input rows="4" v-model="username" placeholder="请输入用户名"></el-input>
    </p>
    <p>
      密码：
      <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
    </p>
    <p>
      <el-button type="primary" @click="register" plain>注册</el-button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  register() {
    this.$message({
      message: "发送注册请求",
      type: "success"
    });
  }
};
</script>

<style>
</style>