<template>
  <div class="home">
    <EventCard v-for="event in state.events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { onBeforeMount, reactive } from "vue";
import apiClient from "../services/EventService";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  setup() {
    let state = reactive({
      events: [],
    });

    onBeforeMount(() => {
      apiClient
        .getEvents()
        .then((response) => {
          state.events = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    });

    return {
      state,
    };
  },
};
</script>
