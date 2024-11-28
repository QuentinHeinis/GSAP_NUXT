<script lang="ts" setup></script>

<template>
  <p class="notitle">
    <span>Jan</span>
    <span class="notitle__center">
      <span class="letter">e</span>
    </span>
    <span>zia</span>
  </p>
</template>

<style lang="scss" scoped>
.notitle {
  font-family: "Stalinist One", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-size: rem(40);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: rem(80);
  color: var(--text-color);
  background: var(--background-color);

  height: 240px;

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
      display: block;
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
