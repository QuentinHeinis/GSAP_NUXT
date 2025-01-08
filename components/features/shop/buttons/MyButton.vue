<script lang="ts" setup>
import {
  TrashIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/vue/24/outline";

interface Props {
  variant?: "primary" | "secondary" | "third" | "destructive";
  inverted?: boolean;
  rounded?: boolean;
  text?: string;
  text2?: string;
  iconOnly?: boolean;
  icon?: "trash" | "next" | "prev" | "plus" | "moins" | null;
  iconPosition?: "before" | "after";
  size?: "small" | "regular" | "big";
}
const {
  variant = "primary",
  inverted = false,
  rounded = true,
  icon = null,
  iconPosition = "after",
  text = "Ajouter",
  text2 = "au panier",
  size = "regular",
  ...props
} = defineProps<Props>();

const className = computed(() => [
  variant !== "primary" && `-${variant}`,
  size !== "regular" && `-${size}`,
  inverted !== false && "-inverted",
  iconPosition === "before" ? "-iconBefore" : "",
  props.iconOnly !== false && "-icon",
  rounded === false && "-squared",
]);

const iconComponent = () => {
  switch (icon) {
    case "trash":
      return TrashIcon;
    case "prev":
      return ArrowLeftIcon;
    case "next":
      return ArrowRightIcon;
    case "plus":
      return PlusIcon;
    case "moins":
      return MinusIcon;
    case null:
      return "";
  }
};
</script>

<template>
  <button class="c-btn" :class="className">
    <div class="c-btn__text" v-if="text && !iconOnly">
      {{ text }} <span v-if="text2"> {{ text2 }}</span>
    </div>
    <div v-if="icon" class="c-btn__icon">
      <component :is="iconComponent()" />
    </div>
  </button>
</template>

<style lang="scss" scoped>
.c-btn {
  --px: 16px;
  --py: 32px;
  --icon: calc(var(--px) + 8px);
  --font-size: 16px;

  $this: &;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  appearance: none;
  border: none;
  background: var(--text-color);
  color: var(--background-color);
  padding: var(--px) var(--py);
  border-radius: rem(60);
  width: 100%;
  max-width: rem(350);
  gap: rem(20);
  font-size: var(--font-size);
  &__text {
    span {
      display: none;
    }
    @include media(sm) {
      span {
        display: inline-block;
      }
    }
  }

  // specials style
  &.-inverted {
    color: var(--text-color);
    background: var(--background-color);
  }
  &.-squared {
    border-radius: rem(8);
  }

  // Icons style
  &__icon {
    flex: none;
    display: flex;
    width: var(--icon);
    height: var(--icon);
    svg {
      width: var(--icon);
    }
  }
  &.-icon {
    --px: 16px;
    --py: 16px;
    width: fit-content;
    height: calc(var(--icon) + 2 * var(--px));
  }
  &.-iconBefore {
    #{$this}__icon {
      order: 0;
    }
    #{$this}__text {
      order: 1;
    }
  }

  // Sizes style
  &.-small {
    --px: 12px;
    --py: 16px;
    --font-size: 14px;
    &.-icon {
      --px: 12px;
      --py: 12px;
    }
  }
  &.-big {
    --px: 20px;
    --py: 40px;
    --font-size: 20px;
    &.-icon {
      --px: 20px;
      --py: 20px;
    }
  }
}
</style>
