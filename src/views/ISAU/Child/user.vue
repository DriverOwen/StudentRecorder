<template>
  <el-container>
    <el-aside width="70px">
      <left-nav-bar>
      </left-nav-bar>
    </el-aside>
    <el-container>
      <el-main>
        <el-row class="main-row">
          <el-col :span="18">
            <activity :activity="activity"  v-loading="loading"
                      element-loading-text="拼命加载中"
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="rgba(0, 0, 0, 0.8)">
            </activity>
          </el-col>
          <el-col :span="5">
            <usercard :user="user"></usercard>
            <div class="changePage">
              <div @click="nextPage">下一页</div>
              <div @click="prePage">上一页</div>
            </div>
            <p class="notice-text">已报名，注意时间</p>
            <div class="myActivity">
              <activity :activity="myActivity"></activity>
            </div>
          </el-col>
        </el-row>

      </el-main>
    </el-container>
  </el-container>
</template>


<script>
import LeftNavBar from "@/components/content/leftNavBar";

import {mapGetters} from "vuex"
import Usercard from "@/components/content/user/usercard";
import Activity from "@/components/content/user/activity";
import {getActivity,MyActivity} from "@/network/iSau/activity";

export default {
  name: "user",
  components: {Activity, Usercard, LeftNavBar},
  data(){
    return {
      user: null,
      offset: 1,
      activity: [],
      loading: true,
      myActivity: []
    }
  },
  computed: {
    ...mapGetters(["GET_USER_INFO","GET_USER_TOKEN"])
  },
  created() {
    this.user = this.GET_USER_INFO
  },
  methods: {
    getActivity(){
      getActivity(this.GET_USER_TOKEN,this.offset).then(data => {
        // console.log(data)
        this.activity = data.data.content
        this.loading = false
      })
    },
    nextPage(){
      this.loading = true
      this.offset++
      this.getActivity()
    },
    prePage(){
      this.loading = true
      if(this.offset == 0){
        this.offset = 0
      }else {
        this.offset--
      }
      this.getActivity()
    },
    MyActivity(){
      MyActivity(this.GET_USER_TOKEN).then(data => {

        this.myActivity = data.data.content.filter( item => item.status =="1205")
        console.log("myac",this.myActivity)
      })
    }
  },
  mounted() {
    this.getActivity()
    this.MyActivity()
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;

}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: 100vh;
}
.row-container {
  margin-top: 180px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

body > .el-container {

}
.changePage {
  margin-top: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
}
.changePage div {
  width: 120px;
  height: 38px;
  background: #e5efbe;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  line-height: 38px;
  box-shadow: 0 0 6px -1px rgba(140,146,163,0.5);
}
.main-row {

}
.myActivity {
  height: 320px;
  overflow-y: hidden;
}
.notice-text {
  margin-top: 10px;
  font-size: 16px;
}
</style>