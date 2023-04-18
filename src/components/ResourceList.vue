<template>
    <div class="resourceList">
        <h1>ResourcListresourceList</h1>
        <div klass="resource-inner">
            <h4>Money: {{ resourceList.money }}</h4>
            <h4>Gems: {{ resourceList.gems }}</h4>
            <h4>Steel: {{ resourceList.steel }}</h4>
            <h4>Wood: {{ resourceList.wood }}</h4>
            <h4>Tech: {{ resourceList.tech }}</h4>
            <h4>Energy: {{ resourceList.energy }}</h4>

        </div>

        </div>
    
</template>

<script lang="ts">
export default {
    name: 'resourceList',
    props: ['resourceList']
}
</script>
