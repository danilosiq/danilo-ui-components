import { Box, Checkbox, CheckboxProps, Text } from "@danilo-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,

  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut impedit, dolor ut enim quia. Recusandae sit qui tenetur, commodi a culpa ipsa minima impedit nemo quaerat ducimus ab aliquid.",
  },

  decorators: [
    (Story) => {
      return (
        <Box>
          {Story()} 
          <Text size="sm">Accept the terms</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
