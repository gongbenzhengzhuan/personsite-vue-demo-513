<template>
  <nav>
    <router-link to="/home">主页页面</router-link> |
    <router-link to="/table">搜索界面</router-link> |
    <router-link to="/searchLogView">搜索日志界面</router-link> |
    <router-link to="/roleView">角色界面</router-link> |
    <router-link to="/userCrudView">用户界面</router-link> |
    <router-link to="/monitor">监控界面</router-link>
  </nav>
  <router-view/>
  <h1>这里是table页面</h1>
  <!--说明引入组件是成功的-->
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="date"
        label="日期"
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import request from '@/utils/request'
import {getLabel} from "@/api/api"
import {getAllData} from "@/api/api"
import {getArticleList} from "@/api/api"
// 请求延时（毫秒数，如果请求话费超过了'timeout'的时间，请求将被中断）
axios.defaults.timeout = 100000
export default {
  name: 'TableView',
  methods: {
    GetUserInfo() {
      //方案一
      //axios.get('http://123.60.190.167:8088//datasystem-client/labelManage/getLabelFeature?id=10991').then(
      getLabel().then(
    //  request('http://123.60.190.167:8088//datasystem-client/labelManage/getLabelFeature?id=10991').then(
      //方案二
      // const getNewList = () => {
      //   const params = {
      //     id: 10991
      //   }
      //   getArticleList(params).then(
      //方案三
    //  getAllData().then(
          response => {
            let data = response.data;
            let code = response.code
            console.log(code)
            if (code === 204) {
              this.$router.push({path: '/'})
              return console.log('登录失败,请重新登录')
            }
            if(null===data) return console.log('内容为空')
            console.log(data)
            data.forEach(
                element => {
                  this.tableData.push(
                      {
                        name: element.userName,
                        date: element.createTime,
                        address: element.operationType
                      }
                  );
                }
            );
          }
      )
    }
  }
//}
,
mounted()
{
  this.GetUserInfo()
}
,
data()
{
  return {
    tableData: [],
  };
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
