<script setup>
import { ref } from "vue";
import { API } from "../Utils.ts";
const emit = defineEmits(['UpdateProject']);
const form = ref({
  title: '',
  client: '',
  dates: '',
  description: '',
  lien: '',
});

const handleSubmit = (event) => {
  event.preventDefault();

  // Vérification de la validité du formulaire
  if (!event.target.checkValidity()) {
    return;
  }

  // Création d'un nouvel objet projet avec les données du formulaire
  const newProject = {
    title: form.value.title,
    client: form.value.client,
    dates: form.value.dates,
    description: form.value.description,
    lien: form.value.lien,
  };

  // Appel de la méthode pour créer le projet (vous pouvez remplacer cela par votre logique de création)
  createProject(newProject);

  // Réinitialisation du formulaire
  form.value = {
    title: '',
    client: '',
    dates: '',
    description: '',
    lien: '',
  };
};

const createProject = async (project) => {
  // Logique pour créer le projet (appel API, enregistrement en base de données, etc.)
  console.log('Creating project:', project);

  await fetch(API + '?action=projets', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify(form.value)
  }).then((response) => {
    if (response.ok) {
      emit('UpdateProject')
    }
    return response.json();
  })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
};
</script>

<template>
  <div class="create-project div-centree popup">
    <h2>Create Project</h2>
    <form @submit="handleSubmit">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="form.title" required>
      </div>
      <div>
        <label for="client">Client:</label>
        <input type="text" id="client" v-model="form.client">
      </div>
      <div>
        <label for="dates">Dates:</label>
        <input type="date" id="dates" v-model="form.dates">
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="form.description"></textarea>
      </div>
      <div>
        <label for="lien">Lien:</label>
        <input type="text" id="lien" v-model="form.lien">
      </div>
      <button type="submit" class="knowMore">Create</button>
    </form>
  </div>
</template>

<style scoped>
.create-project {
  margin-top: 2rem;
}

form {
  display: grid;
  gap: 1rem;
}

label {
  font-weight: bold;
}

input,
textarea {
  width: 80%;
  padding: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
}

.div-centree {
  z-index: 2000;
}

input,
textarea {
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
</style>
