<template>
  <div class="side-panel">
    <div class="icon-container">
      <div class="icon">
        <img src='src/components/icons/boxes.png' @click="changeView('impersonate')"/>
        <div class="icon-text">Moderation</div>
      </div>
      <div class="icon">
        <img src='src/components/icons/moderation.png' @click="changeView('massEdit')"/>
        <div class="icon-text">Mass edit</div>
      </div>
      <div class="icon">
        <img src='src/components/icons/reset.png' @click="changeView('resetGame')"/>
        <div class="icon-text">Reset Game</div>
      </div>
    </div>
  </div>
</template>

<style>
.side-panel {
  position: fixed;
  top: 40px;
  left: 0;
  bottom: 0;
  width: 75px;
  background-color: #fa6607;
  z-index: 999;
}

.icon-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-top: 10px;
}

.icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.icon img {
  width: 58px;
  height: 58px;
  margin-bottom: 5px;
}

.icon-text {
  font-size: 15px;
  text-align: center;
  color: #444;
}
</style>


<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    changeView(viewName) {
      this.$emit('change-view', viewName)
    }
  }
}
</script>