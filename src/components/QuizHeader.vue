<script setup>
import { defineProps } from 'vue';

const{questionStatus, porcentage} = defineProps(['questionStatus', 'porcentage']);
</script>

<template>
  <header>
    <h4>Question {{questionStatus}}</h4>
    <div class="bar">
      <div class="completion" :style="{width: porcentage}"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 1.2em;
}

header h4 {
  font-size: 1.8em;
}

.bar {
  border: 3px solid rgb(170, 170, 170);
  width: 16em;
  height: 3em;
}
</style>
