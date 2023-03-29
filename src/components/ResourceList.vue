<template>
    <div class="resource-list">
        <div v-for="(resource, index) in resources" :key="index" class="resource">
            <span class="name">{{ resource.name }}</span>
            <span class="quantity">{{ resource.quantity }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResourceList',
    props: {
        resources: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.resource-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.resource {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    padding: 4px 8px;
    background-color: #eee;
    border-radius: 4px;
}
.name {
    margin-right: 8px;
    font-weight: bold;
}
</style>
