<template>
    <div>
      <h2>Resources</h2>
      <ul>
        <li v-for="resource in resources" :key="resource.id" @click="setCount(resource)">
          <a>{{ resource.name }}: {{ resource.count }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      resources: {
        type: Array,
        required: true
      }
    },
    methods: {
        setCount(resource){
            resource.count+= 10
        }
    }
  }
  </script>
  