<script>
import { v4 as uuidv4 } from 'uuid'
import { reactive } from 'vue';
import { useEventStore } from '../stores/EventStore'
import { useUserStore } from '../stores/UserStore';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const router = useRouter(); 
    const userStore = useUserStore();
    const eventStore = useEventStore();

    const categories = [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
      'sports',
    ];

    const eventFormData = reactive({
      title: "",
      category: "",
      description: "",
      location: "",
      date: "",
      time: "",
      organizer: "",
    })

    const submitForm = async () => {
      const event = {
        ...eventFormData,
        id: uuidv4(),
        organizer: userStore.user
      }

      eventStore.createEvent(event)
        .then(() => {
          router.push({
            name: 'EventDetails',
            params: { id: event.id }
          })
        })
        .catch((error) => {
          router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        })
    }

    return  {
      categories,
      eventFormData,
      submitForm
    }
    
  },
}
</script>

<template>
  <h1>Create an event</h1>

  <div class="form-container">
    <form @submit.prevent="submitForm">
      <label>Select a category: </label>
      <select v-model="eventFormData.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === eventFormData.category"
        >
          {{ option }}
        </option>
      </select>

      <h3>Name & describe your event</h3>

      <label>Title</label>
      <input v-model="eventFormData.title" type="text" placeholder="Title" />

      <label>Description</label>
      <input
        v-model="eventFormData.description"
        type="text"
        placeholder="Description"
      />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <input v-model="eventFormData.location" type="text" placeholder="Location" />

      <h3>When is your event?</h3>
      <label>Date</label>
      <input v-model="eventFormData.date" type="text" placeholder="Date" />

      <label>Time</label>
      <input v-model="eventFormData.time" type="text" placeholder="Time" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>
