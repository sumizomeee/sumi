/*
 * @Author: sumi
 */
import axios from '@/utils/axios'

// 用id删除职位
export function deleteJobsById(param){
  return axios.post('/Jobs/deleteById',param);
}

/* 查找所有职位数据 */
export function findAllJobs() {
  
  return axios.get('/Jobs/findAll');;
}


//通过id查找职位
export function findJobsById(param){
  return axios.get('/Jobs/findById',{params:param});
}

//通过id查找职位
export function findJobsByStatus(param){
    return axios.get('/Jobs/saveOrUpdate',{params:param});
  }


// 保存更新职位信息
export function saveOrUpdateJobs(param){
  return axios.post('/Jobs/saveOrUpdate',param);
}



