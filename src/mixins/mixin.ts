
import { useStore } from "vuex";
import { LocationQueryRaw } from "vue-router";
import {computed} from "vue";

interface routerOptions {
  path?: string;
  query?: LocationQueryRaw;
}

export default function () {

  const store = useStore();
  const token = computed(() => store.getters.token);

  function getUserSex(sex) {
    if (sex === 0) {
      return "女";
    } else if (sex === 1) {
      return "男";
    }
  }


  return {
    getUserSex,
  };
}
