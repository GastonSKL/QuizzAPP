<script setup>
import Card from "../components/Card.vue";
import q from "../data/quizes.json";
import { ref, watch } from "vue";

const quizes = ref(q);
const search = ref("");
watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
  );
});
</script>

<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input type="text" placeholder="Search..." v-model.trim="search" />
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :quiz="quiz" />
    </div>
  </div>
</template>

<style scoped>
header {
  margin-bottom: 0.8em;
  margin-top: 2em;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: 700;
  margin-right: 2em;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 0.7em;
  border-radius: 0.6em;
}
.options-container {
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  margin-top: 2.5em;
}
</style>
