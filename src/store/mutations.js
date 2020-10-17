import {
  USER_INFO,
  ADD_TODO,
  DEL_TODO
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
  }
}