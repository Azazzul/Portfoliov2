<script setup lang="ts">

  const emailText :string = "";
  const send = () => {
    console.log('test')
      window.open('mailto:fardouxbenoit@gmail.com?subject=Contact&body=' + emailText);
  }
</script>

<template>
  <div id="contactForm" class="popup">
    <h2>Me contacter :</h2>
    <div>
      <label for="content">Contenu du mail</label>
      <br>
      <span id="beforeArea"><span class="blink">_</span></span>
      <textarea v-model="emailText" id="content" name="content" placeholder="Contenu du mail" spellcheck="true" rows="4"
                cols="50"></textarea>
    </div>
    <button @click="send">Envoyer mail</button>
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
  width: 28.2%;
  bottom: 0.5em;
  right: 0.5em;
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