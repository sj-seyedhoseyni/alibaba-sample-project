import type { Meta, StoryObj } from "@storybook/react";
import CountryProperty from "~/ui/Country/Property/CountryProperty";

const meta: Meta<typeof CountryProperty> = {
  title: "UI/Country Property",
  component: CountryProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CountryProperty>;

export const Primary: Story = {
  args: {
    label: "Region",
    value: "Europe",
  },
  decorators: [
    Story => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};
