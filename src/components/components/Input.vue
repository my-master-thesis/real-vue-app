<template>
  <div class="form-group">
    <label v-if="label">{{ label }}: {{ value }}</label>
    <input
            v-bind:placeholder="placeholder"
            :value="value"
            @input="handleChange"
            type="text"
            class="form-control"
    />
  </div>

</template>

<script>
export default {
  name: 'Input',
  props: ['label', 'placeholder', 'value'],
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

