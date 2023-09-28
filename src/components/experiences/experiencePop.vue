<script setup lang="ts">
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API } from '../Utils';
import { ref, onMounted, Ref } from 'vue';

const isLoading : Ref<boolean> = ref(true);
const toDisplay : Ref<any> = ref({})
onMounted(async () => {
    const config : AxiosRequestConfig = {headers: {
      'Content-Type': 'application/json',
    }}

  //axios.get(API + '?action=lastJob',config)
  axios.get(API + 'jobs/',config)
  .then((res : AxiosResponse) => {
    isLoading.value = false;
    toDisplay.value = res.data.data[0];
  //  console.log(toDisplay.value);
    
  }), (error : AxiosError) => {
    console.error(error)
  } 
})
</script>

<template>
  <div class="popup">
    <h2>
      Ma dernière expérience professionnelle
    </h2>
    <span v-if="isLoading">
        <img src="../../assets/Loading.svg" alt="loading">
    </span>
    <span v-if="!isLoading" id="experience_p">

      <h3>
        {{ toDisplay?.title }}
      </h3>
      <img :src="toDisplay?.image" alt="image projet"/>
      <p>{{ toDisplay?.job_description }}</p>
      <button class="knowMore" @click="$emit('toggleJob')">En savoir plus</button>
    </span>
  </div>
</template>

<style scoped>
div {
  position: fixed;
  top: 0.5em;
  right: 0.5em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 59vh;
  width: 30.2vw;
}
#experience_p{
  height: 100%;
}
span > h2 {
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
}

img[alt='image projet'] {
  max-height: 30%;
  margin-bottom: 0.5em;
}
</style>