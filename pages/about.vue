<script lang="ts" setup></script>

<template>
  <main>
    <HomeHero />
    <div class="grid">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <HomeHero :playAnimation="false" />

  </main>
</template>

<style lang="scss" scoped>
main {
  height: 300vh;
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: rem(20);
    justify-content: center;
    .item {
      height: 40vh;
      width: 40%;
      background: rgb(255, 255, 255);
    }
  }
}
</style>
