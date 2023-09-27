<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(['jobs']);
const current = ref(0);

// Méthode pour passer à l'élément suivant
const nextItem = () => {
  current.value = (current.value + 1) % props.jobs.length;
  console.log(props.jobs)
};

// Méthode pour revenir à l'élément précédent
const previousItem = () => {
  current.value = (current.value - 1 + props.jobs.length) % props.jobs.length;
};
</script>

<template>
  <div class="popup div-centree">
    <img src="../../assets/x-solid.svg" alt="X" class="toggleIcon" @click="$emit('toggleJob')">
    <div class="content" v-for="(prop, index) in props.jobs" :key="index" v-show="index === current">
      <!-- Contenu de chaque élément -->
      <h2>{{ prop?.title }}</h2>

      <img :src="prop?.image" alt="image job"  class="img_jobs">
      <!-- <img :src="prop.images" alt="image projet"> -->
      <p>{{ prop.job_description }}</p>
      <p>J'ai pu travailler avec {{ prop.competences }}</p>
      <p v-if="prop.date_debut !== undefined && prop.date_fin !== undefined ">Cette expérience professionnelle a durée {{ prop.durations }} en commencant en {{ prop.date_debut }} et se terminant en {{ prop.date_fin }}.</p>
    </div>
    <!-- Boutons pour passer à l'élément suivant et revenir en arrière -->
    <button @click="previousItem" class="knowMore">&#8592;</button>
    <button @click="nextItem" class="knowMore">&#8594;</button>
  </div>
</template>

<style scoped>
.div-centree {
  z-index: 2000;
  width: 50%;
  max-height: 80%;
  overflow-y: auto; /* Ajout de la propriété overflow-y avec la valeur auto */
  backdrop-filter: blur(200px);
}


img[alt='github icon'] {
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(116deg) brightness(99%) contrast(102%);
  height: 3em;
}

.img_jobs {
  max-height: 10em;
  margin-bottom: 0.5em;
}

.knowMore {
  margin: 0.5em;
}

.popup {
  padding: 1.5em;
}

.content {
  margin-bottom: 1em; /* Ajout d'une marge inférieure pour séparer les éléments */
}
</style>
