<script setup lang="ts">
import {ref} from "vue";

const isReduced = ref(true);

const toggleReduced = () => {
  isReduced.value = !isReduced.value;
};
</script>

<template>
  <div id="presentation" class="popup" :class="{ 'is-reduced': isReduced }">
    <img src="../assets/minus-solid.svg" alt="-" class="toggleIcon" v-show="!isReduced" @click="toggleReduced">
    <img src="../assets/plus-solid.svg" alt="-" class="toggleIcon" v-show="isReduced" @click="toggleReduced">
    <h2>
      A propos de moi
    </h2>
    <span id="textPresentationPopup" v-show="!isReduced">
      <p> Bonjour ! Je m'appelle Benoit Fardoux. </p>
      <p>Concernant mon parcours, j'ai tout d'abord passé un Baccalauréat Professionnel Systèmes Numériques spécialisé en réseaux et en Systèmes au
      Lycée du Pays de Saint Omer (ou LYPSO). Pendant cette période, j'ai effectué 22 semaines de stage dans différents
      domaines comme l'éléctronique,l'informatique ou encore la papeterie, stage réalisé à Fabriano
      en Italie avec le programme Erasmus.</p>
      <p>Ensuite, j'ai pu obtenir un Diplôme Universitaire Technologique à l'IUT de Lens, formation pendant laquelle
      j'ai beaucoup approfondi mes connaissances en informatique et où j'ai effectué un stage de 8 semaines à Paris
        chez Zola où j'étais développeur Fullstack. </p>
    </span>

    <button class="knowMore" @click="$emit('togglePres')"> En savoir plus</button>
    <a class="knowMore" href="https://drive.google.com/file/d/1ewXq1WN-i9q8SloEkGsuHsk7wua-dWPU/view?usp=sharing" target="_blank"> CV</a>
  </div>
</template>

<style scoped>

#presentation {
  overflow: hidden; /* Masque le contenu dépassant de la div */
  transition: max-height 0.5s ease; /* Spécifie la durée et la fonction de transition */
  max-height: 1000px; /* Hauteur maximale de la div */
  position: fixed;
  top: 0.5em;
  left: 0.5em;
 /*background: rgba(255,255,255,7%);*/
  padding: 1em;
  width: 30.2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  
}

#presentation.is-reduced {
  max-height: 33%; /* Hauteur réduite de la div */

}

h2 {
  margin-top: 0;
}

.knowMore {
  margin-top: 1em;
  padding-right: 1em;
  padding-left: 1em;
  border-radius: 8px ;
  background: none;
  color: white;
  border: white solid 2px;
}

</style>
