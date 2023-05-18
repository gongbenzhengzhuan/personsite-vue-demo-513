<template>
  <div class="login_container">
    <div class="login_box">
      <h1>这里是搜索日志页面</h1>
      <!--说明引入组件是成功的-->
      <div id="big">
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column prop="userName" label="用户名" align="center"/>
        <el-table-column prop="roleName" label="角色名" align="center"/>
        <el-table-column prop="subsystem" label="系统名" align="center"/>
        <el-table-column prop="operationType" label="操作类型" align="center"/>
        <el-table-column prop="createTime" label="创建时间" align="center"/>
      </el-table>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {getLabel} from "@/api/api"
// 请求延时（毫秒数，如果请求话费超过了'timeout'的时间，请求将被中断）
axios.defaults.timeout = 100000
export default {
  name: 'SearchLogView',
  methods: {
    GetUserInfo() {
      getLabel().then(
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
                        userName: element.userName,
                        roleName: element.roleName,
                        subsystem: element.subsystem,
                        operationType: element.operationType,
                        createTime: element.createTime
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
    };
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100vh;
}
.login_box {
  // 宽450像素
  width: 900px;
  // 高300像素
  height: 300px;
  // 背景颜色
  background-color: #fff;
  // 圆角边框3像素
  border-radius: 3px;
  // 绝对定位
  position: absolute;
  // 距离左则50%
  left: 50%;
  // 上面距离50%
  top: 50%;
  // 进行位移，并且在横轴上位移-50%，纵轴也位移-50%
  transform: translate(-50%, -50%);
  .avatar_box {
    // 盒子高度130像素
    height: 130px;
    // 宽度130像素
    width: 130px;
    // 边框线1像素 实线
    border: 1px solid #eee;
    // 圆角
    border-radius: 50%;
    // 内padding
    padding: 10px;
    // 添加阴影 向外扩散10像素 颜色ddd
    box-shadow: 0 0 10px #ddd;
    // 绝对定位
    position: absolute;
    // 距离左则
    left: 50%;
    // 位移
    transform: translate(-50%, -50%);
    // 背景
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

#big {
  width: 80%;
  margin: auto;
}
</style>
