<template>
  <el-container>
    <el-aside width="70px">
      <left-nav-bar>
      </left-nav-bar>
    </el-aside>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="8">

          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="8">

          </el-col>
          <el-col :span="15" :offset="1">

          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import LeftNavBar from "@/components/content/leftNavBar";
  export default {
    name: "isau",
    components: {LeftNavBar}
  }
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: 100vh;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;

}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>