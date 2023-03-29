<template>
  <div class="timer">
    <div class="timer-display">{{ formatTime(time) }}</div>
    <div class="timer-controls">
      <button @click="start">Start</button>
      <button @click="pause">Pause</button>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 0,
      intervalId: null,
    };
  },
  methods: {
    start() {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          this.time += 1;
        }, 1000);
      }
    },
    pause() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    reset() {
      this.pause();
      this.time = 0;
    },
    formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
    },
  },
};
</script>

<style>
.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.timer-display {
  font-size: 2em;
  margin-bottom: 1em;
}

.timer-controls button {
  margin: 0.5em;
  padding: 0.5em 1em;
  font-size: 1em;
  border-radius: 0.5em;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.timer-controls button:hover {
  background-color: #0056b3;
}
</style>
