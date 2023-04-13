<template>
  <div class="timer">
    <div class="timer-inputs">
      <div class="input-group">
        <button class="btn btn-secondary" @click="decrementMinutes">-</button>
        <input type="number" v-model="minutes" min="0" max="59">
        <button class="btn btn-secondary" @click="incrementMinutes">+</button>
      </div>
      <div class="input-group">
        <button class="btn btn-secondary" @click="decrementSeconds">-</button>
        <input type="number" v-model="seconds" min="0" max="59">
        <button class="btn btn-secondary" @click="incrementSeconds">+</button>
      </div>
    </div>
    <div class="timer-controls">
      <button class="btn btn-primary" @click="startTimer" :disabled="timerRunning">Start</button>
      <button class="btn btn-danger" @click="stopTimer" :disabled="!timerRunning && !timerEnded">Stop</button>
      <button class="btn btn-secondary" @click="resetTimer" :disabled="!timerRunning && !timerEnded">Reset</button>
    </div>
    <div class="timer-display" :class="{ ended: timerEnded }">
      {{ minutesRemaining }}:{{ secondsRemaining }}
    </div>
  </div>
</template>

<style>
.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.timer-input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.timer-label {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.timer-input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.timer-input-wrapper {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-right: 20px;
}

.timer-input {
  border: none;
  font-size: 24px;
  padding: 5px 10px;
  width: 60px;
  text-align: center;
}

.timer-button {
  background-color: #6d6d6d;
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 10px;
  font-size: 24px;
  margin: 0 10px;
}

.timer-unit {
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
}

.timer-display-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.timer-text {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      minutes: 0,
      seconds: 0,
      timerRunning: false,
      timerEnded: false,
      intervalId: null
    };
  },
  computed: {
    minutesRemaining() {
      return this.minutes < 10 ? `0${this.minutes}` : this.minutes;
    },
    secondsRemaining() {
      return this.seconds < 10 ? `0${this.seconds}` : this.seconds;
    }
  },
  methods: {
    decrementMinutes() {
      if (this.minutes > 0) {
        this.minutes--;
      }
    },
    incrementMinutes() {
      this.minutes++;
    },
    decrementSeconds() {
      if (this.seconds > 0) {
        this.seconds--;
      }
    },
    incrementSeconds() {
      if (this.seconds < 59) {
        this.seconds++;
      } else {
        this.seconds = 0;
        this.incrementMinutes();
      }
    },
    startTimer() {
      if (this.minutes > 0 || this.seconds > 0) {
        this.timerRunning = true;
        this.intervalId = setInterval(() => {
          if (this.seconds > 0) {
            this.seconds--;
          } else if (this.minutes > 0) {
            this.minutes--;
            this.seconds = 59;
          } else {
            clearInterval(this.intervalId);
            this.timerEnded = true;
            this.timerRunning = false;
          }
        }, 1000);
      }
    },
    stopTimer() {
      clearInterval(this.intervalId);
      this.timerRunning = false;
    },
    resetTimer() {
      clearInterval(this.intervalId);
      this.minutes = 0;
      this.seconds = 0;
      this.timerRunning = false;
      this.timerEnded = false;
    }
  }
};
</script>