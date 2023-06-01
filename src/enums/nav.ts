import { RouterName } from "./router-name";

export const enum NavName {
  Home = "首页",
  SongSheet = "歌单",
  Singer = "歌手",
  Personal = "个人主页",
  Setting = "设置",
  SignIn = "登录",
  SignUp = "注册",
  SignOut = "退出",
}

// 左侧导航栏
export const HEADERNAVLIST = [
  {
    name: NavName.Home,
    path: RouterName.HOME,
  },
  {
    name: NavName.SongSheet,
    path: RouterName.RoleView,
  },
];

// 右侧导航栏
export const SIGNLIST = [
  {
    name: NavName.Personal,
    path: RouterName.RoleView,
  },
  {
    name: NavName.SignUp,
    path: RouterName.UserCrudView,
  },
];

// 用户下拉菜单项
export const MENULIST = [
  {
    name: NavName.Personal,
    path: RouterName.RoleView,
  },
  {
    name: NavName.Setting,
    path: RouterName.UserCrudView,
  },
];
