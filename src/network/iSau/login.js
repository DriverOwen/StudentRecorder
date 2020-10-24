import {request} from "@/network/request";
import qs from 'qs'
/**
 * 登录
 */

export const userLogin = (sid,loginName,password) => request({
    url: 'user/login/v1.0.0/snoLogin',

    data: qs.stringify({sid, loginName, password}),
    method: 'POST'
})
