<script setup lang="ts">

  const send = () => {
      window.open('mailto:fardouxbenoit@gmail.com?subject=Contact');
  }
</script>

<template>
  <div id="contactForm" class="popup">
    <h2>Me contacter :</h2>
    <div>
      <a href="https://www.linkedin.com/in/benoit-fardoux/" target="_blank" > <img src="../assets/linkedin.svg"
                                                                                alt="linkedin"><span class="blink"> Linkedin  </span></a>
      <a href="tel:0647705071"  > <img src="../assets/phone.svg"
                                                                                alt="linkedin"><span class="blink"> +336.47.70 50.71  </span></a>
    </div>
    <button @click="send">Envoyer un mail</button>
  </div>
</template>

<style scoped>
#contactForm button {
  background: none;
  border: solid #7cfc00 1px;
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
  height: 21.5%;
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
  height: 10em;

}

#beforeArea {
  vertical-align: top;
}

#contactForm input::placeholder, textarea::placeholder {
  color: green;

}

a{
  color: lawngreen;
  display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 1em;
}

img[alt="linkedin"] {
  filter: invert(65%) sepia(69%) saturate(675%) hue-rotate(43deg) brightness(111%) contrast(107%);
  width: 32px;

}
.blink {
  padding-left: 1em;
 /* animation: blink-animation 01s steps(5, start) infinite;
  -webkit-animation: blink-animation 01s steps(5, start) infinite;*/
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