import {
  GET_ALL_TODO,
  GET_COMPLETED_TODO,
  GET_UNCOMPLETED_TODO,
  GET_USER_INFO,
  GET_USER_TOKEN
} from './mutations-type'
export default {
  // 获取所有todo
  [GET_ALL_TODO](state){
    return state.todoList
  },
  // 获取未完成的任务
  [GET_UNCOMPLETED_TODO](state){
    return state.todoList.filter(todo => todo.isComplete !== true)
  },
  // 获取完成的任务
  [GET_COMPLETED_TODO](state){
    return state.todoList.filter(todo => todo.isComplete === true)
  },
  // 获取用户信息
  [GET_USER_INFO](state){
    return state.user
  },
  //获取token
  [GET_USER_TOKEN](state){
    return state.token
  }
}