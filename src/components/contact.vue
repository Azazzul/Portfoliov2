<script setup lang="ts">

</script>

<template>
  <div id="contactForm" class="popup div-centree">
    <label for="email">
      Adresse email
    </label>
    <div> ><span class="blink">_</span> <input type="email" id="email" name="email" placeholder="Adresse email"></div>
    <div>
      <label for="content">Contenu du mail</label>
      <br>
      ><span class="blink">_</span>
    <textarea id="content" name="content" placeholder="Contenu du mail" spellcheck="true" rows="4" cols="50"></textarea>
    </div>
  </div>
</template>

<style scoped>
#contactForm{text-align: left;
  background-color: black;
  color: lawngreen;
  padding: 2em;
  width: 30em;
  top: 60%;
  display: flex;
  flex-direction: column;
}
#contactForm input, textarea{
  color: lawngreen;
  border: none;
  outline: none;
  background-color: transparent;
  resize: none;
  width: 25em;

}
#contactForm input::placeholder,textarea::placeholder{
  color: green;

}
#content{

}
.blink {
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
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