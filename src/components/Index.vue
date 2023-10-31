<script setup>
onMounted(async () => {

})

</script>

<template>
  <el-container class="layout-container-demo">
    <el-header>Header</el-header>
    <el-container style="overflow: hidden;">
      <el-aside width="200px">Aside</el-aside>
      <el-container class="content">
        <el-main> <router-view /></el-main>
      </el-container>
    </el-container>

  </el-container>
</template>

<style scoped lang="less">
.layout-container-demo {
  height: 100%;
}
.content{
  overflow: hidden;
}
</style>
