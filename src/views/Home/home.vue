<template>
  <el-container>
    <el-aside width="70px">
      <left-nav-bar>

      </left-nav-bar>
    </el-aside>
    <el-container>
      <el-header>
        <add-todo @addTodo="addTodo">

        </add-todo>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="8" :offset="8">
            <todo-list></todo-list>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import LeftNavBar from "@/components/content/leftNavBar";
  import AddTodo from "@/components/content/addTodo";

  import {setStore, getStore} from "@/utils/utils";
  import TodoList from "@/components/content/TodoList";

  export default {
    name: "Home",
    components: {TodoList, AddTodo, LeftNavBar},
    data(){
      return {
        todoList: []
      }
    },
    methods: {
      addTodo(todo){
        console.log(todo);
      }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #fafafa;
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