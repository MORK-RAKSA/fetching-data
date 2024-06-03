import Button from "@/app/components/atoms/Button";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "cyan", "danger", "link", "me"],
    },
    text: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "bold", "simiBold"],
    },
    onClick: { action: "clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    color: "primary",
    label: "Click Me",
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    label: "Click Me",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};

export const Cyan: Story = {
  args: {
    color: "cyan",
    label: "Click Me",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    label: "Click Me",
  },
};

export const Link: Story = {
  args: {
    color: "link",
    label: "Click Me",
  },
};

export const Me: Story = {
  args: {
    color: "me",
    label: "Click Me",
  },
};

// ---------------------------------------------------------------- text

export const SM: Story = {
  args: {
    text: "sm",
  },
};

export const Md: Story = {
  args: {
    text: "md",
  },
};

export const Lg: Story = {
  args: {
    text: "lg",
  },
};

export const Xl: Story = {
  args: {
    text: "xl",
  },
};

export const _2Xl: Story = {
  args: {
    text: "2xl",
  },
};
