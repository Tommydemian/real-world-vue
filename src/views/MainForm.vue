<template>
  <div>
    <h1>Create an event</h1>
    <form>
      <label>Select a category</label>
      <select v-model="category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === valueModel"
        >
          {{ option }}
        </option>
      </select>

      <h3>Name & describe your event</h3>

      <BaseInput
        label="Title"
        type="text"
        placeholder="Enter title..."
        v-model="title"
      />
      <BaseInput
        label="Description"
        type="text"
        placeholder="Enter Description..."
        v-model="description"
      />
      <h1>{{ title }}</h1>

      <h3>Where is your event?</h3>

      <BaseInput
        label="Location"
        type="text"
        placeholder="Enter Location..."
        v-model="location"
      />

      <h3>Are pets allowed?</h3>
      <div>
        <input type="radio" v-model="pets" :value="1" name="pets" />
        <label>Yes</label>
      </div>

      <div>
        <input type="radio" v-model="pets" :value="0" name="pets" />
        <label>No</label>
      </div>

      <h3>Extras</h3>
      <div>
        <input type="checkbox" v-model="extras.catering" class="field" />
        <label>Catering</label>
      </div>

      <div>
        <input type="checkbox" v-model="extras.music" class="field" />
        <label>Live music</label>
      </div>

      <button type="submit">Submit</button>
    </form>

    {{ description }}
    {{ location }}
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

import BaseInput from "../components/BaseInput.vue";

export default {
  name: "MainForm",
  components: {
    BaseInput,
  },
  setup() {
    const event = reactive({
      category: "",
      title: "2pacShakur",
      description: "",
      location: "",
      pets: 1,
      extras: {
        catering: false,
        music: false,
      },
    });

    const categories = reactive([
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ]);

    return {
      categories,
      ...toRefs(event),
    };
  },
};
</script>

<style scoped>
form {
  padding: 1em;
  width: 50%;
  border: 2px solid magenta;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 0.2em;
  justify-content: center;
  align-items: center;
}
</style>
