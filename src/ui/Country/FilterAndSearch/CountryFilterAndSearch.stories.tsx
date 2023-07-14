import { Meta, StoryObj } from "@storybook/react";
import CountryFilterAndSearch from "~/ui/Country/FilterAndSearch/CountryFilterAndSearch";

const meta: Meta<typeof CountryFilterAndSearch> = {
  title: "UI/Country Filter & Search",
  component: CountryFilterAndSearch,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CountryFilterAndSearch>;

export const Primary: Story = {};
