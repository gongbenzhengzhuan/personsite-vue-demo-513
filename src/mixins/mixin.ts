
import {useStore}  from "vuex";
import { LocationQueryRaw } from "vue-router";
import {computed,getCurrentInstance} from "vue";

interface routerOptions {
  path?: string;
  query?: LocationQueryRaw;
}

export default function () {
  const { proxy } = getCurrentInstance() as any;
  const store = useStore();
  const token = computed(() => store.getters.token);

  function getUserSex(sex) {
    if (sex === 0) {
      return "女";
    } else if (sex === 1) {
      return "男";
    }
  }

  // 播放
  function playMusic({ id, url, pic, index, name, lyric, currentSongList }) {
    const songTitle = name;
    const singerName = name;
    proxy.$store.dispatch("playMusic", {
      id,
      url,
      pic,
      index,
      songTitle,
      singerName,
      lyric,
      currentSongList,
    });
  }

  return {
    playMusic,
    getUserSex,
  };
}
