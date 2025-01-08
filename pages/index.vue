<script lang="ts" setup>
import type Lenis from "lenis";

const lenis = useState<Lenis>("lenis");
onMounted(() => {
  setTimeout(() => {
    lenis.value.options.infinite = true;
  }, 0);
});

onUnmounted(() => {
  lenis.value.options.infinite = false;
});
</script>

<template>
  <main>
    <HomeHero />
    <MyBestSellings />
  </main>
  <MyFooter />
  <HomeHero :playAnimation="false" />
</template>

<style lang="scss" scoped></style>
