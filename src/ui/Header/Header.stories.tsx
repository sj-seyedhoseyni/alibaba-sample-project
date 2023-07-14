import type { Meta, StoryObj } from "@storybook/react";
import Header from "~/ui/Header/Header";

const meta: Meta<typeof Header> = {
  title: "UI/App Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
