//添加错误拦截器
//引入elemnet-ui的message提示组件
import {Message} from 'element-ui'

//添加错误拦截器
export default function({$axios,redirect}){
  $axios.onError(err=>{
    const {status,message}=err.response.data 
    //当出现错误时，提示用户
    if(statusCode===400){
      Message.warning({message})
    }
  })
}