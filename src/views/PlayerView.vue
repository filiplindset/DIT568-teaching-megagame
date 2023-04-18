<template>
    <div class="player-view">
        <h1>Player View</h1>
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

