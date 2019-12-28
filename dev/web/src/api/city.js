/*
 * @Author: liuyr 
 * 城市模块API
 * @Date: 2019-12-22 18:54:17 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-25 10:43:36
 */
import axios from '@/utils/axios'

// 用id删除
export function deleteCityById(param){
  return axios.post('/City/deleteById',param);
}

/* 查找数据 */
export function findAllCity() {
  
  return axios.get('/City/findAll');;
}


//通过id查找城市
export function findCityById(param){
  return axios.get('/City/findById',{params:param});
}

//通过省份查找城市
export function findCityByProvince(param){
  return axios.get('/City/findByProvince',{params:param});
}


// 保存更新城市信息
export function saveOrUpdateCity(param){
  return axios.post('/City/saveOrUpdate',param);
}



