<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <a href="http://123.60.190.167:8080/" target="_blank" rel="jenkins">点击进入jenkins的登录页账号密码admin</a>
      <br/><br/>
      <a href="http://101.37.117.226:8848/nacos/#/login" target="_blank" rel="nacos">点击进入nacos的登录页账号密码nacos</a>
      <br/><br/>
      <a href="http://101.37.117.226:20712/hr" target="_blank" rel="hr">点击进入hr的登录页</a>
      <br/><br/>
      <a href="http://101.37.117.226:8081/" target="_blank" rel="nexus">点击进入nexus的登录页</a>
      <br/><br/>
      <a href="http://101.37.117.226:9411/zipkin/?serviceName=all&spanName=all&lookback=3600000&startTs=1681996422086&endTs=1682000022086&annotationQuery=&minDuration=&limit=10&sortOrder=duration-desc" target="_blank" rel="zipkin">点击进入zipkin的登录页</a>
      <br/><br/>
      <a href="http://101.37.117.226:8111/#/login" target="_blank" rel="sentinel">点击进入sentinel的登录页</a>
      <br/><br/>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SentinelView',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
