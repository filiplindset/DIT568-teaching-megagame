<template>
    <main id="choosefaction">
        <p v-for="faction in factions" :key="faction.id">{{ faction.name }},{{ faction.info }}</p>
        
    </main>

</template>

<script lang="ts">
import factionInfo from "..//assets/factions.json"

export default {
    data() {
        return {factions: factionInfo}
    }
}
</script>

<style>

* {
    background-color: white;
}
main{
    background-color: white;
}
</style>