<template>
  <div class="card">
    <div class="title">
      <slot name="title" />
    </div>

    <div class="parent">
      <slot name="parent" />
    </div>

    <div class="description">
      <slot name="description" />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import url('./styles.css');
</style>