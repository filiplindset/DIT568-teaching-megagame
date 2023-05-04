<template>
    <div class="player-view">
        <h1>Player View</h1>
        <div class="active-component-wrapper">
          <component
              :is="activeView"
              @redirect-player="switchToResourceView"
              :resourceList="resources[this.selectedFaction]"
              :currentFaction="this.selectedFaction"
          />
        </div>
    </div>
</template>

<script lang="ts">
import ResourceList from "../components/ResourceList.vue";
import TeamSelect from "../components/TeamSelect.vue";
import ChooseFactionPage from "@/views/ChooseFactionPage.vue";
import resourceList from "@/components/ResourceList.vue";
import axios from "axios";




export default {
    name: 'PlayerView',
    components: {
        ResourceList,
        TeamSelect,
        ChooseFactionPage
    },

  data() {
        return {
          resources: {},
          activeView: ChooseFactionPage,
          selectedFaction: -1
        }
    },
  created() {
    axios.get('http://127.0.0.1:8080/getPlayerResources')
        .then(response => {
          console.log(response.data);
          this.resources = response.data
        })
        .catch(error => {
          console.log(error);
        });
  },
    methods: {
      switchToResourceView(factionId){
        this.selectedFaction = factionId
        console.log("Playerview: " + this.selectedFaction)
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