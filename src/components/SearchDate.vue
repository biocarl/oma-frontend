<template>
  <li class="li-type"  @click="isCollapsed = !isCollapsed" >
    <strong>Time Range</strong>
    <i v-if="isCollapsed" class="fas fa-forward filter-icon" aria-hidden="true"></i>
  </li>
      <li v-if="!isCollapsed" v-for="(date,index) in startDates" key="index"
          @click="updateDateSelection(index)"
          :class="{selected: index === currentSelection}">
        {{date.name}}</li>
</template>

<script>
export default {
  data(){
    return {
      currentSelection: -1,
      endDate: new Date(),
      isCollapsed: false
    }
  },
  emits: ["date-update"],
  methods: {
    updateDateSelection(index){
      if(index === this.currentSelection){
        this.currentSelection = -1;
        this.$emit('date-update',{startDate: this.dateToString(new Date("2000-01-01")), endDate:  this.dateToString(this.endDate)});
      }else{
        this.isCollapsed = !this.isCollapsed;
        this.currentSelection = index;
        this.$emit('date-update',{startDate: this.dateToString(this.startDates[this.currentSelection].startDate), endDate:  this.dateToString(this.endDate)});
      }
    },
    dateToString(date){
      var pad = (number) => String(number).padStart(2, '0');
      return `${pad(date.getDate())}.${pad(date.getMonth()+1)}.${date.getFullYear()}`
    },
    minusWeek(originalDate, weeks){
      let newDate = new Date();
      newDate.setDate(originalDate.getDate() - 7 * weeks)
      return newDate;
    },
    minusMonth(originalDate, months){
      let newDate = new Date();
      newDate.setMonth(originalDate.getMonth() - months)
      return newDate;
    },
    minusYear(originalDate, years){
      let newDate = new Date();
      newDate.setFullYear(originalDate.getFullYear() - years)
      return newDate;
    }
  },
  computed:{
    startDates(){
      return [ {name: "Last week", startDate: this.minusWeek(this.endDate,1)},
        {name: "Last month", startDate: this.minusMonth(this.endDate,1)},
        {name: "Last year", startDate: this.minusYear(this.endDate,1)}];
    }
  }
}
</script>


<style scoped>
@import "@/assets/search-filters.css";
</style>
