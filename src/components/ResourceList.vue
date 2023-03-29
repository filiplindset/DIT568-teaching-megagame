<template>
    <div class="resource-list">
        <h1>Resources</h1>
        <div v-for="(resource, index) in resources" :key="index" class="resource">
            <a>
                {{ resource.name }}: {{ resource.quantity }}
            </a>
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
