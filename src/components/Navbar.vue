<script setup lang="ts">
import Projects from "./projets/projects.vue";
import {ref} from "vue";

enum activated {
  main = "main",
  pres = "presentation",
  parcours = "parcours",
  competence = "skill",
  projets = "project",
  contact = "contact"
}

const isMainPageDisplayed = ref(true);
const isPresDisplayed = ref(false);
const isParcoursDisplayed = ref(false);
const isSkillDisplayed = ref(false);
const isProjectDisplayed :ref<boolean> = ref(false);
const isContactDisplayed = ref(false);

const printproject = () =>{
    console.log(isProjectDisplayed)
}
const switchDisplayedPart = (name: string) => {
  isMainPageDisplayed.value = false;
  isPresDisplayed.value = false;
  isParcoursDisplayed.value = false;
  isSkillDisplayed.value = false;
  isProjectDisplayed.value = false;
  isContactDisplayed.value = false;
  console.log(name)
  switch (name.toLowerCase()) {
    case "main":
      isMainPageDisplayed.value = true;
      break
    case "presentation":
      isPresDisplayed.value = true;
      break
    case "parcours":
      isParcoursDisplayed.value = true;
      break;
    case "skill":
      isSkillDisplayed.value = true;
      break;
    case "project":
      console.log("test")
      isProjectDisplayed.value = true;
      break
    case "contact":
      isContactDisplayed.value = true;
      break
    default :
      break
  }
  console.log(isProjectDisplayed)
}


</script>

<template>
  <nav>
    <div>
      <ul>

          <button href="index.html" id="Accueil">
            Portfolio
          </button>

      </ul>
    </div>
    <div>
      <ul>
        <li>
            <button id="LienPresentation" v-on:click="switchDisplayedPart(activated.pres)"> Présentation</button>
        </li>
        <li>
            <button id="LienParcours" v-on:click="switchDisplayedPart(activated.parcours)">Parcours</button>
        </li>
        <li>
          <button id="LienCompetences" v-on:click="switchDisplayedPart(activated.competence)">Compétences</button>
          </li>
        <li>
            <button id="LienProjets" v-on:click="switchDisplayedPart(activated.projets)"> Projets</button>
        </li>
        <li>
            <button id="liencontact" v-on:click="switchDisplayedPart(activated.contact)"> Contact</button>

        </li>
        <li>

            <button href="src/files/cv.pdf" id="CV" target="blank"> Mon CV</button>
        </li>
      </ul>
    </div>
  </nav>
  <projects v-show="isProjectDisplayed"/>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #E8E8E8;
  //margin-top: -1%;
  //margin-right: -6px;
//box-shadow: 1px;
  width: 100%;
  height: 80px;

}

nav ul {
  list-style: none;
  display: flex;
  height: 30px;
  //padding-bottom: 33%;
  //padding-top: 33%;
  margin-top: 25px;
}

nav ul button {
  color: #8D8D93;
  text-decoration: none;
  padding-left: 1vw;
  padding-right: 1vw;
  font-size: 20px;
  height: 1.5em;
  margin-right: 3em;
}

#CV {
  background-color: #60B9F7;
  border-radius: 50px;
  //padding-top: 3%;
  //padding-bottom: 3%;
  color: white;
}

</style>