<template>
  <div class="form-group">
    <label v-if="label">{{ label }}:</label>
    <select
            class="form-control"
            v-bind:placeholder="placeholder"
            :value="value"
            @input="handleChange"
    >
      <option v-for="item of items" :key="bindValue ? item[bindValue] : item" :value="bindValue ? item[bindValue] : item">
        {{ bindLabel ? (item[bindLabel] + (bindLabelSecond ? ( ' ' + item[bindLabelSecond]) : '')) : item }}
      </option>
    </select>
  </div>

</template>

<script>
export default {
  name: 'OwnSelect',
  props: ['label', 'placeholder', 'value', 'items', 'bindValue', 'bindLabel', 'bindLabelSecond'],
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

