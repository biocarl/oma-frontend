<script setup>
defineProps({
  query: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <h1>{{ "Message:" + query }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
