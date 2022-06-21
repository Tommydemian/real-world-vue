<template>
  <div class="input-wrapper">
    <label for="base-input">{{ label }}</label>
    <input
      class="input"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('customChange:modelValue', $event.target.value)"
      v-bind="$attrs"
      id="base-input"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.3em;
}
.input {
  padding: 1em;
  border: 1px solid black;
  border-radius: 6px;
}
</style>
