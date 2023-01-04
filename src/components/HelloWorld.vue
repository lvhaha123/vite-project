<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';

defineProps({
  msg: String
})


const counterStore = useCounterStore();
// storeToRefs使store中的数据在页面中变成响应式数据，页面中引用时需要用.value,
// 如果不使用storeToRefs，可以不使用解构的方式去改变number的值，直接counterStore.number=++counterStore.number;页面中直接应用counterStore.number，也可以响应
// 也可以直接使用vue中的toRefs代替storeToRefs，
const { number, age, birth } = storeToRefs(counterStore);
const count = ref(0);
const onClick = () => {
  counterStore.$state = { number: ++number.value }
}
// DOM即将挂载
onBeforeMount(() => {
  console.log('----onBeforeMount----')
})

// DOM挂载完毕（一般数据请求在这里写）
onMounted(() => {
  // counterStore.login({ payload: { userName: 'admin', passWord: 'bGlkaUAxMjM=' } });
  console.log('----onMounted----')
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

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p @click="onClick" class="number">{{ number }}</p>
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
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.number {
  cursor: pointer;
}
</style>
