<template>
  <main>
    <div class="container has-text-centered">
    <h1>Search</h1>
    <h3>Category: <strong>{{this.query.currentCategory}}</strong></h3>
    <h3>User: <strong>{{this.query.currentUsers.join(", ")}}</strong></h3>
    </div>
    <SearchCategories @category-update="(category) => this.query.currentCategory = category" />
    <SearchUsers @users-update="(users) => this.query.currentUsers = users" />
  </main>
</template>

<script setup>
import SearchCategories from "@/components/SearchCategories.vue";
import SearchUsers from "@/components/SearchUsers.vue";
</script>

<script>

export default {
  data() {
    return {
      query: {currentCategory: "", currentUsers: []},
    }
  },
  watch: {
    query: {
      handler (newQuery, oldQuery){
        console.log("Category: " + newQuery.currentCategory + "| Users: " + newQuery.currentUsers);
      },
      deep: true
    }
  }
}
</script>
