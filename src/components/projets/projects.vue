<script setup lang="ts">
import {API, getProjets} from "../Utils.ts";
import {markRaw, ref} from "vue";

const experience =ref(null);
getProjets().then();
// console.log(experience)
</script>

<template>
  <p>les chaussettes de l'archiduchesse sont elles seches très seches ou archisèches ?</p>
</template>

<style scoped>
  p{
    height: 50px;
  }
</style>