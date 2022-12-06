<template>
  <li class="li-type"><strong>Categories</strong></li>
      <li v-for="(category,index) in categories" key="index"
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
      categories: []
    }
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    updateCategorySelection(index){
      if(index === this.currentSelection){
        this.currentSelection = -1;
        this.$emit('category-update',"");
      }else{
        this.currentSelection = index;
        this.$emit('category-update',this.categories[this.currentSelection].category);
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
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

li {
  display: inline;
  padding: 0px 4px 0px 4px;
  margin: 4px 4px 4px 4px;
  cursor: pointer;
  white-space: pre-wrap;
  word-wrap:break-word;

  /*Selected style*/
  border-radius: 7px;
  border-color: transparent;
  border-style: dashed;
}

li * {
  color: #2979ff;
}

ul{
  list-style-type: disc;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 1em 20em 1em 20em;
}
.selected{
  border-color: red;
}
.li-type strong{
  cursor: default;
  color: #cc4b63;
}
</style>
