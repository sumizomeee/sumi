/*
 * @Author: liuyr 
 * 省份模块API
 * @Date: 2019-12-22 18:54:17 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-25 09:36:53
 */
import axios from '@/utils/axios'

// 用id删除省份
export function deleteProvinceById(param){
  return axios.post('/Province/deleteById',param);
}

/* 查找所有省份数据 */
export function findAllProvince() {
  
  return axios.get('/Province/findAll');;
}


//通过id查找省份
export function findProvinceById(param){
  return axios.get('/Province/findById',{params:param});
}


// 保存更新省份信息
export function saveOrUpdateProvince(param){
  return axios.post('/Province/saveOrUpdate',param);
}



