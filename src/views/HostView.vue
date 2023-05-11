<template>
  <div v-if="showContent">
    <div class="container">
      <host-side-panel class="panel" @change-view="updateView"/>
      <div class="active-component-wrapper">
        <component :is="activeView" :isAdmin="true" />
      </div>
    </div>
  </div>
  <div v-else>
    <div class="password-wrapper">
      <form class=password-form @submit.prevent="submitPassword">
        <label for="password">Enter password:</label>
        <input type="password" id="password" v-model="password">
        <button type="submit">Submit</button>
      </form>
    </div>

  </div>
</template>

<script lang="ts">
import HostSidePanel from '../components/HostSidePanel.vue'
import Timer from "@/components/Timer.vue";
import ChooseFactionPage from "@/views/ChooseFactionPage.vue";
import PlayerView from "@/views/PlayerView.vue";
import MassEdit from "@/components/MassEdit.vue";
import ResetGame from "@/components/ResetGame.vue";

const panelWidth = 50;

export default {
  components: {
    HostSidePanel,
    Timer,
    ChooseFactionPage,
    PlayerView,
    MassEdit,
    ResetGame,
  },
  data() {
    return {
      password: '',
      showContent: false,
      activeView: Timer,
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
    },
    submitPassword() {
      if (this.password === 'MHplaySGOD') {
        this.showContent = true
      } else {
        alert('Wrong password, please try again.')
      }
    }
  },
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

 .password-wrapper {
   display: flex;
   flex-direction: column;
   align-items: center;
 }

.password-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

input[type="password"] {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  width: 200px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}

.error {
  color: red;
  margin-top: 10px;
}

.content {
  margin-top: 50px;
  display: none;
}
</style>
