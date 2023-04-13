<template>
  <div>
    <img :src="imageSrc" @click="redirectToUrl" />
  </div>
</template>

<script>
export default {
  name: 'HostSidebarBtn',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    redirectUrl: {
      type: String,
      required: true
    }
  },
  methods: {
    redirectToUrl() {
      window.location.href = this.redirectUrl;
    }
  }
}
</script>