<template>
  <li class="li-type" @click="isCollapsed = !isCollapsed" >
    <strong>Categories</strong>
    <i v-if="isCollapsed" class="fas fa-forward filter-icon" aria-hidden="true"></i>
  </li>
  <CategoryBrowser v-if="!isCollapsed"
                   v-for="(category,index) in categoryForest"
                   @category-clicked="updateCategorySelection"
                   :key="index"
                   :node="category"
                   :currentPathSelection="currentPathSelection">
  </CategoryBrowser>
</template>

<script>
import oma from "../services/OmaService";
import {inflateForest} from "./helpers.js";
import CategoryBrowser from "@/components/CategoryBrowser.vue";

export default {
  components: {CategoryBrowser},
  props:{
    queryParams: {
      type: Object
    }
  },
  data(){
    return {
      currentPathSelection: "",
      categories: [],
      isCollapsed: false
    }
  },
  computed:{
    categoryForest(){
      const categoryForest = inflateForest(this.categories);
      categoryForest.sort((a, b) => (a.count < b.count) ? 1 : -1);
      return categoryForest;
    }
  },
  created() {
    this.fetchCategories();
  },
  emits: ["category-update"],
  methods: {
    updateCategorySelection(nodePath){
      if(nodePath === this.currentPathSelection){
        this.$emit('category-update',"");
        this.currentPathSelection= "";
      }else{
        this.$emit('category-update', nodePath);
        this.currentPathSelection= nodePath;
        // this.isCollapsed = !this.isCollapsed;
      }
    },
    fetchCategories(){
      oma.getCategories(this.queryParams)
          .then(response => {
            this.categories = response.data.categories;
          }).catch(e => {
        console.log(e);
      });
    }
  },
  watch:{
    queryParams:{
      handler: function (){
        this.fetchCategories();
      },
      deep: true
    }
  }
}
</script>

<style scoped>
@import "@/assets/search-filters.css";
</style>
