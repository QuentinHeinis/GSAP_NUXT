import type { Meta, StoryObj } from "@nuxtjs/storybook";
import MyButton from "./MyButton.vue";

const meta: Meta<typeof MyButton> = {
  title: "Feature/Shop/MyBtn",
  component: MyButton,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "third", "destructive"],
      control: { type: "select" },
    },
    inverted: {
      control: { type: "boolean" },
    },
    rounded: {
      control: { type: "boolean" },
    },
    text: {
      control: { type: "text" },
    },
    text2: {
      control: { type: "text" },
    },
    iconOnly: {
      control: { type: "boolean" },
    },
    icon: {
      options: ["trash", "next", "prev", "plus", "moins", null],
      control: { type: "select" },
    },
    iconPosition: {
      options: ["before", "after"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "regular", "big"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MyButton>;

export const Default: Story = {
  args: {
    variant: "primary",
    inverted: false,
    rounded: true,
    icon: null,
    iconPosition: "after",
    text: "Ajouter",
    text2: "au panier",
    size: "regular",
  },
};
