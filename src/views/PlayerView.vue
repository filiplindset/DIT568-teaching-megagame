<template>
    <div class="player-view">
        <h1>Player View</h1>
        <div class="active-component-wrapper">
          <component
              :is="activeView"
              @redirect-player="switchToResourceView"
              :resourceList="resources[selectedFaction]"
          />
        </div>
    </div>
</template>

<script lang="ts">
import ResourceList from "../components/ResourceList.vue";
import TeamSelect from "../components/TeamSelect.vue";
import Resources from "../assets/resources.json";
import ChooseFactionPage from "@/views/ChooseFactionPage.vue";

var selectedFaction = -1

export default {
    name: 'PlayerView',
    components: {
        ResourceList,
        TeamSelect,
        ChooseFactionPage,
        Resources
    },
    data() {
        return {
          resources: Resources,
          activeView: ChooseFactionPage,
        }
    },
    methods: {
      switchToResourceView(factionId){
        this.selectedFaction = factionId
        console.log(this.selectedFaction)
        this.activeView = ResourceList

      }
    }
}
</script>

<style>


.active-component-wrapper {
  flex: 1;
  overflow-y: auto; /* Add this property to make the element scrollable */
  margin-left: 75px;
}
</style>