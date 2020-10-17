<template>
  <div class="todoList-container">
    <div class="list-card">
      <div v-show="GET_UNCOMPLETED_TODO.length" class="todoCount">
       {{GET_UNCOMPLETED_TODO.length}} 个任务没有完成
      </div>
      <div class="todoSort" v-show="GET_ALL_TODO.length">
        <div class="sort-item">
          所有任务
        </div>
        <div class="sort-item">
          未完成的任务
        </div>
        <div class="sort-item">
          完成的任务
        </div>
      </div>
    </div>
    <ul class="todoList-ul" v-for="(item,index) in GET_ALL_TODO" :key="index">
      <li class="todoList-item" :class="{isComplete:item.isComplete}">
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
        unCompleteCount: 0
      }
    },
    computed: {
      ...mapGetters(['GET_ALL_TODO','GET_UNCOMPLETED_TODO'])
    }
    ,
    methods: {
      ...mapMutations(['DEL_TODO']),
      delTodo(todo){
        this.DEL_TODO(todo)
      }
    },
    mounted(){
      console.log(this.GET_ALL_TODO.length);
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
    color: #fff;
    background: #F56C6C;
    border-radius: 2px;
  }
  .noTodo {
    font-size: 14px;
    color: #999;
  }
</style>