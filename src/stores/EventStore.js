import { defineStore } from "pinia";
import EventService from '../services/EventService'
/*
The method define store receives 2 paramethers:
- Store name: string
- Store config: object

the 'use' as prefix comes from the pattern of composition API
So the eventStore becomes useEventStore

Getters:
You can also use arrow functions on getters
The thing is: arrow functions resets 'this' context
so we cant rely on 'this' keyword

*/

export const useEventStore = defineStore('EventStore', {
  state() {
    return {
      events: [],
      event: {}
    }
  },
  getters: {
    numberOfEvents: state => state.events.length
  },
  actions: {
    fetchEvents() {
      return EventService.getEvents()
        .then(response => {
          this.events = response.data
        })
        .catch(error => {
          throw error
        })
    },
    createEvent(event) {
      return EventService.postEvent(event)
        .then(() => {
          this.events.push(event)
        })
        .catch(error => {
          throw error
        })
    },

    fetchEvent(id) {
      const existingEvent = this.events.find(event => event.id === id);
      if (existingEvent) {
        return this.event = existingEvent
      }
      EventService.getEvent(id)
        .then(response => {
          this.event = response.data
        })
        .catch(error => {
          throw error
        })
    }
  }
})