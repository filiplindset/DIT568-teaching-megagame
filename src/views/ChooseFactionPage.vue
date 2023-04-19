<template>
    <h1>Please choose your faction to continue:</h1>
    <main id="choosefaction">

         <div class="factions">
            <Faction
            v-for="faction in factions"
            :key="faction.id"
            :faction="faction"
            />
         </div>

    </main>
</template>

<script lang="ts">
import factionInfo from "..//assets/factions.json"
import Faction from "..//components/Faction.vue"


export default {
    components: {
        Faction
    },
    data() {
        return {factions: factionInfo}
    }
}
</script>

<style>

body{
    background-color: white;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main{
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
}

.factions{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding: 25px;
    margin: 0 auto;
}


</style>