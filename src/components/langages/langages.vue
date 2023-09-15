<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import axios, { AxiosError, AxiosResponse } from 'axios';
import {API} from '../Utils'

const data : Ref<any>= ref({});
const isLoading : Ref<boolean> = ref(true);
const current :Ref<Array<number>>  = ref([1,2,3]);
const numberOfLangages : Ref<number>= ref(0)
const goNext = () => {
    current.value.map((x) => {
        if (x == numberOfLangages.value) {
          return 0
        }
        return x+1
    })
}

const goBack = () => {
  current.value.map((x) => {
    if (x == 0) return numberOfLangages.value;
    return x-1
  })
}

onMounted(async ()=>{
    const config = {headers: {
      'Content-Type': 'application/json',
    }};
    //axios.get(API + '?action=getLangage',config)
    axios.get('https://swapi.dev/api/films/1/',config)
    .then((res : AxiosResponse) => {
      data.value = res.data;
      isLoading.value = false;
      numberOfLangages.value = data.value.length
      },
    (error : AxiosError) => { console.error(error)})
});


</script>

<template>
<div class="popup">
    <h2>
      langages et outils
    </h2>
    <span v-if="isLoading">
      <img src="../../assets/gif/Loading.svg" alt="loading">
    </span>
    <span v-if="!isLoading" style="display:flex;flex-direction: column;">

      <span id="language_display">
        <button @click="goBack" class="knowMore">&#8592;</button>
        <span>
          <h3>
            {{ data?.title }}
          </h3>
          <img :src="data?.images" alt="image projet"/>
        </span>
        <button @click="goNext" class="knowMore">&#8594;</button>
      </span>
    </span>
</div>
</template>

<style scoped>

#language_display{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div {
  position: fixed;
  bottom: 1em;
  right: 32em;
  padding: 1em;
  width: 30em;
  height: 10em;
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
img[alt='loading'] {
  width: 33%;
}

</style>