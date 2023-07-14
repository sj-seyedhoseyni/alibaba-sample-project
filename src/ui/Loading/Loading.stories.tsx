import type { Meta, StoryObj } from "@storybook/react";
import Loading from "~/ui/Loading/Loading";

const meta: Meta<typeof Loading> = {
  title: "UI/Loading",
  component: Loading,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Primary: Story = {
  decorators: [
    Story => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};
