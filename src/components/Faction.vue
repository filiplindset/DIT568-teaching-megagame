<template>
    
    <div class="faction">
        <button @click="redirectPlayer(faction.id)">
            <div class="faction-inner">

              <div class="faction-text-wrap">
                  <h2 class="faction-name">{{ faction.name }}</h2>

              </div>
              <div class="faction-image-wrap">
                  <img :src="faction.img" class="image"/>
              </div>
              <div class="faction-info">
                  <h3>{{ faction.info }}</h3>
              </div>
              </div>
      </button>
    </div>

</template>
<script lang="ts">

export default {
    name: 'faction',
    props: ['faction'],
    methods: {
      redirectPlayer(factionId) {
        this.$emit('redirect-player', factionId)
    }
  }
}

</script>

<style>
button{
        display: flex;
        width: 100%;
        padding: 25px;
        margin: 0 auto;
        box-shadow: 0px 0px 16px rgba(0 ,0 , 0, 0.25) ; 
    }

    .faction {
      width:100%;
      padding: 25px;  
    }
    .faction-inner {
       position: relative;
       padding: 25px;
       
    }

    .faction-image-wrap .image {
        width:100%;
    }

    .link{
        text-decoration: none;
        color: black;
    }
</style>