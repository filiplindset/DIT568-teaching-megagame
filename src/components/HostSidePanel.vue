<template>
  <div class="side-panel">
    <div class="icon-container">
      <img src='src/components/icons/vilt.png' @click="changeView('timer')"/>
      <img src='src/components/icons/vilt.png' @click="changeView('impersonation')"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [('src/components/icons/vilt.png')]
    }
  },
  methods: {
    changeView(viewName) {
      this.$emit('change-view', viewName)
    }
  }
}
</script>

<style>
.side-panel {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50px;
  background-color: #f1f1f1;
  z-index: 999;
}

.icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.icon {
  margin-bottom: 10px;
}
</style>