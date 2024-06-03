<template>
    <div>
        <h2>User Info</h2>
        <div v-if="user">
            <p>ID: {{ user.id }}</p>
            <p>Name: {{ user.name }}</p>
            <p>Email: {{ user.email }}</p>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref(null);

onMounted(() => {
    axios.get('/api/users/1')
        .then(response => {
            user.value = response.data;
        })
        .catch(error => {
            console.error('There was an error fetching the user!', error);
        });
});
</script>

<style scoped>
/* Add any styles specific to the User component here */
</style>