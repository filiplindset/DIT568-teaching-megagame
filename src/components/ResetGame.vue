<template>
  <div class="center">

    <button class="big-red-button" @click="showPopup = true;">
      <div class="btn-text">Reset All Resources</div>
    </button>

    <div class="popup" v-if="showPopup">
      <div class="overlay">
        <div class="delete-box">
          <p>This will completely reset all the resources for all players. Are you sure you want to continue?</p>
          <div class="buttons">
            <button class="cancel-button" @click="showPopup = false">Cancel</button>
            <button class="proceed-button" @click="resetResources(); showPopup = false">Proceed</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      showPopup: false,
      resources: {},
    };
  },
  methods: {
    async resetResources() {
      for (const faction of this.resources) {
        for (var [key, value] of Object.entries(faction)){
          if(key !== 'id' || key !== 'name') {
            faction[key] = 0
          }
        }
        // Save updated resources to server
        try {
          const response = await axios.put('http://localhost:8080/putAllResources', JSON.stringify(this.resources), {
            headers: {
              'Content-Type': 'application/json'
            },
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }

    },
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
};
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.btn-text {
  color: #f2f2f2;
  vertical-align: auto;
  padding-top: 5.5rem;
}

.big-red-button {
  background-color: rgb(229, 42, 42);
  color: white;
  font-size: 24px;
  padding: 30px 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 300px;
  height: 300px;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
}

.delete-box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 4;
  max-width: 90vw; /* new line to limit popup width */
}

.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.cancel-button {
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.proceed-button {
  background-color: red;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button {
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
