<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, watch, reactive, watchEffect, computed } from 'vue'
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';
import MyCom from './MyCom.vue';

defineProps({
  msg: String
})


const counterStore = useCounterStore();
// storeToRefs使store中的数据在页面中变成响应式数据，页面中引用时需要用.value,
// 如果不使用storeToRefs，可以不使用解构的方式去改变number的值，直接counterStore.number=++counterStore.number;页面中直接应用counterStore.number，也可以响应
// 也可以直接使用vue中的toRefs代替storeToRefs，
const { number, num, age, birth } = storeToRefs(counterStore);
const count = ref(0);
const btn2 = ref(null);
const obj = reactive({ name: '小兰', age: 23 });
const arr = reactive([{ one: 'apple' }]);
let num2 = computed(() => num.value.number + 1);

let tableData = reactive([]);

//直接调用请求方法

// 节流
function throttle(fn, delay) {
  let flag = true;
  return function () {
    if (flag) {
      flag = false;
      fn();
      setTimeout(() => {
        flag = true;
      }, delay)
    }
  }
}
// 防抖
function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(
      fn, delay)
  }
}
const csl = () => { console.log(11111) };
const onClick = () => {
  counterStore.$state = { number: ++number.value };
}
const onChangeName = () => {
  obj.age = obj.age + 1;
};
const onChangeArr = () => {
  arr[0].one = 'pinia'
}
// DOM即将挂载
onBeforeMount(() => {
  console.log('----onBeforeMount----')
})

// DOM挂载完毕（一般数据请求在这里写）
onMounted(async () => {
  const res = await counterStore.login({ payload: { userName: 'admin', passWord: 'bGlkaUAxMjM=' } });
  console.log('res: ', res);
  const res11 = await counterStore.getList({ payload: { userName: 'admin', passWord: 'bGlkaUAxMjM=' } });
  console.log('res11: ', res11);
  console.log('----onMounted----')
  // 监听事件
  // 页面缩放时触发
  window.addEventListener('resize', () => { console.log(7777) });
  // 按钮点击（防抖)
  let btn = document.getElementById('btn');//用getElementById获取dom
  console.log('btn: ', btn);
  btn.addEventListener('click', debounce(csl, 1000), false);
  console.log(btn2.value, 'btn2') // 用ref直接绑定dom
  btn2.value.addEventListener('click', debounce(csl, 1000), false);
})

// DOM即将更新
onBeforeUpdate(() => {
  console.log('----onBeforeUpdate----')
})
// DOM更新完毕
onUpdated(() => {
  console.log('----onUpdated----')
})
// 即将销毁
onBeforeUnmount(() => {
  console.log('----onBeforeUnmount----')
})
// 销毁完毕
onUnmounted(() => {
  console.log('----onUnmounted----')
})
// 监听单个变量
watch(arr, (newValue, oldValue) => {
  console.log('arr', newValue, oldValue[0].one);
})

// 监听多个变量
watch([count, obj], (newValue, oldValue) => {
  console.log('value', newValue, oldValue);
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="num.number++">count is {{ num.number }}</button>
    <div>
      <button id="btn" type="button" @click="onChangeName">name is{{ obj.name }},age is {{ obj.age }}</button>
    </div>
    <div>{{ plusOne }}</div>
    <button type="button" @click="onChangeArr" ref="btn2">
      changeArr
    </button>
    <ul class="ulStyle">
      <li v-for="item in arr">{{ item }}</li>
    </ul>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p @click="onClick" class="number">number:{{ number }}</p>
  </div>

  <div><span>生日: {{ birth }} , 年龄: {{ age }}</span></div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <div style="color:red">num2:{{ num2 }}</div>
  <MyCom>
    <template #footer>
      <span>
        底部
      </span>
    </template>
    <template #header>
      <span>
        头部
      </span>
    </template>
  </MyCom>
</template>

<style scoped lang="less">
button {
  background-color: #f8f3f3;
}

.read-the-docs {
  color: #888;
}

.number {
  cursor: pointer;
}

.ulStyle {
  li {
    list-style: none;
  }
}
</style>
