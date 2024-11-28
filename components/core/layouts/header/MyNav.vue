<script lang="ts" setup>
import gsap from "gsap";
const props = defineProps({
  menuOpen: Boolean,
  closeMenu: {
    type: Function,
    required: true,
  },
});

const tl = gsap.timeline();
const mm = gsap.matchMedia();
const handleClose = () => {
  mm.add("(max-width:768px)", () => {
    tl.reverse();
    setTimeout(() => {
      props.closeMenu();
    }, 1000);
  });
};

watch(
  () => props.menuOpen,
  () => {
    if (props.menuOpen) {
      mm.add("(max-width:768px)", () => {
        setTimeout(() => {
          tl.play();
        }, 300);
      });
    }
  }
);

onMounted(() => {
  tl.pause();
  const lines = gsap.utils.toArray(".nav .nav__line");
  tl.to(lines, { width: "100%", stagger: 0.2 });
  const links = gsap.utils.toArray(".nav .nav__link");
  tl.to(links, { y: 0, stagger: 0.2 }, "<+=.2");
  mm.add("(min-width:768px)", () => {
    gsap.to(links, { y: 0, duration: 0 });
  });
});
</script>

<template>
  <nav class="nav" :class="menuOpen && '-open'">
    <p class="nav__indication">(Navigation)</p>
    <span aria-hidden class="nav__line"></span>
    <div class="nav__link-wrapper">
      <NuxtLink to="/" class="nav__link" @click="handleClose()"
        ><span>Home</span></NuxtLink
      >
    </div>
    <span aria-hidden class="nav__line"></span>
    <div class="nav__link-wrapper">
      <NuxtLink to="/about" class="nav__link" @click="handleClose()"
        ><span>About</span></NuxtLink
      >
    </div>
    <span aria-hidden class="nav__line"></span>
    <div class="nav__link-wrapper">
      <NuxtLink to="/projects" class="nav__link" @click="handleClose()"
        ><span>Projects</span></NuxtLink
      >
    </div>
    <span aria-hidden class="nav__line"></span>
    <button @click="handleClose()" class="nav__close">close</button>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  translate: 0 -100%;
  background: var(--background-color);
  transition: all 0.5s ease-in-out;
  padding-inline: rem(24);
  height:100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  counter-reset: css-counter 0;
  @include media(md) {
    position: static;
    background: transparent;
    height:fit-content;
    translate: 0 0;
    flex-direction: row;
    gap: rem(16);
  }
  &.-open {
    translate: 0 0;
  }

  &__close {
    position: absolute;
    top: 40px;
    translate: 0 -50%;
    right: 50px;
    color: var(--text-color);
    text-decoration: none;
    font-family: "Stalinist One", sans-serif;
    text-transform: uppercase;
    appearance: none;
    border: none;
    background: transparent;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    @include media(md) {
      display: none;
    }
  }
  &__indication {
    width: 100%;
    padding-bottom: rem(4);
    color: var(--text-color);
    opacity: 0.7;
    @include media(md) {
      display: none;
    }
  }

  &__line {
    display: flex;
    width: 0%;
    margin-right: auto;
    height: 1px;
    background-color: var(--text-color);
    @include media(md) {
      display: none;
    }
  }
  &__link-wrapper {
    width: 100%;
    overflow: hidden;
    @include media(md) {
      overflow: visible;
    }
  }
  &__link {
    color: var(--text-color);
    display: flex;
    height: rem(80);
    width: 100%;
    text-decoration: none;
    justify-content: space-between;
    align-items: center;
    font-family: "Stalinist One", sans-serif;
    text-transform: uppercase;
    font-size: rem(24);

    transform: translate(0, 100%);

    counter-increment: css-counter 1;
    --number: counter(css-counter, decimal-leading-zero);
    &::after {
      content: var(--number);
    }

    &:not(.router-link-active) {
      opacity: 0.6;
      transition: opacity 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
    }

    @include media(md) {
      --number: counter(css-counter) ".";
      transform: translate(0, 0);
      font-size: rem(16);
      span {
        order: 1;
      }
    }
  }
}
</style>
