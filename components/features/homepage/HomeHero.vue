<script lang="ts" setup>
defineProps({
  playAnimation: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <section
    class="hero"
    :class="playAnimation ? '' : 'maxHeight'"
    :aria-hidden="!playAnimation"
  >
    <TitleAnimation v-if="playAnimation" />
    <TitleNoAnimation v-if="!playAnimation" />
    <div class="grid">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  overflow: hidden;
  &.maxHeight {
    max-height: 100vh;
  }
}
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: rem(20);
  justify-content: center;
  .item {
    height: 50vh;
    width: 40%;
    background: black;
  }
}
</style>
