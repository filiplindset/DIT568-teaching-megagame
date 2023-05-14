<template>
  <div>
    <h2 class="rubrik4">Available Resources</h2>
    <ul>
      <li v-for="([resource, amount]) in resourceList" class="resource-item">
        <span class="resource-name">{{resource}}</span>
        <div class="resource-controls">
          <button class="resource-button minus-button" @click="decrementResource(resource)">-</button>
          <span class="resource-amount">{{amount}}</span>
          <button class="resource-button plus-button" @click="incrementResource(resource)">+</button>
        </div>
      </li>
    </ul>
    <button class="update" @click="updateResources">Update Resources</button>
  </div>
</template>

<script>
import axios from "axios";

const resourceList = [ ["Money", 0], ["Gems", 0], ["Steel", 0], ["Wood", 0], ["Tech", 0], ["Energy", 0] ];

export default {
  data() {
    return {
      resources: {},
      resourceList: resourceList
    };
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
    incrementResource(resource) {
      const index = this.resourceList.findIndex(([name, value]) => name === resource);
      this.resourceList[index][1]++;
    },
    decrementResource(resource) {
      const index = this.resourceList.findIndex(([name, value]) => name === resource);
      if (this.resourceList[index][1] > 0) {
        this.resourceList[index][1]--;
      }
    },
    async updateResources() {
      for (var [resource, amount] of this.resourceList) {
        for (const faction of this.resources) {
          for(var [key, value] of Object.entries(faction)){
            if (key.toLowerCase() === resource.toLowerCase()){
              faction[key] += amount;
            }
          }
        }
      }
      console.log('Resources:')
      console.log(this.resources)
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
};
</script>

<style scoped>
.resource-item {
  display: compact;
  align-items: center;
  margin-bottom: 10px;
  list-style-type: none;
}

.resource-name {
  flex-grow: 1;
  font-weight: bold;
}

.resource-controls {
  display: flex;
  margin-left: auto;
  padding: 15px 15px;
}

.resource-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #f2f2f2;
  font-size: 18px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s ease;
}

.minus-button {
  color: #ff8c00;
}

.plus-button {
  color: #008000;
}

.resource-button:hover {
  background-color: #d9d9d9;
}

.update{
  max-width: fit-content;
  padding: 20px 20px;
  background-color: #dc9839;
  color: white;
  font-weight: bold;
}

.update:hover {
  background-color: #e4ae61;
}
</style>
