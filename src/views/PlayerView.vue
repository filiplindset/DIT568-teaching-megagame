<template>
    <div class="player-view">
        <h1>Player View</h1>
        <h1>ResourcList</h1>
        <ResourceList v-for="resourceList in resources"
        :key="resourceList.id"
        :resourceList="resourceList"
         />
    </div>
</template>

<script lang="ts">
import ResourceList from "../components/ResourceList.vue";
import TeamSelect from "../components/TeamSelect.vue";
import Resources from "../assets/resources.json";

export default {
    name: 'PlayerView',
    components: {
        ResourceList,
        TeamSelect,
        Resources
    },
    data() {
        return {resources: Resources};
    }

}
</script>

<style>
.player-view{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding: 25px;
    margin: 0 auto;
}
</style>