<script setup>
const props = defineProps({
  name: { type: String, default: "" },
  color: { type: String, default: "#333" },
  size: { type: String, default: "16px" },
});
const iconName = computed(() => `#icon-svg-${props.name}`);
</script>

<template>
  <svg class="c-icon" aria-hidden="true">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<style scoped lang="scss">
$width: v-bind(size);
$height: v-bind(size);
.c-icon {
  width: $width;
  height: $height;
  position: relative;
  fill: currentColor;
}
</style>
