<template>
    <div class="start-view">
        <h1>Celestial Conquest</h1>
        <p>Get started by choosing one of the options below:</p>
        <div class="button-group">
            <router-link to="/player" class="button primary">Player</router-link>
            <router-link to="/host" class="button secondary">Host</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "StartView"
}
</script>

<style scoped>
.start-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.button-group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column ;
    align-content: flex-end;
    margin-top: 10rem;
}

.button {
    padding: 30px 40px;
    margin: 10px;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    text-align: center;
    min-width: 25%;
    border: 10px black;
}

.primary {
    background-color: #27929c;
}

.secondary {
    background-color: #dc9839;
}
</style>
