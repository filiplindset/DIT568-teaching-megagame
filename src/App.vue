<template>
    <div id="app">
      <ResourceList :resources="resources"/>
    </div>
  </template>
  
  <script>
  import ResourceList from './components/ResourceList.vue';
  
  export default {
    name: 'App',
    components: {
      ResourceList
    },
    data() {
      return {
        resources: [
          { id: 1, name: 'Wood', count: 300 },
          { id: 2, name: 'Iron', count: 500 },
          { id: 3, name: 'Food', count: 10 },
        ]
      }
    }
  }
  </script>
  