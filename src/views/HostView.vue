<script setup lang="ts">
import HostSidePanel from '../components/HostSidePanel.vue'
</script>

<template>
  <div class="container">
    <host-side-panel class="panel" @change-view="updateView"/>
    <div class="active-component-wrapper">
      <component
          :is="activeView"
          :isAdmin="true"
      />
    </div>
  </div>
</template>

<script lang="ts">

import Timer from "@/components/Timer.vue";
import ChooseFactionPage from "@/views/ChooseFactionPage.vue";
import PlayerView from "@/views/PlayerView.vue";
import MassEdit from "@/components/MassEdit.vue";
import ResetGame from "@/components/ResetGame.vue";

const panelWidth = 50;

export default {
  components: {
    Timer,
    ChooseFactionPage,
    PlayerView,
    MassEdit,
    ResetGame
  },
  data() {
    return {
      activeView: Timer
    }
  },
  methods: {
    updateView(viewName) {
      console.log(viewName)
      switch (viewName) {
        case 'timer':
          this.activeView = Timer
          break
        case 'impersonate':
          this.activeView = PlayerView
          break
        case 'massEdit':
          this.activeView = MassEdit
          break
        case 'resetGame':
          this.activeView = ResetGame
          break
      }
      if (this.activeView === PlayerView) {
        this.isAdmin = true
      }
    }
  }

}
</script>
<style>
.container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.panel {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #f1f1f1;
  margin: 0;
  padding: 0;
}

.active-component-wrapper {
  flex: 1;
  overflow-y: auto; /* Add this property to make the element scrollable */
  margin-left: 75px;
}

body{
  background-color: ghostwhite;
}


.timer {
  margin-left: 200px; /* Set the left margin to the same width as the side panel */
}
</style>