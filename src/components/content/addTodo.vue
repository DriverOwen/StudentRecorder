<template>
  <div class="addTodo-container">
    <el-row>
      <el-col :span="8" :offset="8">
        <el-input clearable
                  v-model="todoText"
                  placeholder="输入内容 + 回车即可添加任务"
                  class="todoListInp"
                  @keyup.enter.native="addTodo"
        ></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  import {mapMutations} from 'vuex'

  export default {
    name: "addTodo",
    data(){
      return {
        todoText: ''
      }
    },
    methods: {
      ...mapMutations(['ADD_TODO']),
      addTodo(){
        if(this.todoText.length){
          let NowDate = new Date();
          this.ADD_TODO({todo:this.todoText, date: NowDate.toLocaleString()})
          this.todoText = ''
        }
      }
    }
  }
</script>

<style scoped>
  >>> .todoListInp input {
    outline: none;
    border: none;
    border-bottom: 2px solid #ededed;
    border-radius: 0;
    background: transparent;
    color: #000;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
  }
  >>> .todoListInp input::placeholder {
    color: #ccc;
  }

  >>> .el-input .el-input__clear{
    color: #E6A23C;
    transition: all .3s;
  }
  >>> .el-input .el-input__clear:hover {
    transform: scale(1.5);
  }
</style>