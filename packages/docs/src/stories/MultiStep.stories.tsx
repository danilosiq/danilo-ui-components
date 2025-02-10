
import { Box, MultiStep, MultiStepProps } from "@danilo-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Multi Step",
  component: MultiStep,
  decorators: [
    (Story) => {
      return (
        <Box>
          {Story()} 

        </Box>
      );
    },
  ],

  args:{
    maxSteps:4,
    currentStep:1
  }

} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
  args:{
    maxSteps:4,
    currentStep:4
  }
};

export const half: StoryObj<MultiStepProps> = {
  args:{
    maxSteps:4,
    currentStep:2
  }
};



