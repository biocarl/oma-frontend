<template>
  <main>
    <div class="container has-text-centered">
    <h1>Search</h1>
    <h3>Category: <strong>{{this.query.currentCategory}}</strong></h3>
    <h3>User: <strong>{{this.query.currentUser}}</strong></h3>
    </div>
    <SearchCategories @category-update="(category) => this.query.currentCategory = category" />
    <SearchUsers @user-update="(user) => this.query.currentUser = user" />
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
      query: {currentCategory: "", currentUser: ""},
    }
  },
  watch: {
    query: {
      handler (newQuery, oldQuery){
        console.log("Category: " + newQuery.currentCategory + "| User: " + newQuery.currentUser);
      },
      deep: true
    }
  }
}
</script>
