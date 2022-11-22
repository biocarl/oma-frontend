<template>
  <main>
    <div class="container has-text-centered">
    <h1>Search</h1>
    <h3>Current: <strong>{{this.query.currentCategory}}</strong></h3>
    </div>
    <SearchCategories @category-update="(category) => this.query.currentCategory = category" />
  </main>
</template>

<script setup>
import SearchCategories from "@/components/SearchCategories.vue";
</script>

<script>

export default {
  data() {
    return {
      query: {currentCategory: ""},
    }
  },
  watch: {
    query: {
      handler (newQuery, oldQuery){
        console.log("Changed!! With " + newQuery.currentCategory);
      },
      deep: true
    }
  }
}
</script>
