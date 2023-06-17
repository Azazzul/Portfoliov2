<script setup lang="ts">
import {ref} from "vue";
import {API} from "../Utils.ts";
import login from "./login.vue";

const username = ref("");
const password = ref("");

const loginToAccount = async () => {
  let pw: string;
  await Promise.resolve(crypto.subtle.digest("SHA-256", new TextEncoder().encode(password.value)).then(
      res => {
        pw = Array.prototype.map.call(new Uint8Array(res), x => (('00' + x.toString()).slice(-2))).join('');
      }
  ));
  await fetch(API + '?action=login',{
    headers:{
      'Accept': 'application/json',
    },
    method: "post",
    body : JSON.stringify({
      username : username,
      password : password
    })
  })
}
</script>

<template>
<div id="loginForm">
  <label for="username">
    Nom d'utilisateur
  </label>
  <input type="text" name="username" id="username" v-model="username" placeholder="Nom d'utilisateur">
  <label for="password">
    Mot de passe
  </label>
  <input type="password" name="password" id="password" v-model="password" placeholder="password">
</div>
</template>

<style scoped>
#loginForm{
  display: flex;
  flex-direction: column;

}
</style>