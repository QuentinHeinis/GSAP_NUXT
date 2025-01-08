<script lang="ts" setup></script>

<template>
  <div class="s-banner">
    <div class="s-banner__text">
      <p class="s-banner__text-latest">Voir ma dernière création</p>
      <div>
        <h2>Attrape Coeur</h2>
        <MyButton text="Voir" text2="le produit" />
      </div>
    </div>
    <div class="s-banner__img">
      <img src="/img/product/product1.jpg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.s-banner {
  width: calc(100vw - rem(48));
  min-height: 700px;
  background: var(--accent-color);
  margin-inline: auto;
  // margin-top: rem(80);
  padding: rem(48);
  border-radius: rem(32);
  display: flex;
  justify-content: space-between;
  font-family: "Stalinist One", sans-serif;

  flex-direction: column;
  gap: rem(48);
  @include media(sm) {
    height: 70vh;
    gap: unset;
    width: 80vw;
    flex-direction: row;
  }
  &__text {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: rem(32);
    @include media(sm) {
      align-items: unset;
      justify-content: space-around;
      gap: rem(0);
      max-width: 55%;
    }
    &-latest {
      font-size: rem(28);
      text-align: center;
      text-transform: uppercase;
      @include media(sm) {
        text-align: start;
      }
      @include media(md) {
        font-size: rem(32);
      }
      @include media(lg) {
        font-size: rem(38);
      }
      @include media(xl) {
        font-size: rem(42);
      }
    }
    h2 {
      text-align: center;
      margin-bottom: rem(20);
      @include media(sm) {
        text-align: start;
        margin-left: rem(16);
      }
    }
  }
  &__img {
    width: 100%;
    display: flex;
    border-radius: rem(16);
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    @include media(sm) {
      width: 40%;
    }
  }
}
</style>
