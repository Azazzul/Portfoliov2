<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import axios, { AxiosError, AxiosResponse } from 'axios';
import {API} from '../Utils'

const data : Ref<any>= ref({});
const displayedData : Ref<any>= ref({});
const isLoading : Ref<boolean> = ref(true);
const current :Ref<Array<number>>  = ref([1,2,3]);
const numberOfLangages : Ref<number>= ref(100)
const goNext = () => {
  if (current.value[2] != numberOfLangages.value-1){
    const tmp : Array<number> = [];

    current.value.forEach((x,index) => {
      tmp[index] = x+1;
      displayedData.value[index] = data.value[x+1] 
    })
    current.value = tmp;
  }
  console.log("current =")
  console.log(current.value)
  console.log(data.value)
}

const goBack = () => {
  if (current.value[0] != 0){
    const tmp : Array<number> = [];

    current.value.forEach((x,index) => {
      tmp[index] = x-1;
      displayedData.value[index] = data.value[x-1] 
    })
    current.value = tmp;
  }
  console.log(data.value)
  console.log(displayedData.value)
}

onMounted(async ()=>{
    const config = {headers: {
      'Content-Type': 'application/json',
    }};
    //axios.get(API + '?action=getLangage',config)
    axios.get(API + 'skill',config)
    .then((res : AxiosResponse) => {
      data.value = res.data.data;
      numberOfLangages.value = res.data.data.length;
      displayedData.value = [data.value[0],data.value[1],data.value[2]];
      isLoading.value = false;
      console.log(data.value);
      console.log(numberOfLangages.value);
    },
    (error : AxiosError) => { console.error(error)})
});


</script>

<template>
<div class="popup">
    <h2>
      Langages & Outils
    </h2>
    <span v-if="isLoading">
      <img src="../../assets/gif/Loading.svg" alt="loading">
    </span>
    <span v-if="!isLoading" style="display:flex;flex-direction: column;">

      <span id="language_display">
        <button @click="goBack" class="knowMore">&#8592;</button>
        <span v-for="(item) in displayedData"  >
          <h3 :key="item.id">
            {{ item.name }}
          </h3>
          <img :src="item.image" alt="image projet" style="height : 5em" :key="item.id"/>
       <!--
           <img :src="data?.images"  alt="image projet"/>
       -->
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
  bottom: 0.5em;
  left: 50%;
  transform: translate(-50%, 0%);

  padding: 1em;
  width: 29%;
  height: 10.99em;
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