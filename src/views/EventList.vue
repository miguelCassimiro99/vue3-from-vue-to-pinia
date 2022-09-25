<script>
import EventCard from '../components/EventCard.vue'
import {useEventStore} from '../stores/EventStore.js'
export default {
  components: {
    EventCard
  },

  setup() {
    const eventStore = useEventStore()
    const events = eventStore.fetchEvents()

    return {
      eventStore,
      events
    }
  },
}
</script>

<template>
  <h1>{{ eventStore.numberOfEvents }} Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in eventStore.events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
