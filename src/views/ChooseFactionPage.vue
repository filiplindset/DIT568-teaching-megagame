<template>
    <main id="choosefaction">
        <section class="factions">
            <Faction 
            v-for="faction in factions" 
            :key="faction.id" 
            :faction="faction"
            />
        </section>
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

* {
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

    width: 100 vw;
    min-height: 100vh;
    overflow: hidden;
}
.factions{
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    padding: 25px;
    margin: 0 auto;
}

</style>