<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import quizes from "../data/quizes.json";
import { useRoute } from "vue-router";
import { ref } from "vue";

const rout = useRoute();
const idQuiz = parseInt(rout.params.id);
const currentQuestionId = ref(0);
const quiz = quizes.find(e=>e.id === idQuiz)
const questionStatus = `${currentQuestionId.value + 1}/${quiz.questions.length}`

</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus"/>
    <div>
      <Question :question="quiz.questions[currentQuestionId]"/>
    </div>
  </div>
</template>

<style scoped>
.completion {
  height: 100%;
  width: 0%;
  background-color: rgb(170, 170, 170);
}
</style>
