<template>
    <div class="player-view">
        <h1>Player View</h1>
        <ResourceList :resources="resources" />
        <TeamSelect :items="items" @item-selected="onItemSelect"></TeamSelect>
    </div>
</template>

<script>
import ResourceList from "@/components/ResourceList.vue";
import TeamSelect from "@/components/TeamSelect.vue";

export default {
    name: 'PlayerView',
    components: {
        ResourceList,
        TeamSelect
    },
    data() {
        return {
            // some placeholder resources
            resources: [
                { name: 'Wood', quantity: 10 },
                { name: 'Stone', quantity: 5 },
                { name: 'Iron', quantity: 2 },
                { name: 'Gold', quantity: 1 }
            ],
            // teams/factions
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' },
                { id: 4, name: 'Item 4' },
                { id: 5, name: 'Item 5' }
            ]
        };
    },
    methods: {
        onItemSelect(item) {
            console.log('Selected item:', item);
        }
    }
}
</script>

