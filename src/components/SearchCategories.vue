<template>
  <div class="container has-text-centered">
    <h1>Categories</h1>
    <ul>
      <li v-for="category in categories">{{category["category"] + "(" + category["count"] +")" }}</li>
    </ul>
  </div>
</template>


<script>
export default {
  props: {
    categories: {
      type: String
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
