<template>
  <li
      @click="clickHandler"
      :class="{selected: this.node.path === this.currentPathSelection, hasChildren: node.children}"
      :style="{'background-color': 'hsl(40,100%,'+ (50+depth*20) +'%)'}"  >
    {{node.category}} <strong>{{" (" + node.count +")" }}</strong>
  </li>

  <CategoryBrowser
                   v-if="visible"
                   v-for="child in node.children"
                   :key="child.name"
                   :node="child"
                   @category-clicked="passThroughFromChild"
                   :currentPathSelection="currentPathSelection"
                   :depth="depth+1">
  </CategoryBrowser>
</template>

<script>
export default {
  name: 'CategoryBrowser',
  props: {
    node: Object,
    currentPathSelection: {
      type: String,
      required:true
    },
    depth: {
      type: Number,
      default: 0,
    }
  },
  data(){
    return {
      visible: false,
      isShow: false
    }
  },
  emits: ["category-clicked"],
  methods:{
    clickHandler(){
      this.visible = !this.visible;
      this.isShow = !this.isShow;
      this.$emit('category-clicked',this.node.path);
    },
    passThroughFromChild(event){
      this.$emit('category-clicked',event);
    }
  }
}
</script>

<style scoped>
@import "@/assets/search-filters.css";
.hasChildren{
  border: 0.1rem solid;
}
</style>
