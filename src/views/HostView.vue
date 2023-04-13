<script setup lang="ts">
import HostSidePanel from '../components/HostSidePanel.vue'
</script>

<template>
  <div class="container">
    <host-side-panel class="panel" @change-view="updateView"/>
    <div>
      <component :is="activeView"></component>
    </div>
  </div>
</template>

<script lang="ts">

import Timer from "@/components/Timer.vue";

export default {
  components: {
    Timer,
  },
  data() {
    return {
      activeView: 'timer'
    }
  },
  methods: {
    updateView(viewName) {
      console.log(viewName)
      this.activeView = viewName
    }
  }

}
</script>
<style>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.panel {
  width: 50px;
  height: 100vh;
  background-color: #f1f1f1;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.timer {
  margin-left: 50px; /* Set the left margin to the same width as the side panel */
}
</style>