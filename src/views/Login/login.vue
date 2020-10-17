<template>
  <el-container>
    <el-main>
      <el-input v-model="username" placeholder="请输入账号"></el-input>
      <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      <el-button type="primary" @click="login">登录</el-button>
    </el-main>
  </el-container>
</template>

<script>
  import {userLogin} from "@/network/iSau/login";

  export default {
    name: "login",
    data(){
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login(){
        userLogin('f1c97a0e81c24e98adb1ebdadca0699b','201901994','2019owen.win').then(res => {
          console.log(res)
        } )
      }
    }
  }
</script>

<style scoped>

</style>