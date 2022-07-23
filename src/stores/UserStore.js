import { defineStore } from "pinia";

/* 
Instead of declare a function that returns our state
We can declare state as a arrow function passing the state we need to return
less verbosely
*/

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: 'Miguel Cassimiro'
  }),
  getters: {
    firstName() {
      return this.user.split(' ')[0]
    }
  }
})