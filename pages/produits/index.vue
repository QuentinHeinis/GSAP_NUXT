<script lang="ts" setup></script>

<template>
  <main>
    <!-- <div class="flex">
      <MyButton icon="plus" size="small" />
      <MyButton :rounded="false" size="small" />
      <MyButton :icon-only="true" icon="plus" size="small" />
      <MyButton :icon-only="true" :rounded="false" icon="trash" size="small" />
    </div>
    <div class="flex">
      <MyButton icon="plus" />
      <MyButton :rounded="false" />
      <MyButton :icon-only="true" icon="plus" />
      <MyButton :icon-only="true" :rounded="false" icon="trash" />
    </div>
    <div class="flex">
      <MyButton icon="plus" size="big" />
      <MyButton :rounded="false" size="big" />
      <MyButton :icon-only="true" icon="plus" size="big" />
      <MyButton :icon-only="true" :rounded="false" icon="trash" size="big" />
    </div> -->
    <div class="flex">
      <MyCard />
    </div>
  </main>
  <MyFooter />
</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: rem(20);
    width: 80vw;
  }
}
</style>
