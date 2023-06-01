<template>
  <h1>这里是角色页面</h1>
  <!--说明引入组件是成功的-->
  <div id="big">
    <el-image class="song-pic" fit="contain" :src="attachImageUrl(songPic)" />
    <br/>
    <span>{{ musicName }}</span>
    <button @click="click">换一个</button>
    <el-form-item prop="location" label="地区">
      <el-select v-model="registerForm.location" placeholder="地区" style="width: 100%">
        <el-option v-for="item in AREA" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
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
  <div><index :icon="iconList.Support"></index>支持</div>
  <button @click="goPage">跳回主页</button>
</template>

<script>
import {reactive, computed, getCurrentInstance, ref} from "vue";
import { useStore } from "vuex";
import axios from "axios";
import {RouterName,AREA, NavName,singerStyle,SignUpRules,Icon, MUSICNAME,MULTIMUSICNAME} from "@/enums";
import {rolePageList} from "@/api/api"
import { HttpManager } from "@/api";
// 请求延时（毫秒数，如果请求话费超过了'timeout'的时间，请求将被中断）
//https://blog.csdn.net/weixin_45503733/article/details/126701525
axios.defaults.timeout = 100000
const iconList = reactive({
  Support: Icon.Support,
});
const songPic = "http://101.37.117.226:9090/wdhcr/%E5%BC%A0%E6%85%A7%E5%A6%B9Thu%20Jun%2001%202023%2015%3A29%3A54%20GMT%2B0800%20%28%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4%29?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7v3qUvGaLweXRbw4%2F20230601%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230601T072954Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b287fe62e51ef9739a9910724f223aae86bae72395d76209923a6b9e959aaf95";

// https://blog.csdn.net/sinat_37792529/article/details/124375393
const musicName = ref();
musicName.value = MUSICNAME;
const click =()=>{
  musicName.value = MUSICNAME+MULTIMUSICNAME.pop().label
};


const registerForm = reactive({
  username: "",
  password: "",
  sex: "",
  phoneNum: "",
  email: "",
  birth: new Date(),
  introduction: "",
  location: "",
});

export function goPage() {
  //问题出在this上
  this.$router.push({path: '/'})
}

export default {
  name: 'RoleView',
  methods: {
    GetUserInfo() {
      //测试枚举类型
      console.log(NavName.Home)
     // console.log(HEADERNAVLIST[0])
      console.log(singerStyle)
      console.log(SignUpRules.phoneNum)
      console.log(Icon.Dislike)
      console.log(Icon.Support)

      //测试var ,let,const
      //const声明一个只读的常量。一旦声明，常量的值就不能改变。
      const a = 10;
      console.log("a:" + a);

      //let声明 的变量只在它所在的代码块有效。
      for (let i = 0; i < 3; i++) {
        console.log("i1:" + i)
        // let i = 'abc';
        // console.log("i2:"+i);
      }

      //var可以先使用，后声明；let必须先声明后使用。
      var m;
      m = 11;
      console.log("m:" + m);

      const store = useStore();

     // proxy.$store.commit("setSongTitle","zhoujielun");
     // store.commit("setSongTitle","zhoujielun");
     //  const songTitle = computed(() => store.getters.songTitle);
     //  console.log(songTitle.value);

      console.log("page:" + this.productInfo.pageIndex)
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
      },iconList,
      attachImageUrl: HttpManager.attachImageUrl,
      songPic,
      musicName,
      click,
      AREA,
      registerForm,
      MULTIMUSICNAME,
      RouterName,
      goPage,
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
