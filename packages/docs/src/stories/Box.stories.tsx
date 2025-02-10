import { Box, BoxProps } from "@danilo-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Surfaces/box",
  component: Box,

  args: {
    children:(
        <>
        <p>testando</p>
        </>
    )
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {

};


