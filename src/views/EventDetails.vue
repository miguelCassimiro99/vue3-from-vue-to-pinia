<script>
import { useEventStore } from '../stores/EventStore'

export default {
  props: ['id'],

  setup(props) {
    const eventStore = useEventStore()
    eventStore.fetchEvent(props.id)

    return {
      eventStore
    }
  },
}
</script>

<template>
  <div>
    <h1> {{ eventStore.event.title }} </h1>
    <h3>{{ eventStore.event.category }}</h3>
    <p>{{ eventStore.event.description }}</p>
  </div>

</template>
