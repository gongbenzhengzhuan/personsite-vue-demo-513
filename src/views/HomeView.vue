<template>
  <nav>
    <router-link to="/home">主页页面</router-link> |
    <router-link to="/table">搜索界面</router-link> |
    <router-link to="/searchLogView">搜索日志界面</router-link> |
    <router-link to="/roleView">角色界面</router-link> |
    <router-link to="/userCrudView">用户界面</router-link> |
    <router-link to="/yinHeader">音乐界面</router-link> |
    <router-link to="/injectEchartView">统计图界面</router-link> |
    <router-link to="/monitor">监控界面</router-link>
  </nav>
  <router-view/>
</template>