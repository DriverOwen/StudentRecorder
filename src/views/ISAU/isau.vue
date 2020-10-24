<template>
  <el-container>
    <el-aside width="70px">
      <left-nav-bar>
      </left-nav-bar>
    </el-aside>
    <el-container>
      <el-main class="isau-main">
        <el-row class="row-container">
          <el-col :span="5" :offset="9">
            <h3>登录</h3>
            <el-input
                placeholder="请输入学号"
                v-model="username"
                clearable>
            </el-input>
            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
            <el-button type="success" class="submitBtn" @click="userSignIn">登录</el-button>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import LeftNavBar from "@/components/content/leftNavBar";
  import {userLogin} from "@/network/iSau/login";

  import {mapMutations,mapGetters} from 'vuex'

  export default {
    name: "isau",
    components: {LeftNavBar},
    data(){
      return {
        username: '',
        password: '',
        sid: 'f1c97a0e81c24e98adb1ebdadca0699b'
      }
    },

    created() {

      if(this.GET_USER_INFO.uid){
        this.$router.push("user/" + this.GET_USER_INFO.uid)
      }
    },
    computed: {
      ...mapGetters(["GET_USER_INFO"])
    },
    methods: {
      ...mapMutations(["SAVE_USER_INFO","SAVE_USER_TOKEN"]),
      userSignIn(){
        userLogin(this.sid, this.username, this.password).then(data => {
          console.log(data.data)
          if(data.data.code === "0" && data.status === 200 ) {
            this.$message({
              message: '登录成功',
              type: 'success'
            });
            this.SAVE_USER_INFO(data.data.content)
            this.SAVE_USER_TOKEN(data.data.content.token)
            setTimeout(()=>{
              this.$router.push("user/" + data.data.content.uid)
            }, 800)
          }else {
            this.$message.error(data.data.message);
          }
        })
      }
    }
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
.row-container {
  line-height: 50px;
  margin-top: 180px;
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
>>> .submitBtn {
  width: 100%;
}
</style>