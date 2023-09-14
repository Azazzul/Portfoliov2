<script setup lang="ts">


import {onMounted, ref} from "vue";
import {API, projet} from "../Utils";

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
    <span v-if="isLoading">
      <img src="../../assets/gif/Loading.svg" alt="loading">
    </span>
    <span v-if="!isLoading">
      <h3>
        {{ toDisplay[0]?.title }}
      </h3>
      <img :src="'../../..' + toDisplay[0]?.images" alt="image projet"/>
      <p>{{ toDisplay[0]?.desc }}</p>
      <a :href="toDisplay[0]?.lien" target="_blank"> <img src="../../assets/github.svg" alt="github icon"></a>
      <button class="knowMore" @click="$emit('toggleProject')">En savoir plus sur le projet</button>
    </span>
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
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(116deg) brightness(99%) contrast(102%);
  height: 2.5em;
}

img[alt='image projet'] {
  max-height: 10em;
  margin-bottom: 0.5em;
}

</style>