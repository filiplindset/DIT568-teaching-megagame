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
                { id: 1, name: 'Arboreans' },
                { id: 2, name: 'Orangelons' },
                { id: 3, name: 'Novarians' },
                { id: 4, name: 'Naxorians' },
                { id: 5, name: 'Aquarians' },
                { id: 6, name: 'Krell' },
                { id: 7, name: 'Xaraxians' },
                { id: 8, name: 'Valtorians' },
                { id: 9, name: 'Eryndorians' },


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

