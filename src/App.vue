<script setup>
import { RouterView } from 'vue-router';
import QuizesView from './views/QuizesView.vue';
</script>

<template>
    <div class="container">
        <RouterView/>
    </div>
</template>

<style scoped>
.container {
    max-width: 68.5em;
    margin: 0 auto;
    padding: 1em;
  }



</style>


