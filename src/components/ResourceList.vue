<template>
  <div>
    <h2>Available Resources</h2>
    <ul>
      <li v-for="([resource, amount]) in this.resourceList " class="resource-item">
        <span class="resource-name">{{resource}}</span>
        <div class="resource-controls">
          <button class="resource-button minus-button" @click="decrementResource(resource)">-</button>
          <span class="resource-amount">{{amount}}</span>
          <button class="resource-button plus-button" @click="incrementResource(resource)">+</button>
        </div>
      </li>
    </ul>
    <button @click="updateResources();">Update Resources</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['currentFaction'],
  data() {
    return {
      resources: {},
      resourceList: [ ["Money", 0], ["Gems", 0], ["Steel", 0], ["Wood", 0], ["Tech", 0], ["Energy", 0] ],
      lastChangeTime: 0
    };
  },
  created() {
      /*
    axios.get('http://127.0.0.1:8080/getPlayerResources')
        .then(response => {
          console.log(response.data);
          this.resources = response.data;
          for (var faction of response.data) {
            if(faction.id === this.currentFaction) {
              for(var i=0; i<this.resourceList.length; i++) {
                for(var [key, value] of Object.entries(faction)) {
                  if (this.resourceList[i][0].toLowerCase() === key.toLowerCase()) {
                    this.resourceList[i][1] = value;
                  }
                }
              }
            }
          }
        })
        .catch(error => {
          console.log(error);
        }); */
      this.requestData();
  },
  methods: {
    incrementResource(resource) {

      const index = this.resourceList.findIndex(([name, value]) => name === resource);
      this.resourceList[index][1]++;
      this.lastChangeTime = Date.now();
    },
    decrementResource(resource) {

      const index = this.resourceList.findIndex(([name, value]) => name === resource);
      if (this.resourceList[index][1] > 0) {
        this.resourceList[index][1]--;
        this.lastChangeTime = Date.now();
      }
    },
    async updateResources() {

      for (var [resource, amount] of this.resourceList) {
        for (const faction of this.resources) {
            console.log("faction: " + faction)
          if (faction.id === this.currentFaction){
            for(var [key, value] of Object.entries(faction)){
              if (key.toLowerCase() === resource.toLowerCase()){
                console.log(key, value)
                faction[key] = amount;
              }
            }
          }
        }
      }

        try {
            const response = await axios.put('http://localhost:8080/putPlayerResources', JSON.stringify(this.resources[this.currentFaction]), {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        this.lastChangeTime = 0;
    },
      async requestData() {
        const deltaT = Date.now() - this.lastChangeTime;
        if (deltaT > 3000) {
            try {
                const response = await axios.get('http://127.0.0.1:8080/getPlayerResources');
                console.log(response.data);
                this.resources = response.data;
                for (var faction of response.data) {
                    if (faction.id === this.currentFaction) {
                        for (var i = 0; i < this.resourceList.length; i++) {
                            for (var [key, value] of Object.entries(faction)) {
                                if (this.resourceList[i][0].toLowerCase() === key.toLowerCase()) {
                                    this.resourceList[i][1] = value;
                                }
                            }
                        }
                    }
                }
                setTimeout(this.requestData, 5000);
            } catch (error) {
                console.log("Error fetching data: ", error);
                setTimeout(this.requestData, 5000);
            }
        }
      },

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
