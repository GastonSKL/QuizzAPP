<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const { quiz } = defineProps(["quiz"]);
const router = useRouter();

const navigate = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <div class="card" @click="navigate()">
    <img :src="quiz.img" alt="imgasd" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length + " questions" }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 19.75em;
  height: 16.75em;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2.2em;
  margin-right: 1.2em;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 11.8em;
}

.card-text {
  padding: 0.5em;
}

.card-text p {
  font-size: 0.8em;
}

.card-text h2 {
  font-weight: bolder;
}
</style>
