<script setup lang="ts">
</script>

<template>
  <div class="popup div-centree">
    <img src="../assets/x-solid.svg" alt="X" class="toggleIcon" @click="$emit('togglePres')">
    <h2>Présentation</h2>
    <p>Bonjour ! Je m'appelle Benoit Fardoux. </p>
    <p>Concernant mon parcours, j'ai tout d'abord passé un Baccalauréat Professionnel Systèmes Numériques spécialisé en
    réseaux et en Systèmes au
    Lycée du Pays de Saint Omer (ou LYPSO). Pendant cette période, j'ai effectué 22 semaines de stage dans différents
    domaines comme l'éléctronique,l'informatique ou encore la papeterie, stage réalisé à Fabriano
      en Italie avec le programme Erasmus. </p>
    <p>
    Ensuite, j'ai pu obtenir un Diplôme Universitaire Technologique à l'IUT de Lens, formation pendant laquelle
    j'ai beaucoup approfondi mes connaissances en informatique et où j'ai effectué un stage de 8 semaines à Paris
    chez Zola où j'étais développeur Fullstack. Suite à cette année j'ai réalisé une année d'alternance chez Worldline.
    </p>
    <h2>Mes passions </h2>
    MTG
    guitare
    orfeivrerie
    Jeux Vidéo
    programmation</div>

</template>

<style scoped>
div > img {
  width: 16px;
}

div {
  z-index: 30000;
  padding: 2em;
  backdrop-filter: blur(50px);
}

a img {
  margin-right: 2em;
  width: 32px;
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(116deg) brightness(99%) contrast(102%);
}
</style>