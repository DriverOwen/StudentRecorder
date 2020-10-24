import {request} from "@/network/request";
import qs from 'qs'

export const getActivity = (token,page) => request({
  url: 'https://jk.sicau.edu.cn/act/actInfo/v1.0.0/getUserSchoolActList',
  headers: {
    'x-access-token':token
  },
  data: qs.stringify({actName:'', gid:'', typeId:'',sortType:4,page}),
  method: 'POST'
})


export const MyActivity = (token,page=1) => request({
  url: 'https://jk.sicau.edu.cn/act/actInfo/v1.0.0/getActForUserMyList',
  headers: {
    'x-access-token':token
  },
  data: qs.stringify({page}),
  method: 'POST'
})