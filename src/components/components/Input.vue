<template>
  <div class="form-group">
    <label v-if="label">{{ label }}:</label>
    <input
            v-bind:placeholder="placeholder"
            :value="value"
            :name="name"
            @input="handleChange"
            type="text"
            class="form-control"
    />
  </div>

</template>

<script>
export default {
  name: 'Input',
  props: ['label', 'placeholder', 'value', 'name'],
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

