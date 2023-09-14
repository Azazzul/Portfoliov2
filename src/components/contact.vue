<script setup lang="ts">
import { sendMail } from './Utils';

  const email : string= "";
  const emailText :string = "";
  const send = () => {
      sendMail(email,emailText);
  }
</script>

<template>
  <div id="contactForm" class="popup">
    <h2>Me contacter :</h2>
    <label for="email">
      Adresse email
    </label>
    <div><span><span class="blink">_</span></span> <input v-model="email" type="email" id="email" name="email" placeholder="Adresse email"></div>
    <div>
      <label for="content">Contenu du mail</label>
      <br>
      <span id="beforeArea"><span class="blink">_</span></span>
      <textarea v-model="emailText" id="content" name="content" placeholder="Contenu du mail" spellcheck="true" rows="4"
                cols="50"></textarea>
    </div>
    <button :on-click="send">Envoyer mail</button>
  </div>
</template>

<style scoped>
#contactForm button {
  background: none;
  border: solid lawngreen 1px;
  color: lawngreen;
}
h2{
  margin-top: 0;
}
#contactForm {
  position: fixed;
  text-align: left;
  background-color: black;
  color: lawngreen;
  padding: 2em;
  width: 26em;
  bottom: 1em;
  right: 1em;
  display: flex;
  flex-direction: column;
}

#contactForm input, textarea {
  color: lawngreen;
  border: none;
  outline: none;
  background-color: transparent;
  resize: none;
  width: 25em;

}

#beforeArea {
  vertical-align: top;
}

#contactForm input::placeholder, textarea::placeholder {
  color: green;

}

#content {

}

.blink {
  animation: blink-animation 01s steps(5, start) infinite;
  -webkit-animation: blink-animation 01s steps(5, start) infinite;
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>