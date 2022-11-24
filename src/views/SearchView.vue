<template>
  <main>
    <div class="container has-text-centered">
    <hr style="border-top: 1px dashed;">
    <h1>Search</h1>
    <h3>Category: <strong>{{this.query.currentCategory}}</strong></h3>
    <h3>User: <strong>{{this.query.currentUsers.join(", ")}}</strong></h3>
    <h3>DateRange: <strong>{{this.query.currentDateRange}}</strong></h3>
    </div>
    <SearchCategories
        :queryParams={users:this.query.currentUsers}
        @category-update="(category) => this.query.currentCategory = category" />
    <SearchUsers @users-update="(users) => this.query.currentUsers = users" />
    <SearchDate @date-update="(dateRange) => this.query.currentDateRange = dateRange" />
  </main>
</template>

<script setup>
import SearchCategories from "@/components/SearchCategories.vue";
import SearchUsers from "@/components/SearchUsers.vue";
import SearchDate from "@/components/SearchDate.vue";
</script>

<script>

export default {
  data() {
    return {
      query: {currentCategory: "", currentUsers: [], currentDateRange: { startDate: "", endDate: ""}},
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
