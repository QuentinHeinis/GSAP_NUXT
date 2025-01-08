<script lang="ts" setup>
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";
import type Lenis from "lenis";

const lenis = useState<Lenis>("lenis");

const scrollPercentage = ref<number>(0);
const isLightColors = ref<boolean>();

const menuOpen = ref<boolean>(false);
const cartOpen = ref<boolean>(false);
const searchOpen = ref<boolean>(false);

const toggleColorTheme = () => {
  isLightColors.value = !isLightColors.value;
  isLightColors.value
    ? localStorage.setItem("theme", "light")
    : localStorage.setItem("theme", "dark");
};
const scrollTop = () => {
  scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  isLightColors.value = localStorage.getItem("theme") == "light" ? true : false;

  setTimeout(() => {
    lenis.value.on("scroll", (e) => {
      let scrollPosition = e.scroll;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      scrollPercentage.value = Math.floor(
        (scrollPosition / (documentHeight - windowHeight )) * 100
      );
    });
  }, 0);
});
</script>

<template>
  <header class="header">
    <div class="header__section">
      <NuxtLink to="/" class="header__home" @click="scrollTop()"
        >Suihira</NuxtLink
      >
      <p v-if="scrollPercentage" class="header__scrollpercent">
        {{ scrollPercentage < 10 ? "0" + scrollPercentage : scrollPercentage }}%
      </p>
      <p v-if="!scrollPercentage" class="header__scrollpercent">00%</p>
    </div>
    <div class="header__section">
      <MyNav :menuOpen :close-menu="() => (menuOpen = false)" />
      <MyCart :cartOpen :close-cart="() => (cartOpen = false)" />
      <MySearch :searchOpen :close-search="() => (searchOpen = false)" />
      <button @click="menuOpen = true" class="header__menu">Menu</button>
      <button class="header__cart" @click="cartOpen = true">
        <ShoppingCartIcon />
      </button>
      <button class="header__cart" @click="searchOpen = true">
        <MagnifyingGlassIcon />
      </button>
      <button
        class="toggleColor"
        @click="toggleColorTheme()"
        :data-color-theme="isLightColors ? 'light' : 'dark'"
      ></button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  height: rem(80);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 1000;
  padding-inline: rem(24);
  max-width: 1920px;
  left: 50%;
  translate: -50%;
  &__section {
    display: flex;
    align-items: center;
    gap: rem(24);
    &:nth-child(2) {
      gap: rem(12);
    }
  }
  &__menu {
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
  &__home {
    color: var(--text-color);
    text-decoration: none;
    font-family: "Stalinist One", sans-serif;
    text-transform: uppercase;
  }
  &__cart {
    display: flex;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    appearance: none;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-color);
  }
  &__scrollpercent {
    display: none;
    @include media(sm) {
      display: block;
    }
  }

  .toggleColor {
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    appearance: none;
    border: none;
    background: var(--text-color);
    display: none;
    @include media(xs) {
      display: block;
    }
  }
}
</style>
