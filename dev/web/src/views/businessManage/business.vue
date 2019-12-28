/*
 * @Author: liuyr 
 * 商家列表页面
 * @Date: 2019-12-23 17:11:53 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-26 10:04:48
 */
<template>
  <div id="businessList">

    
    
    <el-select v-model="province" @change="provinceChange" clearable placeholder="省份">
    <el-option
      v-for="item in provinceData"
      :key="item.id"
      :label="item.name"
      :value="item.name">
    </el-option>
  </el-select>

  <el-select v-model="city"  @change="cityChange" clearable placeholder="城市">
    <el-option
      v-for="item in cityData"
      :key="item.id"
      :label="item.name"
      :value="item.name">
    </el-option>
  </el-select>

  <el-select v-model="industry"  @change="industryChange" clearable placeholder="行业">
    <el-option
      v-for="item in industryData"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>

  <el-select v-model="scale" @change="scaleChange"  clearable placeholder="规模">
    <el-option
      v-for="item in scaleData"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>

    <el-table ref="multipleTable" @selection-change="selectionChange"  :data="businessData" style="width: 100%">
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="name"
      label="企业名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="contactName"
      label="联系人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="contactPhone"
      label="联系方式"
      width="120">
    </el-table-column>
    <el-table-column
      prop="industry"
      label="行业"
      width="120">
    </el-table-column>
    <el-table-column
      label="所在地"
      width="100"><template slot-scope="scope">{{scope.row.province}}-{{scope.row.city}}</template>
    </el-table-column>
    <el-table-column
      prop="scale"
      label="公司规模"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="详情"
      width="120">
        <template slot-scope="scope">
            <el-button @click="toSee(scope.row)" type="text" size="small">查看</el-button>
          </template>
    </el-table-column>
     <el-table-column
     
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)"  type="text" size="small">编辑</el-button>
         <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import {findAllProvince} from '@/api/province.js';
import {findAllCity} from '@/api/city.js';
import {findAllBusiness,findBusinessByIndustry} from "@/api/business.js";
import {findBusinessByProvince,findBusinessByCity,findBusinessByScale} from '@/api/business.js';
import config from '@/utils/config.js';

export default {
  data() {
    return {
      province:"",city:"",industry:"",scale:"",
      businessData:[],
      businessList:[],
      provinceData: [],
      

      cityData: [],
        
      industryData: [],

      scaleData: [],

      
      value: ''
    };
  },
  computed: {},
  methods: {

       //规模筛选
    async scaleChange(val){
      if(val){
          try {
          let res = await findBusinessByScale({scale:val}) ;
          this.businessData=res.data;
          this.province=""
          this.city=""
          this.industry=""
        } catch (error) {
          
        }
      }else{this.findAllBus();}
     
    },

    //行业筛选
    async industryChange(val){
      if(val){
          try {
          let res = await findBusinessByIndustry({industry:val}) ;
          this.businessData=res.data;
          this.province=""
          this.city=""
          this.scale=""
        } catch (error) {
          
        }
      }else{this.findAllBus();}
     
    },

     //城市筛选
    async cityChange(val){
      if(val){
          try {
          let res = await findBusinessByCity({city:val}) ;
          this.businessData=res.data;
          this.province=""
          this.industry=""
          this.scale=""
        } catch (error) {
          
        }
      }else{this.findAllBus();}
     
    },

    //省份筛选
    async provinceChange(val){
      if(val){
          try {
          let res = await findBusinessByProvince({province:val}) ;
          this.businessData=res.data;

        } catch (error) {
          
        }
      }else{this.findAllBus();}

      console.log(val);
     
    },

    selectionChange(val) {
      //val 就是选中的对象组成的数组
      console.log(val);
    },

    //查看
    toSee(row){
      alert('查看');
    },

    //编辑
    toEdit(row){
      alert('查看');
    },

    //删除
    toDelete(id){
      alert('查看');
    },

    async findAllBus(){
     try {
        let res = await findAllBusiness();
        this.businessData=res.data; 
        
         //行业数组
        let industryArr = res.data.map(item => {
          return item.industry;
        });
        //去重
        this.industryData = [...new Set(industryArr)];
        //规模数组
        let scaleArr = res.data.map(item => {
          return item.scale;
        });
        //去重
        this.scaleData = [...new Set(scaleArr)];
        
     } catch (error) {
        config.errorMsg(this,'查找错误');
     }
    },


    async findAllPro(){
      try {
        let res = await findAllProvince();
        this.provinceData = res.data;
        
        
      } catch (error) {
        config.errorMsg(this,'查找错误');
      }
    },

    async findAllCi(){
      try {
        let res = await findAllCity();
        this.cityData = res.data;
        
        
      } catch (error) {
        config.errorMsg(this,'查找错误');
      }
    },




  },
  created() {
    this.findAllPro();
    this.findAllCi();
    this.findAllBus();
  },
  mounted() {
    
 

  }
};
</script>
<style scoped>
</style>