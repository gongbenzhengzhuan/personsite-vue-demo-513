<template>
  <h1>这里是角色页面</h1>
  <!--说明引入组件是成功的-->
  <div id="big">
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column prop="id" label="编号" align="center"/>
    <el-table-column prop="role" label="角色" align="center"/>
    <el-table-column prop="permisson" label="权限" align="center"/>
  </el-table>
  </div>
  <div id="page">
    起始页：<input type="number" placeholder="请输入起始页" v-model="productInfo.pageIndex">
    页数：<input type="number" placeholder="请输入页数" v-model="productInfo.pageSize">
    <!-- 按钮区域 -->
    <el-row justify="end">
      <el-form-item class="login_btn">
        <el-button type="primary" @click="GetUserInfo">查询</el-button>
      </el-form-item>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import {rolePageList} from "@/api/api"
// 请求延时（毫秒数，如果请求话费超过了'timeout'的时间，请求将被中断）
axios.defaults.timeout = 100000
export default {
  name: 'RoleView',
  methods: {
    GetUserInfo() {
      console.log("page:"+this.productInfo.pageIndex)
      rolePageList(this.productInfo).then(
          response => {
            let data = response.data;
            let code = response.code
            console.log(code)
            if (code === 204) {
              this.$router.push({path: '/'})
              return console.log('登录失败,请重新登录')
            }
            if (null === data) return console.log('内容为空')
            console.log(data)
            this.tableData.splice(0)
            data.forEach(
                element => {
                  this.tableData.push(
                      {
                        id: element.id,
                        permisson: element.permisson,
                        role: element.role
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
  mounted() {
    this.GetUserInfo()
  }
  ,
  data() {
    return {
      tableData: [],
      loginForm: {
        pageIndex: 1,
        pageSize: 1
      },
      productInfo: {
        pageIndex: 1,
        pageSize: 1
      }
    };
  }
}
</script>

<style>
#big {
  width: 80%;
  margin: auto;
}
</style>
