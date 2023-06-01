<template>
  <div><yin-icon :icon="iconList.Support"></yin-icon> 点赞</div>
  <br/>
  <span>{{ musicName }}</span>
  <button @click="click">换一个</button>
  <br/>
  <yin-header-nav class="yin-header-nav" :styleList="headerNavList" :activeName="activeNavName" @click="goPage">调整</yin-header-nav>


</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref, getCurrentInstance, computed, reactive } from "vue";
import YinIcon from "./YinIcon.vue";
import YinHeaderNav from "./YinHeaderNav.vue";
import {HEADERNAVLIST, SIGNLIST, MENULIST, Icon, MUSICNAME, NavName, MULTIMUSICNAME} from "@/enums";
import { HttpManager } from "@/api";
const iconList = reactive({
  Support: Icon.Support,
});
import mixin from "@/mixins/mixin";
const headerNavList = ref(HEADERNAVLIST);
export default defineComponent({
  name: "YinHeader",
  components: {
    YinIcon,
    YinHeaderNav,
  },
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const { getUserSex } = mixin();
    const store = useStore();
    const musicName = ref();
    musicName.value = MUSICNAME;
    //proxy.$store.commit("setUsername", "lili");
    const click =()=>{
      const activeNavName = computed(() => store.state.username);
      console.log("title:"+activeNavName);
      console.log("sex:"+getUserSex(1))
      console.log(iconList.Support)
      musicName.value = MUSICNAME;
      //musicName.value = MUSICNAME+MULTIMUSICNAME.pop().label
    };

    function goPage() {
      proxy.$router.push({ path: "/home"});
    }

    return {
      goPage,
      headerNavList,
      MUSICNAME,
      MULTIMUSICNAME,
      musicName,
      click,
      getUserSex,
      iconList,
    };

  }
})
</script>

<style scoped>
.yin-header-nav {
  flex: 1;
}
</style>