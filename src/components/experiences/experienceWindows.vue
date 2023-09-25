<script setup lang="ts">

</script>

<template>
<div class="popup div-centree">
    <img src="../../assets/x-solid.svg" alt="X" class="toggleIcon" @click="$emit('toggleJob')">
</div>
</template>

<style scoped>
div > img {
  width: 16px;
}

div {
  z-index: 30000;
  padding: 2em;
  backdrop-filter: blur(50px);
}

a img {
  margin-right: 2em;
  width: 32px;
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(116deg) brightness(99%) contrast(102%);
}
</style>