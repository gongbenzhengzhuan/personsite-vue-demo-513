<template>
  <div>
    <div id="main"></div>
    <div id="maychar"></div>
  </div>
</template>

<script lang="js">
import { defineComponent, onMounted, inject } from "vue"; // 主要
import * as echarts from 'echarts'
export default defineComponent({
  setup() {
    onMounted(() => {
      change();
      changetype();
    });
    //https://blog.csdn.net/m0_46114541/article/details/127771279
    //https://blog.csdn.net/qq_57035859/article/details/126363323
    //let echarts = inject("echarts"); // 主要
    // 基本柱形图
    const change = () => {
      const chartBox = echarts.init(document.getElementById("main")); // 主要
      const option = {
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            data: [23, 24, 18, 25, 27, 28, 25],
          },
        ],
      };
      chartBox.setOption(option);
      // 根据页面大小自动响应图表大小
      window.addEventListener("resize", function () {
        chartBox.resize();
      });
    };
    // 折线图
    const changetype = () => {
      // 获取组件实例
      const machart = echarts.init(document.getElementById("maychar"));
      // 设置配置项
      const option = {
        xAxis: {
          data: ["A", "B", "C", "D", "E"],
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: "line",
            stack: "x",
          },
          {
            data: [5, 4, 3, 5, 10],
            type: "line",
            stack: "x",
          },
        ],
      };
      // 复制
      machart.setOption(option);
      // 根据页面大小自动响应图表大小
      window.addEventListener("resize", function () {
        machart.resize();
      });
    };
    return {
      changetype,
    };
  },
});
</script>

<style lang="scss" scoped>
#main {
  min-width: 31.25rem;
  min-height: 31.25rem;
  // max-height: 500px;
}

#maychar {
  max-height: 500px;
  // max-height: 400px;
  height: 500px;
}
</style>