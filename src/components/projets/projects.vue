<script setup lang="ts">


import {onMounted, ref} from "vue";
import {API, projet} from "../Utils.ts";

const isLoading = ref(true);
const hasError = ref(false);
let toDisplay :any;
toDisplay = ref({});

onMounted(async () => {
  fetch(API + '?action=lastProject', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET'
  }).then(async (res: Response) => {
    isLoading.value = false;
    if (res.ok) {
      toDisplay["value"] = await res.json();
      console.log(toDisplay.value)
    } else {
      throw Error();
    }
  })
})
// console.log(experience)
</script>

<template>
  <div class="popup">
    <h2>
      Mon dernier projet
    </h2>
    <h3>
      {{ toDisplay[0]?.title }}
    </h3>
    <img :src="toDisplay[0]?.images" alt="image projet"/>
    <p>{{ toDisplay[0]?.desc }}</p>
    <a :href="toDisplay[0]?.lien" target="_blank"> <img src="../../assets/github.svg" alt="github icon"></a>
    <button class="knowMore">En savoir plus sur le projet</button>
  </div>
</template>

<style scoped>
div {
  position: fixed;
  top: 5em;
  right: 10em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  max-height: 20em;
}

div > h2 {
  margin: 0;
}
h3{
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

p {
  margin: 0;
}

img[alt='github icon'] {
//margin-right: 2em; width: 32px;
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(116deg) brightness(99%) contrast(102%);
}

img[alt='image projet'] {
  max-height: 10em;
  margin-bottom: 0.5em;
}

</style>