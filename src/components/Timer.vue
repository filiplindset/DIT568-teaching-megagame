<template>
  <div class="timer">
    <div class="timer-inputs">
      <div class="timer-input-group">
        <button class="timer-button" @click="decrementMinutes">-</button>
        <input class="time-input" type="number" v-model="minutes" min="0" max="59">
        <button class="timer-button" @click="incrementMinutes">+</button>
      </div>
      <div class="timer-input-group">
        <button class="timer-button" @click="decrementSeconds">-</button>
        <input class="time-input" type="number" v-model="seconds" min="0" max="59">
        <button class="timer-button" @click="incrementSeconds">+</button>
      </div>
    </div>
    <div class="timer-controls">
      <button class="function-button start-button" @click="startTimer" :disabled="timerRunning">Start</button>
      <button class="function-button danger-button" @click="stopTimer" :disabled="!timerRunning && !timerEnded">Stop</button>
      <button class="function-button secondary-button" @click="resetTimer">Reset</button>
    </div>
    <div class="timer-display" :class="{ ended: timerEnded }" >
      <span>{{ minutesRemaining }}</span>
      <span>:</span>
      <span>{{ secondsRemaining }}</span>
    </div>
  </div>
</template>
<style>
.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.timer-inputs {
  margin-bottom: 20px;
}

.timer-input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.timer-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.time-input {
  border: none;
  font-size: 48px;
  font-weight: bold;
  padding: 5px 10px;
  width: 80px;
  text-align: center;
}

.timer-button {
  background-color: #d1d1d1;
  color: #000;
  border: none;
  border-radius: 50%;
  padding: 20px;
  font-size: 32px;
  margin: 0 10px;
  text-align: center;
  width: 70px;
  height: 70px;
}

.start-button {
  background-color: #007aff;
  color: #fff;
}

.danger-button {
  background-color: #ff3b30;
  color: #fff;
}

.secondary-button {
  background-color: #d1d1d1;
  color: #000;
}

.function-button {
  border-radius: 5px;
  margin: 4px;
}

.timer-display {
  font-size: 72px
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