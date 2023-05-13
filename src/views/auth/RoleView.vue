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
  <h1>这里是角色页面</h1>
  <!--说明引入组件是成功的-->
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="id"
        label="主键"
        width="180">
    </el-table-column>
    <el-table-column
        prop="role"
        label="角色"
        width="180">
    </el-table-column>
    <el-table-column
        prop="permisson"
        label="权限"
        width="180">
    </el-table-column>
  </el-table>

  <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
    <!-- 用户名 -->
    <el-form-item prop="pageIndex">
      <el-input
          v-model="loginForm.pageIndex">
      </el-input>
    </el-form-item>
    <!-- 密码 -->
    <el-form-item prop="pageSize">
      <el-input
          v-model="loginForm.pageSize" type="pageSize">
      </el-input>
    </el-form-item>
    <!-- 按钮区域 -->
    <el-row justify="end">
      <el-form-item class="login_btn">
        <el-button type="primary" @click="GetUserInfo">查询</el-button>
      </el-form-item>
    </el-row>
  </el-form>

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
      console.log("page:"+this.loginForm.pageIndex)
      rolePageList(this.loginForm).then(
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
      }
    };
  }
}
</script>

<style>
</style>
