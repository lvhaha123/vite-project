import { defineStore } from "pinia";
import api from '../services';
const { login } = api;
export const useCounterStore = defineStore('counterStore', {
  state: () => {
    return {
      number: 10,
      birth: '1993-10-16',
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
    login({ payload }) {
      login(payload);
    }
  },
})