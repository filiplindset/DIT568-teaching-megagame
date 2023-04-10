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
}
main{
    background-color: white;
}

</style>