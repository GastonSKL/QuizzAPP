<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";
import quizes from "../data/quizes.json";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

const rout = useRoute();
const idQuiz = parseInt(rout.params.id);
const currentQuestionId = ref(0);
const correctas = ref(0);
const quiz = quizes.find((e) => e.id === idQuiz);
const result = ref(false)

const questionStatus = computed(() => {
  return `${currentQuestionId.value}/${quiz.questions.length}`;
});

const porcentage = computed(() => {
  return `${(currentQuestionId.value / quiz.questions.length) * 100}%`;
});

const onSeleccionada = (isCorrect) =>{
    if(isCorrect){
        correctas.value++;
    }
    if(quiz.questions.length -1 === currentQuestionId.value){
        result.value = true;
    }

    currentQuestionId.value++;
}
</script>

<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" :porcentage="porcentage" />
    <div>
      <Question v-if="!result" :question="quiz.questions[currentQuestionId]" @selectOption="onSeleccionada"/>
      <Result v-else :quizLength="quiz.questions.length" :correctas="correctas"/>
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
