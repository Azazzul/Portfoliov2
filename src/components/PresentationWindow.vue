<script setup lang="ts">

</script>

<template>
<div class="popup div-centree" id="PresentationWindow">
  <img src="../assets/x-solid.svg" alt="X" class="toggleIcon" @click="$emit('togglePres')">
  <h2>Présentation</h2>
  Je m'appelle Benoit Fardoux,
  J'ai premièrement effectué un Baccalauréat Professionnel Système Numérique spécialisé en réseaux et en Systèmes au Lycée du Pays de Saint Omer (ou LYPSO), pendant cette période j'ai effectué 22 semaine de stage dans différents domaines comme l'éléctronique l'informatique ou même la papeterie, stage qui par ailleur a été éffectué à Fabriano en Italie avec le programme Erasmus. <br>
  J'ai ensuite effectué un Diplome Universitaire Technologique à l'IUT de Lens, formation pendant laquelle j'ai beaucoup approfondi mes connaissances en informatique et ou j'ai effectué un stage de 8 semaine à Paris chez Zola où j'étais développeur Fullstack
  ...
  <h2>Passions</h2>
  mtg;guitare;orfeivrerie;JV;programmation
  <h2>
    Mes réseaux
  </h2>
  <!--    TODO : ajouter les icones-->
  <a href=""><img src="../assets/x-solid.svg" alt="github"> </a>
  <a href="">  <img src="../assets/x-solid.svg" alt="linkedin"> </a>
</div>

</template>

<style scoped>
#PresentationWindow{
  z-index: 30000;
  padding: 2em;
}
img{
  width: 16px;
}
</style>