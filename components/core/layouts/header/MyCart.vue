<script lang="ts" setup>
const props = defineProps({
  cartOpen: Boolean,
  closeCart: {
    type: Function,
    required: true,
  },
});
const handleClose = () => {
  props.closeCart();
};

</script>

<template>
  <div class="cart" :class="cartOpen && '-open'">
    <button @click="handleClose()" class="cart__close">close</button>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 375px;
  height: 100vh;
  transition: all 0.3s ease;
  translate: 100% 0;
  background: var(--background-color);
  &.-open {
    translate: 0 0;
  }
}
</style>
