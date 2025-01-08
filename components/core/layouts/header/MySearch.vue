<script lang="ts" setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  searchOpen: Boolean,
  closeSearch: {
    type: Function,
    required: true,
  },
});
const router = useRouter();
const handleClose = () => {
  props.closeSearch();
};

const search = defineModel<string>();

const hasFocus = ref<boolean>(false);
const onEnter = async () => {
  if (hasFocus.value && search.value) {
    handleClose();
    await navigateTo(`/produits/recherche/${search.value}`);
    // router.push();
  }
};
</script>

<template>
  <div class="search" :class="searchOpen && '-open'">
    <label for="" class="search__input">
      <input
        type="text"
        placeholder="Rechercher"
        id="recherche"
        @focus="hasFocus = true"
        @blur="hasFocus = false"
        @keyup.enter="onEnter"
        v-model="search"
      />

      <NuxtLink
        v-if="search"
        :to="`/produits/recherche/${search}`"
        class="search__icon"
        @click="
          () => {
            handleClose();
            search = '';
          }
        "
      >
        <MagnifyingGlassIcon />
      </NuxtLink>
    </label>
    <button @click="handleClose()" class="search__close">close</button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100dvh;
  transition: all 0.3s ease;
  translate: 0 -100%;
  background: var(--background-color);
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
  }

  &__input {
    position: absolute;
    font-family: "Stalinist One", sans-serif;

    left: 50%;
    translate: -50%;
    top: 20%;
    width: 80%;
    max-width: $md;
    display: flex;
    align-items: center;
    input {
      height: 60px;
      width: 100%;
      background: none;
      border: none;
      color: var(--text-color);
      border-bottom: 2px var(--text-color) solid;
      transition: all 0.3s ease;
      padding-left: rem(16);
      padding-right: rem(56);
      &:focus {
        border-bottom-width: 4px;
        outline: 0;
      }
    }
  }
  &__icon {
    position: absolute;
    display: flex;
    height: 32px;
    width: 32px;
    right: rem(16);
    border-radius: 50%;
    appearance: none;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-color);
  }
}
</style>
