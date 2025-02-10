import { Text, TextProps } from "@danilo-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut impedit, dolor ut enim quia. Recusandae sit qui tenetur, commodi a culpa ipsa minima impedit nemo quaerat ducimus ab aliquid.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
    args:{
        children:'Strong text',
        as:'strong'
    }
};

