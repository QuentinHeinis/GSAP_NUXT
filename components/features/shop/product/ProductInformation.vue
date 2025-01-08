<script lang="ts" setup></script>

<template>
  <section class="info">
    <ProductImage />
    <ProductText
      :variants="[
        {
          type: [
            { name: 'couleur', value: 'bleu', importance: 4 },
            { name: 'taille', value: 'xs', importance: 1 },
          ],
          name: 'variant1',
          price: 1,
        },
        {
          type: [
            { name: 'couleur', value: 'rouge', importance: 4 },
            { name: 'taille', value: 's', importance: 1 },
            { name: 'test', value: 's', importance: 1 },
          ],
          name: 'variant2',
          price: 2,
        },
        {
          type: [
            { name: 'couleur', value: 'rouge', importance: 4 },
            { name: 'taille', value: 'm', importance: 1 },
          ],
          name: 'variant3',
          price: 3,
        },
        {
          type: [
            { name: 'couleur', value: 'rouge', importance: 4 },
            { name: 'taille', value: 'l', importance: 1 },
          ],
          name: 'variant4',
          price: 4,
        },
        {
          type: [
            { name: 'couleur', value: 'rouge', importance: 4 },
            { name: 'taille', value: 'xl', importance: 1 },
          ],
          name: 'variant5',
          price: 5,
        },
      ]"
      :price="10"
    />
  </section>
</template>

<style lang="scss" scoped>
.info {
  display: flex;
}
</style>
