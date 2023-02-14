<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const {quizLength, correctas} = defineProps(['correctas','quizLength']) 
</script>
<template>
<div class="result">
    <p class="resultado">Your result is...</p>
    <h1>{{correctas}}/{{quizLength}}</h1>
</div>
<RouterLink to="/">Back!</RouterLink>

</template>

<style scoped>

.result{
    text-align: center;
    margin-top: 1em;
}
</style>