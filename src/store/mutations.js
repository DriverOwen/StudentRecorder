import {
  USER_INFO,
  ADD_TODO,
  DEL_TODO,
  SAVE_USER_INFO,
  SAVE_USER_TOKEN
} from "@/store/mutations-type";

export default {
  // 添加todo
  [ADD_TODO](state, data){
    state.todoList.push({title: data.todo, isComplete: false, date: data.date})
  },
  // 删除todo
  [DEL_TODO](state, data){
    let index = state.todoList.indexOf(data);
    state.todoList.splice(index,1)
  },
  // 保存用户信息
  [SAVE_USER_INFO](state, user){
    state.user = user
  },
  // 保存用户USER_TOKEN，
  [SAVE_USER_TOKEN](state, token){
    state.token = token
  }
}