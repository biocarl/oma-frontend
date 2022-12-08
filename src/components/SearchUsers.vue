<template>
  <li class="li-type"   @click="isCollapsed = !isCollapsed" >
    <strong>Users</strong>
    <i v-if="isCollapsed" class="fas fa-forward filter-icon" aria-hidden="true"></i>
  </li>
      <li v-if="!isCollapsed"  v-for="user in users" key="user.user"
          @click="updateUserSelection(user.user)"
          :class="{selected: this.isSelected(user.user)}">
        {{user.user}}<strong>{{"(" + user["til-count"] +")"}}</strong></li>
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
      users: [],
      isCollapsed: false
    }
  },
  created() {
    this.fetchUsers();
  },
  emits: ["users-update"],
  methods: {
    isSelected(user){
      return this.selectedUsers.includes(user);
    },
    updateUserSelection(user){
      if(this.isSelected(user)){
        this.selectedUsers = this.selectedUsers.filter(e => e !== user)
      }else{
        this.selectedUsers.push(user);
        this.isCollapsed = !this.isCollapsed;
      }
      if(this.selectedUsers.length === 0){
        this.isCollapsed = !this.isCollapsed;
      }
      this.$emit('users-update',this.selectedUsers);
    },
    fetchUsers(){
      oma.getUsers(this.queryParams)
          .then(response => {
            this.users = response.data.result;
          }).catch(e => {
        console.log(e);
      });
    }
  },
  watch:{
    queryParams:{
      handler: function (){
        this.fetchUsers();
      },
      deep: true
    }
  }
}
</script>

<style scoped>
@import "@/assets/search-filters.css";
</style>
