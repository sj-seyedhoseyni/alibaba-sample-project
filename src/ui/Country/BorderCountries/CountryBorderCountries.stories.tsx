import type { Meta, StoryObj } from "@storybook/react";
import CountryBorderCountries from "~/ui/Country/BorderCountries/CountryBorderCountries";

const meta: Meta<typeof CountryBorderCountries> = {
  title: "UI/Country Border Countries",
  component: CountryBorderCountries,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CountryBorderCountries>;

export const Primary: Story = {
  args: {
    borders: ["France", "Germany", "Netherlands"],
  },
  decorators: [
    Story => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};
