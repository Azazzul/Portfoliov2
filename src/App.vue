<script setup lang="ts">
import {Ref, onMounted, ref} from "vue";
import {API, waitDelay} from "./components/Utils.ts";
import langages from "./components/langages/langages.vue";
import Contact from "./components/contact.vue";
import Presentation from "./components/Presentation.vue";
import PresentationWindow from "./components/PresentationWindow.vue";
import Profil from "./components/profil.vue";
import Projects from "./components/projets/projects.vue";
import ProjetWindows from "./components/projets/ProjetWindows.vue";
import ExperiencePop from "./components/experiences/experiencePop.vue";
import ExperienceWindows from "./components/experiences/experienceWindows.vue";
import axios, { Axios, AxiosResponse } from "axios";


enum activated {
  main = "main",
  pres = "presentation",
  parcours = "parcours",
  competence = "skill",
  projets = "project",
  contact = "contact"
}

// check if the user is logged in
const isLogged = ref(false);
// check if the user has click on "connect"
const isLoginIn = ref(false);
const isMainPageDisplayed = ref(true);
const isPresDisplayed = ref(false);
const isPresWindowsDisplayed = ref(false);
const isParcoursDisplayed = ref(false);
const isSkillDisplayed = ref(false);
const isProjectDisplayed = ref(false);
const isContactDisplayed = ref(false);
const launchOk = ref(false)
const isPictureDisplayed = ref(false)
const isClickable = ref(true);
const isJobWindowsDisplayed : Ref<boolean>= ref(false)
const isAddProjectWindowDisplayed = ref(false)
const toOpenProject = ref(1);
// projets et jobs
const allProjects = ref([]);
const allJobs = ref([])

onMounted(async () => {
  const config = {headers: {
      'Content-Type': 'application/json',
    }};
    axios.get(API + 'projects/',config)
    .then((res : AxiosResponse) => {
      allProjects.value = res.data.data;
    })
    axios.get(API + 'jobs/',config)
    .then((res:AxiosResponse) => {
      allJobs.value = res.data.data;
    })
});

const toggleClickable = () => isClickable.value = !isClickable;
const openProjectScreen = (id : number) =>   {
  toOpenProject.value = id;
  if (!isProjectDisplayed.value && isClickable){
    toggleClickable()
    isProjectDisplayed.value = true
  }else {
    isProjectDisplayed.value = false;
  }
}

const togglePresWindows = () => {
  isPresWindowsDisplayed.value = !isPresWindowsDisplayed.value;
}

const toggleJob = () => {
  isJobWindowsDisplayed.value = !isJobWindowsDisplayed.value;
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
      isProjectDisplayed.value = true;
      break
    case "contact":
      isContactDisplayed.value = true;
      break
    default :
      break
  }
  console.log(isProjectDisplayed.value)
}


onMounted(async () => {
  await waitDelay(1000);
  switchDisplayedPart(activated.pres);
  launchOk.value = true;
  await waitDelay(1000);
  isPictureDisplayed.value = true;
});
// console.log(experien)

</script>

<template>
<!--  <login v-show="isLoginIn" @toggleLoginWindows="toggleLoginWindows" @toggleLoggedIn="toggleLoggedIn"></login>-->
<!--  <add-project @toggleAddWindows="toggleAddProjectWindow" v-if="!isLogged"></add-project>-->
<!--  <add-project-windows v-if="isAddProjectWindowDisplayed" @UpdateProject="updateProjects"></add-project-windows>-->
  <div id="Name" class="div-centree">
    <h1>Benoit Fardoux</h1>
    <h2>Développeur <br>en recherche d'alternance</h2>
  </div>
<!--  <div id="login" @click="openConnexionScreen()">-->
<!--    <div class="glitch-wrapper">-->
<!--      <div class="glitch" data-text="Se connecter" v-show="!isLogged">Se connecter</div>-->
<!--      <div class="glitch" data-text="Se déconnecter" v-show="isLogged">Se déconnecter</div>-->
<!--    </div>-->
<!--  </div>-->
  <projects @toggleProject="openProjectScreen"></projects>
  <ExperiencePop @toggleJob="toggleJob"></ExperiencePop>
  <langages></langages>
  <ExperienceWindows v-show="isJobWindowsDisplayed" @toggleJob="toggleJob" :jobs="allJobs"> </ExperienceWindows>
  <projet-windows v-show="isProjectDisplayed && launchOk" :projets="allProjects" @toggleProject="openProjectScreen"></projet-windows>
  <Presentation v-show="isPresDisplayed" @togglePres="togglePresWindows"></Presentation>
  <presentation-window v-show="isPresWindowsDisplayed && launchOk "
                       @togglePres="togglePresWindows" ></presentation-window>
  <contact></contact>
  <profil v-show="isPictureDisplayed"></profil>
</template>

<style scoped>
#Name {
  border: solid white;
  color: white;
  border-radius: 8px;
  width: 31vw;
  height: 33vh;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1920px) {
    h2{
      font-size: 1.5rem;
    }
  }
#presentation button {
  margin-top: 1em;
  color: white;
  background-color: transparent;
  border: solid white 1px;
  border-radius: 8px;
  padding: 0.5em;
}

#login {
  border: solid white;
  border-radius: 8px;
  position: absolute;
  top: 1em;
  right: 1em;
  padding: 1em;
  cursor: pointer;
}

</style>