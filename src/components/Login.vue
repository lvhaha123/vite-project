<template>
  <div class="container">
    <el-form
      :inline="false"
      :model="loginData"
      class="demo-form-inline"
      ref="formRef"
    >
      <el-form-item prop="user" label="账号">
        <el-input v-model="loginData.user" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item prop="passWord" label="密码">
        <el-input v-model="loginData.passWord" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(formRef)">登录</el-button>
        <el-button type="primary" @click="resetForm(formRef)">重置</el-button>
      </el-form-item>
    </el-form>
    <icon-fluent-emoji-house />
    <icon-bi-house-fill color="red" font-size="50" />
    <IconBaseline5g color="red" />
    <SvgIcon name="home" color="red" size="20px" />
  </div>
</template>

<script setup>
import { useCounterStore } from "@/store/counter";
import IconBaseline5g from "~icons/ic/baseline-5g";
const formRef = ref();
const router = useRouter();

const counterStore = useCounterStore();
const loginData = reactive({
  user: "",
  passWord: "",
});
const onSubmit = async (formEl) => {
  // ElMessage("this is a message.");
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    console.log("valid: ", valid);
    console.log(loginData);
    if (valid) {
      const res = await counterStore.login({ payload: loginData });
      console.log("res: ", res);
      if (res.success) {
        router.push("/hellowWorld");
      }
    } else {
      return false;
    }
  });
};
const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
const goToHelloWorld = () => {
  // 字符串路径
  router.push("/hellowWorld");
  // // 带有路径的对象
  // router.push({ path: '/user', query: { username: 'Jack' } })
  // router.push({ path: '/user', hash: '#team' })

  // // 带有命名的对象
  // router.push({ name: 'user', query: { username: 'Jack' } })
  // router.push({ name: 'user', params: { username: 'Tom' } })
  // router.push({ name: 'user', hash: '#team' })
};

onMounted(async () => {

});
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-form-inline {
  width: 20%;
}
</style>
