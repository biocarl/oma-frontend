<template>
  <li class="li-type"><strong>Time Range</strong></li>
      <li v-for="(date,index) in startDates" key="index"
          @click="updateDateSelection(index)"
          :class="{selected: index === currentSelection}">
        {{date.name}}</li>
</template>

<script>
export default {
  data(){
    return {
      currentSelection: -1,
      endDate: new Date()
    }
  },
  methods: {
    updateDateSelection(index){
      if(index === this.currentSelection){
        this.currentSelection = -1;
        this.$emit('date-update',{startDate: this.dateToString(new Date("2000-01-01")), endDate:  this.dateToString(this.endDate)});
      }else{
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

.selected{
  border-color: red;
}

.li-type strong{
  cursor: default;
  color: #cc4b63;
}
</style>
