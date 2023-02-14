<script setup>
import { defineProps } from 'vue';

const{question} = defineProps(['question']);
</script>

<template>
  <div class="question__container">
    <h1 class="question">{{question.text}}</h1>
  </div>
  <div class="answer__container">
    <div v-for="option in question.options" class="option">
      <p class="option-label">{{option.label}}</p>
      <div class="option__value">
        <p>{{option.text}}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.question__container {
    margin-top: 20px;
  }
  
  .question {
    font-size: 1.2em;
    margin-bottom: 1em;
  }
  
  .option {
    display: flex;
    margin-bottom: 1em;
    cursor: pointer;
  }
  
  .option-label {
    background-color: rgb(170, 170, 170);
    height: 1.2em;
    width: 1.2em;
    border-radius: 50%;
    font-size: 1em;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  
  .option__value {
    background-color: rgb(244, 239, 239);
    width: 100%;
    font-size: 1.2em;
    padding: 0 1.2em;
  }
</style>