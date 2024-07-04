<script setup>
const canvas = ref()

onMounted(() => {
  if (canvas.value) console.log(canvas.value)
})
</script>

<template>
  <canvas ref='canvas' id='canvas'></canvas>
</template>
