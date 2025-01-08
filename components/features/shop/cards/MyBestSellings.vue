<script lang="ts" setup></script>

<template>
  <section class="s-bestsellings">
    <h2>Nos Meilleurs ventes</h2>
    <div class="s-bestsellings__cards">
      <MyCard />
      <MyCard />
      <MyCard />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.s-bestsellings {
  margin-top: rem(56);
  margin-bottom: rem(56);
  padding-inline: rem(24);
  h2 {
    text-align: center;
    font-family: "Stalinist One", sans-serif;
  }
  &__cards{
    display: flex;
    gap: rem(32);
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: rem(48);
    max-width: 80vw;
    margin-inline: auto;
  }
}
</style>
