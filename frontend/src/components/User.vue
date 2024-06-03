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

<script>
import axios from 'axios';

export default {
    name: 'User',
    data() {
        return {
            user: null
        };
    },
    created() {
        axios.get('/api/users/1')
            .then(response => {
                this.user = response.data;
            })
            .catch(error => {
                console.error('There was an error fetching the user!', error);
            });
    }
};
</script>

<style scoped></style>