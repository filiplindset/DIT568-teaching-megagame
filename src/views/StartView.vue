
<template>
    <div class="start-view">
        <h1>A Teaching Megagame</h1>
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
}

.button {
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    text-align: center;
}

.primary {
    background-color: #007bff;
}

.secondary {
    background-color: #6c757d;
}
</style>
