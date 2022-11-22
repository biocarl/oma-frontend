<template>
  <div class="container has-text-centered">
    <h1>Categories</h1>
    <ul>
      <li v-for="(category,index) in categories" key="index"
          @click="updateCategorySelection(index)"
          :class="{selected: index === currentSelection}"
          >{{category.category + "(" + category.count +")" }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array
    }
  },
  data(){
    return {
      currentSelection : -1
    }
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
ul li{
  display: inline;
  margin-left: 20px;
  cursor: pointer;
  color: #2979ff;
  white-space: pre-wrap;
  word-wrap:break-word;
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
  font-weight: bold;
}
</style>
