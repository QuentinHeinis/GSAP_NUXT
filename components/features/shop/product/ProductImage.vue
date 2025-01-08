<script lang="ts" setup>
const images = [
  "/img/product/product1.jpg",
  "/img/image1.jpg",
  "/img/image2.jpg",
  "/img/image3.jpg",
  "/img/image4.jpg",
];
const selectedImg = ref(0);
</script>

<template>
  <div class="images">
    <div class="images__selected">
      <img :src="images[selectedImg]" alt="" />
    </div>
    <div class="images__others">
      <div
        v-for="(img, i) in images"
        :key="i"
        @click="selectedImg = i"
        class="images__small"
        :style="i === selectedImg && 'display:none'"
      >
        <img :src="img" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.images {
  padding-inline: rem(24);
  &__selected {
    max-width: 100%;
    height: rem(375);
    width: rem(375);
    border-radius: rem(16);
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  &__others {
    display: flex;
    width: rem(375);
    max-width: 100%;
    justify-content: space-around;
    margin-top: rem(12);
  }
  &__small {
    height: rem(75);
    width: rem(75);
    border-radius: rem(8);
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
