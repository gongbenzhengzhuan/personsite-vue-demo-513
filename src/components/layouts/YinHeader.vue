<template>
  <div><yin-icon :icon="iconList.Support"></yin-icon> 点赞</div>
  <br/>
  <span>{{ musicName }}</span>
  <button @click="click">换一个</button>
  <br/>
  <yin-header-nav class="yin-header-nav" :styleList="headerNavList" :activeName="activeNavName" @click="goPage">调整</yin-header-nav>


</template>

<script lang="ts">
import {useStore} from "vuex";
import { onBeforeMount, defineComponent, ref, getCurrentInstance, computed, reactive } from "vue";
import YinIcon from "./YinIcon.vue";
import YinHeaderNav from "./YinHeaderNav.vue";
import {HEADERNAVLIST, SIGNLIST, MENULIST, Icon, MUSICNAME, NavName, MULTIMUSICNAME} from "@/enums";
import { HttpManager } from "@/api";
import { parseLyric } from "@/utils";
const iconList = reactive({
  Support: Icon.Support,
});
import mixin from "@/mixins/mixin";
import store from "../../store/index";
const headerNavList = ref(HEADERNAVLIST);
export default defineComponent({
  name: "YinHeader",
  components: {
    YinIcon,
    YinHeaderNav,
  },
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const { getUserSex,playMusic } = mixin();
   // const store = useStore();
    const musicName = ref();
    musicName.value = MUSICNAME;
    function handleLoginIn() {
      proxy.$store.commit("setUsername", "lili");
    }

    // onBeforeMount(() => {
    //   console.log(2)
    //   store.commit('increment')
    //   console.log(3)
    // })

    const click =()=>{
      // playMusic({
      //   id: 1,
      //   url: "uls",
      //   pic: "uls",
      //   index: "uls",
      //   name: "uls",
      //   lyric: "uls",
      //   currentSongList: "uls",
      // });

     // const store = useStore();
    //  console.log(store.state.count);

      parseLyric("握不住的沙不如扬了吧，不是你的菜快点放下吧，脚下的路有千万条，怎么迈不开步还要老守着它，号不准的脉别把药来抓，不该做的事别去惦记它");

      //https://blog.csdn.net/weixin_52653803/article/details/128666210
      console.log("username++++++++++++++:"+store.state.count);
      console.log("password++++++++++++++:"+store.state.password);


      // const activeNavName = computed(() => store.state.user.username);
      // console.log("title:"+activeNavName);
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
      handleLoginIn,
      store,
    };

  }
})
</script>

<style scoped>
.yin-header-nav {
  flex: 1;
}
</style>