import type { Meta, StoryObj } from "@storybook/react";
import CountryCard from "~/ui/Country/Card/CountryCard";

const meta: Meta<typeof CountryCard> = {
  title: "UI/Country Card",
  component: CountryCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CountryCard>;

export const Primary: Story = {
  args: {
    flag: { src: "https://flagcdn.com/ad.svg", alt: "germany" },
    name: "Germany",
    population: 81770900,
    region: "Europe",
    capital: ["Berlin"],
  },
  decorators: [
    Story => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};
