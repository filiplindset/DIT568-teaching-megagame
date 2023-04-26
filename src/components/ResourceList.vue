<template>
    <div class="resourceList">
        <div class="resource-inner">
            <h4>Money: {{ resourceList.money }}</h4>
            <button @click="incrementResource('money')">+</button>
            <h4>Gems: {{ resourceList.gems }}</h4>
            <button @click="incrementResource('gems')">+</button>
            <h4>Steel: {{ resourceList.steel }}</h4>
            <button @click="incrementResource('steel')">+</button>
            <h4>Wood: {{ resourceList.wood }}</h4>
            <button @click="incrementResource('wood')">+</button>
            <h4>Tech: {{ resourceList.tech }}</h4>
            <button @click="incrementResource('tech')">+</button>
            <h4>Energy: {{ resourceList.energy }}</h4>
            <button @click="incrementResource('energy')">+</button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'resourceList',
    props: ['resourceList'],
    methods: {
        incrementResource(resource){
            this.resourceList[resource]++;
        }
    }
}
</script>

<style>

</style>