import { Avatar, AvatarProps } from "@danilo-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src:'https://avatars.githubusercontent.com/u/72088614?v=4',
    alt:'danilo'
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {

};

export const WithFallBack: StoryObj<AvatarProps> = {
    args: {
        src:undefined,
      },
};


