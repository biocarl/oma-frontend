<template>
  <div class="container has-text-centered">
    <h1>Users</h1>
    <ul>
      <li v-for="(user,index) in users" key="index"
          @click="updateUserSelection(index)"
          :class="{selected: index === currentSelection}">
        {{user.user  }}<strong>{{"(" + user["til-count"] +")"}}</strong></li>
    </ul>
  </div>
</template>

<script>
import oma from "../services/OmaService";
export default {
  data(){
    return {
      currentSelection : -1,
      users: []
    }
  },
  created() {
    oma.getUsers()
        .then(response => {
          this.users = response.data;
        }).catch(e => {
      console.log(e);
    });
  },
  methods: {
    updateUserSelection(index){
      if(index === this.currentSelection){
        this.currentSelection = -1;
        this.$emit('user-update',"");
      }else{
        this.currentSelection = index;
        this.$emit('user-update',this.users[this.currentSelection].user);
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

ul li strong {
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
  font-weight: bold;
  color: hotpink;
}
</style>
