import type { Meta, StoryObj } from "@storybook/react";
import CountryDetail from "~/ui/Country/Detail/CountryDetail";

const meta: Meta<typeof CountryDetail> = {
  title: "UI/Country Detail",
  component: CountryDetail,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CountryDetail>;

export const Primary: Story = {
  args: {
    flag: { src: "https://flagcdn.com/de.svg", alt: "germany" },
    name: "Germany",
    population: 81770900,
    region: "Europe",
    subregion: "Western Europe",
    capital: ["Berlin"],
    borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
    languages: { deu: "German" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
  },
  decorators: [
    Story => (
      <div className="container mx-auto p-8">
        <Story />
      </div>
    ),
  ],
};
