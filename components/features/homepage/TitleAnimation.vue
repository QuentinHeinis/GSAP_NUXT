<script lang="ts" setup>
import gsap from "gsap";
const loaderAnime = useState("loaderAnime");

let animation = (tl: gsap.core.Timeline, width: Ref) => {
  scrollTo({ top: 0, behavior: "instant" });
  if (!loaderAnime.value) {
    tl.to("main", { height: "100vh", overflow: "hidden", duration: 0 });
    tl.to(".title .letter", { width: 0, duration: 0 }, "<");
    tl.to(".title .images", {
      width: width.value,
      duration: 0.3,
      ease: "power1.in",
    });
    const images = gsap.utils.toArray<HTMLElement>(".title .images .image");
    for (let i = images.length - 1; i > 0; i--) {
      tl.to(images[i], { opacity: 0, delay: 0.2, duration: 0 });
    }
    tl.to(".title .images", { width: 0, delay: 0.3 });
    tl.to(".title .letter", { width: width.value }, "<");

    tl.to(".title", {
      height: 240,
      color: "var(--text-color)",
      background: "var(--background-color)",
      ease: "expo.in",
    });
    tl.to(
      "main",
      { height: "fit-content", overflow: "unset", duration: 0 },
      "<"
    );
  } else {
    tl.to(".title .letter", { width: width.value, duration: 0 });

    tl.to(".title", {
      height: 240,
      color: "var(--text-color)",
      background: "var(--background-color)",
      duration: 0,
    });
  }
};
onMounted(() => {
  let mm = gsap.matchMedia();

  const tl = gsap.timeline();
  let width = ref(50);
  mm.add("(max-width: 374px)", () => {
    width.value = 50;
    animation(tl, width);
  });
  mm.add("(min-width: 375px) and (max-width: 639px)", () => {
    width.value = 61;
    animation(tl, width);
  });

  mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
    width.value = 101.5;
    animation(tl, width);
  });

  mm.add("(min-width: 1024px)", () => {
    width.value = 162;
    animation(tl, width);
  });

  loaderAnime.value = true;
});
</script>

<template>
  <h1 class="title" :class="loaderAnime ? '-loaded' : ''">
    <span>Jan</span>
    <span class="title__center">
      <span aria-hidden="true" class="images">
        <div class="image">
          <img src="/img/image1.jpg" alt="" />
        </div>
        <div class="image">
          <img src="/img/image2.jpg" alt="" />
        </div>
        <div class="image">
          <img src="/img/image3.jpg" alt="" />
        </div>
        <div class="image">
          <img src="/img/image4.jpg" alt="" />
        </div>
        <div class="image">
          <img src="/img/image1.jpg" alt="" />
        </div>
        <div class="image">
          <img src="/img/image2.jpg" alt="" />
        </div>
        <div class="image">
          <img src="/img/image3.jpg" alt="" />
        </div>
        <div class="image">
          <img src="/img/image4.jpg" alt="" />
        </div>
      </span>
      <span class="letter">e</span>
    </span>
    <span>zia</span>
  </h1>
</template>

<style lang="scss" scoped>
.title {
  font-family: "Stalinist One", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-size: rem(40);
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: rem(80);
  background: var(--text-color);
  color: var(--background-color);

  height: 100dvh;

  @media screen and (min-width: 375px) {
    font-size: rem(48);
  }
  @media screen and (min-width: 640px) {
    font-size: rem(80);
  }

  @media screen and (min-width: 1024px) {
    font-size: rem(128);
  }

  &__center {
    position: relative;
    width: fit-content;
    overflow: hidden;
    display: flex;

    .letter {
      // transform: scaleX(0);
      display: block;
      width: 0;
      overflow: hidden;
    }
    .images {
      display: block;
      overflow: hidden;
      position: relative;
      flex: none;
      width: 0;
      height: rem(60);
      @media screen and (min-width: 375px) {
        height: rem(72);
      }
      @media screen and (min-width: 640px) {
        height: rem(120);
      }

      @media screen and (min-width: 1024px) {
        height: rem(180);
      }
      .image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
