
import axios from '@/utils/axios';

// 通过id删除商家信息 @param{Object}param{id:''}传输的数据是ID
export function deleteBusinessById(param){
    return axios.post('/Business/deleteById',param);
}


// 查找所有商家信息
export function findAllBusiness(){
    return axios.get('/Business/findAll');
}

//按城市查找商家信息,传递的param是 city
export function findBusinessByCity(param){
    return axios.get('/Business/findByCity',{params:param});
}


//通过id查找商家
export function findBusinessById(param){
    return axios.get('/Business/findById',{params:param});
}


//通过行业查找商家
export function findBusinessByIndustry(param){
    return axios.get('/Business/findByIndustry',{params:param});
}


//通过位置查找商家
export function findBusinessByLocation(param){
    return axios.get('/Business/findByLocation',{params:param});
}


//通过省份查找商家
export function findBusinessByProvince(param){
    return axios.get('/Business/findByProvince',{params:param});
}


//通过规模查找商家
export function findBusinessByScale(param){
    return axios.get('/Business/findByScale',{params:param});
}

// 保存更新商家信息
export function saveOrUpdateBusiness(param){
    return axios.post('/Business/saveOrUpdate',param);
}







