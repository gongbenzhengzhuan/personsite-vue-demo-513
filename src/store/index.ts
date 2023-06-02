import { createStore } from "vuex";
import configure from "./configure";
import user from "./user";
import song from "./song";

export default createStore({
  modules: {
    configure,
    user,
    song,
  },
  state:{
   // count:666,
    count:"dog",
    username:'',
    password:'',
  },
  mutations:{
    setName: (state, username) => {
      state.username = username;
    },
    setPassword: (state, password) => {
      state.password = password;
    },
    increment(state,username){
      console.log("indexusername:"+username)
      state.count=username;
     // state.count++
    },
    storePassword(state,password){
      console.log("indexpassword:"+password)
      state.password=password;
    }
  },
  actions: {
    loginStore: ({ commit }, { username, password}) => {
      commit("setName", username);
      commit("setPassword", password);
    },
  },

});
