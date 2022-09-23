<script>
import { useEventStore } from '../stores/EventStore'

export default {
  props: ['id'],

  async setup(props) {
    const eventStore = useEventStore()
    console.log('props', props)
    const event = await eventStore.fetchEvent(props.id)

    console.log('props', eventStore.event)

    return event
  },
}
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
