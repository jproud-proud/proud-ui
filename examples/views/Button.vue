<template>
  <div>
    <pd-button>nothing</pd-button>
    <pd-button
      type="primary"
      @click="handleClick"
      disabled
    >primary</pd-button>
    <pd-button
      type="success"
      round
    >success</pd-button>
    <pd-button
      type="warning"
      icon="info"
    >warning</pd-button>
    <pd-button
      type="danger"
      @click="handleClick"
    >danger</pd-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert(1);
    }
  }
};
</script>

<style scoped>
</style>