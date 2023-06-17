<script setup lang="ts">
import Projects from "components/projets/projects.vue";
import {onMounted, ref} from "vue";
import {waitDelay} from "./components/Utils.ts";
import Login from "./components/login/login.vue";

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

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
const isParcoursDisplayed = ref(false);
const isSkillDisplayed = ref(false);
const isProjectDisplayed: ref<boolean> = ref(false);
const isContactDisplayed = ref(false);


const openConnexionScreen = () => {
  if (!isLogged?.value){
    isLoginIn.value = true;
  } else {
    isLogged.value = false;
  }
}

const toggleLoginWindows = () => isLoginIn.value = !isLoginIn.value;
const toggleLoggedIn = () => isLogged.value = !isLogged.value;
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
  console.log(isProjectDisplayed.value)
}


onMounted(async () => {
  await waitDelay(5000);
  switchDisplayedPart(activated.projets);
})
</script>

<template>
  <login v-show="isLoginIn" @toggleLoginWindows="toggleLoginWindows" @toggleLoggedIn="toggleLoggedIn" ></login>
  <div id="Name" class="div-centree">
    <h1>Benoit Fardoux</h1>
    <h2>Apprenti ingénieur spécialisé en informatique</h2>
  </div>
  <div id="login" @click="openConnexionScreen()">
    <div class="glitch-wrapper">
      <div class="glitch" data-text="Se connecter" v-show="!isLogged">Se connecter</div>
      <div class="glitch" data-text="Se déconnecter" v-show="isLogged">Se déconnecter</div>
    </div>
  </div>
</template>

<style scoped>
#Name {
  border: solid white;
  color: white;
  border-radius: 8px;
//position: absolute; padding: 2%;
//left: 30.85%; //top: 33.9%;
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


/*
texte gliche
 */
.glitch-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: transparent;
}

.glitch {
  position: relative;
  font-size: 15px;
  font-weight: bold;
  color: #FFFFFF;
  letter-spacing: 3px;
  z-index: 1;
}

.glitch:before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: -2px;
  width: 100%;
  color: 30px;
  background-color: transparent;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-before 3s infinite linear alternate-reverse;
}

.glitch:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 2px;
  width: 100%;
  color: 30px;
  background-color: transparent;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-after 2s infinite linear alternate-reverse;
}

@keyframes noise-before {
  0% {
    clip: rect(61px, 9999px, 52px, 0);
  }
  5% {
    clip: rect(33px, 9999px, 144px, 0);
  }
  10% {
    clip: rect(121px, 9999px, 115px, 0);
  }
  15% {
    clip: rect(144px, 9999px, 162px, 0);
  }
  20% {
    clip: rect(62px, 9999px, 180px, 0);
  }
  25% {
    clip: rect(34px, 9999px, 42px, 0);
  }
  30% {
    clip: rect(147px, 9999px, 179px, 0);
  }
  35% {
    clip: rect(99px, 9999px, 63px, 0);
  }
  40% {
    clip: rect(188px, 9999px, 122px, 0);
  }
  45% {
    clip: rect(154px, 9999px, 14px, 0);
  }
  50% {
    clip: rect(63px, 9999px, 37px, 0);
  }
  55% {
    clip: rect(161px, 9999px, 147px, 0);
  }
  60% {
    clip: rect(109px, 9999px, 175px, 0);
  }
  65% {
    clip: rect(157px, 9999px, 88px, 0);
  }
  70% {
    clip: rect(173px, 9999px, 131px, 0);
  }
  75% {
    clip: rect(62px, 9999px, 70px, 0);
  }
  80% {
    clip: rect(24px, 9999px, 153px, 0);
  }
  85% {
    clip: rect(138px, 9999px, 40px, 0);
  }
  90% {
    clip: rect(79px, 9999px, 136px, 0);
  }
  95% {
    clip: rect(25px, 9999px, 34px, 0);
  }
  100% {
    clip: rect(173px, 9999px, 166px, 0);
  }
}

@keyframes noise-after {
  0% {
    clip: rect(26px, 9999px, 33px, 0);
  }
  5% {
    clip: rect(140px, 9999px, 198px, 0);
  }
  10% {
    clip: rect(184px, 9999px, 89px, 0);
  }
  15% {
    clip: rect(121px, 9999px, 6px, 0);
  }
  20% {
    clip: rect(181px, 9999px, 99px, 0);
  }
  25% {
    clip: rect(154px, 9999px, 133px, 0);
  }
  30% {
    clip: rect(134px, 9999px, 169px, 0);
  }
  35% {
    clip: rect(26px, 9999px, 187px, 0);
  }
  40% {
    clip: rect(147px, 9999px, 137px, 0);
  }
  45% {
    clip: rect(31px, 9999px, 52px, 0);
  }
  50% {
    clip: rect(191px, 9999px, 109px, 0);
  }
  55% {
    clip: rect(74px, 9999px, 54px, 0);
  }
  60% {
    clip: rect(145px, 9999px, 75px, 0);
  }
  65% {
    clip: rect(153px, 9999px, 198px, 0);
  }
  70% {
    clip: rect(99px, 9999px, 136px, 0);
  }
  75% {
    clip: rect(118px, 9999px, 192px, 0);
  }
  80% {
    clip: rect(1px, 9999px, 83px, 0);
  }
  85% {
    clip: rect(145px, 9999px, 98px, 0);
  }
  90% {
    clip: rect(121px, 9999px, 154px, 0);
  }
  95% {
    clip: rect(156px, 9999px, 44px, 0);
  }
  100% {
    clip: rect(67px, 9999px, 122px, 0);
  }
}


</style>