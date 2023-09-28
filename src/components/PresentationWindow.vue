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
    Ensuite, j'ai pu obtenir un Diplôme Universitaire Technologique Informatique à l'IUT de Lens, formation pendant laquelle
    j'ai beaucoup approfondi mes connaissances en informatique et où j'ai effectué un stage de 8 semaines à Paris
    chez Zola où j'étais développeur Fullstack.
    </p>
    <p>
        J'ai profité des vacances d'été 2022 pour participer à un chantier bénévole à Berzy-le-sec où j'ai appris les base de l'orfeivrerie.
    </p>
    <p>
      Après avoir obtenu mon DUT Informatique j'ai effectué une première année d'alternance au sein de l'ISEN où j'ai pu encore approfondir mes connaissances sur beaucoup de sujets différents allant du réseau à la base de données en passant par la programmation web.
    </p>
    <h2>Mes passions </h2>
    <span>
    <p>
        Je suis passionné par Magic the Gathering, un jeu de carte à collectionner depuis 2 ans maintenant.</p>
        <p>Je suis aussi passionné par l'orfeivrerie, le jeu vidéo et la programmation.
    </p>
  </span>
    </div>

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