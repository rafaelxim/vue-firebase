<template>
  <div id="app">
  <h1>{{ title }}</h1> 
  <Navbar />  
  <AllFriends @delete="deleteFriend" :friends="friends" />
  <OnlineFriends :friends="friends" />
  <Blogs />

  </div>
</template>

<script>
import Navbar from './Navbar';
import AllFriends from './AllFriends';
import OnlineFriends from './OnlineFriends';
import Blogs from './Blogs';


export default {
  name: 'app',  
  components: {
    Navbar,
    OnlineFriends,
    AllFriends, 
    Blogs
  },
  data () {
    return {
      title: 'Vue app wooo =p', 
      friends : [
          {name : 'User 1', online: false},
          {name : 'User 2', online: false},
          {name : 'User 3', online: true},
          {name : 'User 4', online: true},
      ]
    }    
  }, 
  methods:{
    deleteFriend(payload){

      this.friends = this.friends.filter(friend => {
        return friend.name != payload.name ;  
      })
    }
  }
}
</script>

<style scoped>

h1{
  color: #444
}
</style>
