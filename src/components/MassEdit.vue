<template>
  <div>
    <h2>Available Resources</h2>
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
    <button @click="updateResources">Update Resources</button>
  </div>
</template>

<script>
import resourcesData from "@/assets/resources.json";
const resourceList = [ ["Money", 0], ["Gems", 0], ["Steel", 0], ["Wood", 0], ["Tech", 0], ["Energy", 0] ];

export default {
  data() {
    return {
      resources: resourcesData,
      resourceList: resourceList
    };
  },
  methods: {
    incrementResource(resource) {
      const index = this.resourceList.findIndex(([name, value]) => name === resource);
      this.resourceList[index][1]++;
      console.log(resourceList)
    },
    decrementResource(resource) {
      const index = this.resourceList.findIndex(([name, value]) => name === resource);
      if (this.resourceList[index][1] > 0) {
        this.resourceList[index][1]--;
      }
      console.log(resourceList)
    },
    updateResources() {
      console.log(this.resources)
      for (var [resource, amount] of resourceList) {
        for (const faction of this.resources) {
          for(var [key, value] of Object.entries(faction)){
            if (key.toLowerCase() === resource.toLowerCase()){
              console.log(value)
              faction[key] += amount;
              console.log(value)
            }
          }
        }
      }
      console.log(this.resources)

      // Save updated resources to localStorage or server
      localStorage.setItem('resourcesData', JSON.stringify(this.resources));
    }
  },
};
</script>

<style scoped>
.resource-item {
  display: compact;
  align-items: center;
  margin-bottom: 10px;
}

.resource-name {
  flex-grow: 1;
}

.resource-controls {
  display: flex;
  margin-left: auto;
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

</style>
