<script lang="ts" setup>
interface Props {}
</script>

<template>
  <div class="c-product">
    <NuxtLink to="/produits/test">
      <div class="c-product__img">
        <img src="/img/product/product1.jpg" alt="" />
      </div>
      <div class="c-product__text">
        <p class="c-product__name">produit 1</p>
        <p class="c-product__price">50.00€ <span>45.00€</span></p>
      </div>
    </NuxtLink>
    <MyButton :rounded="false" />
  </div>
</template>

<style lang="scss" scoped>
.c-product {
  max-width: 350px;
  width: 100%;
  a {
    color: var(--text-color);
    text-decoration: none;
  }
  &__name {
    font-family: "Stalinist One", sans-serif;
  }
  &__text {
    display: flex;
    justify-content: space-between;
    margin: rem(24) rem(8);
  }

  &__img {
    border-radius: rem(16);
    overflow: hidden;
    height: rem(350);
    display: block;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease;
      &:hover {
        scale: 1.2;
      }
    }
  }
}
</style>
