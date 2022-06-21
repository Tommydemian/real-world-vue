<template>
  <div class="event-card">
    <h2>You are on {{ $route.params.id }}</h2>
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import { onBeforeMount, reactive, ref, toRefs } from "vue";
import apiClient from "../services/EventService";

export default {
  name: "EventDetails",
  props: ["id", "modelValue"],
  setup(props) {
    const state = reactive({
      events: [],
      event: {},
    });

    const message = ref("AsapRocky");

    onBeforeMount(() => {
      apiClient.getEvent(props.id).then((res) => {
        state.event = res.data;
      });
    });

    return {
      message,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin: 18px auto;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
