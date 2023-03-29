<template>
    <div class="player-view">
        <h1>Player View</h1>
        <ResourceList :resources="resources" />
    </div>
</template>

<script>
import ResourceList from 'src/components/ResourceList.vue'

export default {
    name: 'PlayerView',
    components: {
        ResourceList
    },
    data() {
        return {
            // some placeholder resources
            resources: [
                { name: 'Wood', quantity: 10 },
                { name: 'Stone', quantity: 5 },
                { name: 'Iron', quantity: 2 },
                { name: 'Gold', quantity: 1 }
            ]
        }
    }
}
</script>

