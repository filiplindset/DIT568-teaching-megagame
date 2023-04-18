
    <template>
    <!-- <div>
        <div class="grid-container">
            <div v-for="item in items" :key="item.id" @click="selectItem(item)" :class="{ 'selected': selectedItem === item }" class="grid-item">
                {{ item.name }}
            </div>
        </div>
        <button @click="confirmSelection">Confirm Selection</button>
    </div> -->
</template>

<script lang="ts">


export default {
    name: "TeamSelect",
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedItem: null
        };
    },
    methods: {
        selectItem(item) {
            this.selectedItem = item;
            this.$emit('item-selected', item);
        }
    }
};
</script>

<style scoped>

</style>
