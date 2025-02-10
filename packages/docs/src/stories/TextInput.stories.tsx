import { Box, Text, TextInput, TextInputProps } from "@danilo-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/TextInput",
  component: TextInput,

  args: {},
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
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args:{
    placeholder:'Placeholder'
  }
};


export const WithPrefix: StoryObj<TextInputProps> = {

  args:{
    prefix:'prefix:'
  }
};


export const Disabled: StoryObj<TextInputProps> = {
  args:{
  
      disabled:true
  }
};


