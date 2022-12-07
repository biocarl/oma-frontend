<template>
  <li class="li-type"   @click="isCollapsed = !isCollapsed" >
    <strong>Categories</strong>
    <i v-if="isCollapsed" class="fas fa-forward filter-icon" aria-hidden="true"></i>
  </li>
      <li v-if="!isCollapsed" v-for="(category,index) in categories" key="index"
          @click="updateCategorySelection(index)"
          :class="{selected: index === currentSelection}">
        {{category.category}}<strong>{{" (" + category.count +")" }}</strong></li>
</template>

<script>
import oma from "../services/OmaService";
export default {
  props:{
    queryParams: {
      type: Object
    }
  },
  data(){
    return {
      currentSelection: -1,
      categories: [],
      isCollapsed: false
    }
  },
  created() {
    this.fetchCategories();
  },
  emits: ["category-update"],
  methods: {
    updateCategorySelection(index){
      if(index === this.currentSelection){
        this.currentSelection = -1;
        this.$emit('category-update',"");
      }else{
        this.currentSelection = index;
        this.$emit('category-update',this.categories[this.currentSelection].category);
        this.isCollapsed = !this.isCollapsed;
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
      }
    }
  }
}
</script>

<style scoped>
@import "@/assets/search-filters.css";
</style>
