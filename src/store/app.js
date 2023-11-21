import { defineStore } from "pinia";
import { setToken } from "@/utils/request";
import api from '../services';
const { login, getList } = api;
export const appStore = defineStore('appStore', {
  state: () => {
    return {
      number: 10,
      num: {
        number: 6,
      },
      birth: '1993-10-16',
      menuList: localStorage.getItem("menuList") || [],
    };
  },
  // 类似计算属性
  getters: {
    age(state) {
      console.log('改变了');
      return new Date().getFullYear() - new Date(state.birth).getFullYear()
    }
  },
  // 修改state
  actions: {
    async login({ payload }) {
      this.number = 20;
      console.log('this.number: ', this.number);
      const res = await login(payload);
      if (res.success) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
      }
      return res;
    },
    async getList({ payload }) {
      const res = await getList(payload);
      return res;
    },
  },
})