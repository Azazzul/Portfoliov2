<script setup lang="ts">
import {ref} from 'vue';
import {API} from '../Utils.ts';
// TODO : securiser connexion et cookiser le tout
const hasError = ref(false);
const username = ref("");
const password = ref("");
const emits = defineEmits(['toggleLoggedIn', 'toggleLoginWindows', 'openConnexionScreen']);


/**
 * login to user account
 */
const loginToAccount = async () => {
  const data = {
    username: username.value,
    password: password.value
  };
  await fetch(API + '?action=login', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify(data)
  }).then((response) => {
    if (response.ok) {
      emits('toggleLoggedIn')
      emits('toggleLoginWindows');
    }
    return response.json();
  }).then((res) => {
    if (!res.ok) {
      hasError.value = true;
    }
  }).finally(() => {
    password.value = "";
    username.value = "";
  });
}
</script>

<template>
  <div id="loginForm" class="popup div-centree">
    <img src="../../assets/x-solid.svg" alt="X" @click="$emit('toggleLoginWindows');"/>
    <label for="username">
      Nom d'utilisateur
    </label>
    <input type="text" name="username" id="username" v-model="username" placeholder="Nom d'utilisateur">
    <label for="password">
      Mot de passe
    </label>
    <input type="password" name="password" id="password" v-model="password" placeholder="password">
    <button @click="loginToAccount()">Se connecter</button>
  </div>
</template>

<style scoped>
#loginForm {
  padding: 2%;
  width: 30em;
//height: 20%;
  display: flex;
  flex-direction: column;
//background-color: white; backdrop-filter: blur(10px);
//width: 30%; text-align: left;
}

#loginForm label {
  margin-bottom: 0.5em;
}

#loginForm img {
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
  width: 16px;
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(116deg) brightness(99%) contrast(102%);
}

input {
  background: transparent;
  color: white;
  backdrop-filter: blur(20px);

  border-radius: 8px;
  padding: 1em;
  border: solid white 1px;
  margin-bottom: 1em;
}

button {
  padding: 0.5em;
}

input:focus {
  border: solid white 1px;
  outline: none;
}

.error {
  color: red;
}
</style>