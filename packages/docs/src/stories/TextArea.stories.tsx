import { Box, Text, TextArea, TextAreaProps, TextProps } from "@danilo-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/TextArea",
  component: TextArea,

  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut impedit, dolor ut enim quia. Recusandae sit qui tenetur, commodi a culpa ipsa minima impedit nemo quaerat ducimus ab aliquid.",
  },

  decorators:[
    (Story)=>{
      return(
        <Box>
          <Text size='sm'>Username:</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextProps>;

export const Primary: StoryObj<TextAreaProps> = {};



