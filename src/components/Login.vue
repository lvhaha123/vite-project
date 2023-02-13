<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '../store/counter';
const router = useRouter();

const counterStore = useCounterStore();
const goToHelloWorld = () => {
  // 字符串路径
  router.push('/hellowWorld');
  // // 带有路径的对象
  // router.push({ path: '/user', query: { username: 'Jack' } })
  // router.push({ path: '/user', hash: '#team' })

  // // 带有命名的对象
  // router.push({ name: 'user', query: { username: 'Jack' } })
  // router.push({ name: 'user', params: { username: 'Tom' } })
  // router.push({ name: 'user', hash: '#team' })
}

onMounted(async () => {
  const res = await counterStore.login({ payload: { userName: 'admin', passWord: 'bGlkaUAxMjM=' } });
})

</script>

<template>
  <div @click="goToHelloWorld">login</div>
  <RouterLink to="/hellowWorld">User</RouterLink>
</template>

<style scoped>

</style>
