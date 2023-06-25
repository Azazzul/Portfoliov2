<script setup lang="ts">
import { ref } from "vue";
import { defineProps } from 'vue';

const props = defineProps(['projets']);
const current = ref(0);

// Méthode pour passer à l'élément suivant
const nextItem = () => {
  current.value = (current.value + 1) % props.projets.length;
};

// Méthode pour revenir à l'élément précédent
const previousItem = () => {
  current.value = (current.value - 1 + props.projets.length) % props.projets.length;
};
</script>

<template>
  <div class="popup div-centree">
    <img src="../../assets/x-solid.svg" alt="X" class="toggleIcon" @click="$emit('toggleProject')">
    <div v-for="(prop, index) in props.projets" :key="index" v-show="index === current">
      <!-- Contenu de chaque élément -->
      <h2>{{ prop?.title }}</h2>
      <h3 v-if="prop?.client !== undefined">Projet réalisé pour {{ prop?.client }}</h3>
      <p>réalisé le {{ prop.dates }}</p>
      <img src="../../assets/screenshot/lab1.png" alt="">
      <!-- <img :src="prop.images" alt="image projet"> -->
      <p>{{ prop.description }}</p>
      <a :href="prop.lien">
        <img src="../../assets/github.svg" alt="github icon">
      </a>
    </div>
    <!-- Boutons pour passer à l'élément suivant et revenir en arrière -->
    <button @click="previousItem" class="knowMore">&#8592;</button>
    <button @click="nextItem" class="knowMore">&#8594;</button>
  </div>
</template>

<style scoped>
.div-centree{
  z-index: 2000;
  max-height: 80%}
img[alt='github icon'] {
//margin-right: 2em; width: 32px;
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(116deg) brightness(99%) contrast(102%);
}

img[alt='image projet'] {
  max-height: 10em;
  margin-bottom: 0.5em;
}
.knowMore{
    margin: 0.5em;
}
.popup{
  padding: 1.5em;
}
button{

}
</style>