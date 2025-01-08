<script lang="ts" setup>
import gsap from "gsap";
import Lenis from "lenis";
const loaderAnime = useState("loaderAnime", () => false);
const transitionScreen = ref(null);

onMounted(() => {
  console.log("made with ❤️ by Quentin Heinis");
  const lenis = useState<Lenis>(
    "lenis",
    () =>
      new Lenis({
        syncTouch: true,
      })
  );

  setTimeout(() => {
    loaderAnime.value = true;
  }, 500);

  function raf(time: number) {
    lenis.value.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});
const router = useRouter();
router.beforeEach((to, from, next) => {
  gsap.to(transitionScreen.value, {
    y: "0%",
    duration: 0.5,
  });
  gsap.to(transitionScreen.value, {
    y: "-100%",
    duration: 0.5,
    delay: 0.8,
    onStart: () => next(),
  });
  gsap.to(transitionScreen.value, {
    y: "100%",
    duration: 0,
    delay: 1.3,
  });
});
</script>
<template>
  <div>
    <div ref="transitionScreen" class="transition-screen"></div>
    <MyHeader />
    <NuxtPage />
  </div>
</template>
<style scoped>
.transition-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  transform: translate(0, 100%);
  background-color: var(--text-color);
  color: var(--background-color);
  z-index: 1000;
}
</style>
