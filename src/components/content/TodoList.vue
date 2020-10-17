<template>
  <div class="todoList-container">
    <div class="list-card">
      <div v-show="GET_UNCOMPLETED_TODO.length" class="todoCount">
       {{GET_UNCOMPLETED_TODO.length}} 个任务没有完成
      </div>
      <div class="todoSort" v-show="GET_ALL_TODO.length">
        <div class="sort-item" :class="{active: nowIndex === 0}" @click="getAllTodo(0)">
          所有任务
        </div>
        <div class="sort-item" :class="{active: nowIndex === 1}" @click="getUnCompleteTodo(1)" >
          未完成的任务
        </div>
        <div class="sort-item" :class="{active: nowIndex === 2}" @click="getCompleteTodo(2)">
          完成的任务
        </div>
      </div>
    </div>
      <ul class="todoList-ul" >
        <li class="todoList-item" v-for="(item,index) in listTodo" :key="index" :class="{isComplete:item.isComplete}">
          <el-checkbox class="item-content" v-model="item.isComplete">
            <p class="item-title">{{item.title}}</p>
            <p class="item-date">{{item.date}}</p>
          </el-checkbox>
          <el-button type="danger" icon="el-icon-delete" @click="delTodo(item)" circle size="mini" ></el-button>
        </li>
      </ul>
    <ul class="todoList-ul" v-show="!GET_ALL_TODO.length">
      <li class="todoList-item noTodo" >
        还未添加任务
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: "TodoList",
    data(){
      return {
        unCompleteCount: 0,
        nowIndex: 0,
        listTodo: [],
        isShow: false
      }
    },
    computed: {
      ...mapGetters(['GET_ALL_TODO','GET_UNCOMPLETED_TODO', 'GET_COMPLETED_TODO'])
    },
    methods: {
      ...mapMutations(['DEL_TODO']),
      delTodo(todo){
        this.DEL_TODO(todo)
      },
      getAllTodo(index){
        this.nowIndex = index
        this.listTodo = this.GET_ALL_TODO

      },
      getUnCompleteTodo(index){
        this.nowIndex = index
        this.listTodo = this.GET_UNCOMPLETED_TODO
      },
      getCompleteTodo(index){
        this.nowIndex = index
        this.listTodo = this.GET_COMPLETED_TODO
      }
    },
    mounted(){
      this.listTodo = this.GET_ALL_TODO

      if(this.GET_ALL_TODO.length>0){

      }
    },
    updated() {
      // console.log(this.GET_ALL_TODO.length)
    }
  }
</script>

<style scoped>
  .todoList-ul {

  }
  .todoList-item {
    list-style: none;
    height: 49px;
    background: #fff;
    border-bottom: 1px solid #ededed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  }
  .item-content {
    display: flex;
    align-items: center;
  }
  >>> .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color:#67C23A;
    border-color: #67C23A;
  }
  >>> .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #67C23A;
  }
  >>> .el-checkbox.is-bordered.is-checked{
    border-color: #67C23A;
  }
  >>> .el-checkbox__input.is-focus .el-checkbox__inner{
    border-color: #67C23A;
  }
  .item-title {
    text-align: left;
  }
  .item-date {
    text-align: left;
    font-size: 12px;
  }
  .isComplete {
    opacity: 0.5;
    text-decoration: line-through;
  }
  .list-card {
    margin-bottom: 10px;
    display: flex;
    font-size: 14px;
    align-items: center;
  }
  .todoCount {
    color: #F56C6C;
  }
  .todoSort {
    display: flex;
    flex: 1 1;
    justify-content: flex-end;
    align-items: center;
  }
  .sort-item {
    padding: 2px;
    margin-right: 10px;
    color: #000;

    border-radius: 2px;
  }
  .noTodo {
    font-size: 14px;
    color: #999;
  }
  .active {
    background: #F56C6C;
    color: #fff;
  }
</style>