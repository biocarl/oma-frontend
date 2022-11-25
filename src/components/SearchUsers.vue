<template>
  <div class="container has-text-centered">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" key="user.user"
          @click="updateUserSelection(user.user)"
          :class="{selected: this.isSelected(user.user)}">
        {{user.user}}<strong>{{"(" + user["til-count"] +")"}}</strong></li>
    </ul>
  </div>
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
      selectedUsers : [],
      users: []
    }
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    isSelected(user){
      return this.selectedUsers.includes(user);
    },
    updateUserSelection(user){
      if(this.isSelected(user)){
        this.selectedUsers = this.selectedUsers.filter(e => e !== user)
      }else{
        this.selectedUsers.push(user);
      }
      this.$emit('users-update',this.selectedUsers);
    },
    fetchUsers(){
      oma.getUsers(this.queryParams)
          .then(response => {
            this.users = response.data;
          }).catch(e => {
        console.log(e);
      });
    }
  },
  watch:{
    queryParams:{
      handler: function (){
        this.fetchUsers();
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
  padding: 0px 4px 0px 4px;
  margin: 4px 4px 4px 4px;
  cursor: pointer;
  color: #2979ff;
  white-space: pre-wrap;
  word-wrap:break-word;

  /*Selected style*/
  border-radius: 7px;
  border-color: transparent;
  border-style: dashed;
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
  border-color: red;
}
</style>
