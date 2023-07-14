import CountriesList from "~/ui/Country/List/CountriesList";
import getCountries from "~/utils/crud/getCountries";

export default async function Home() {
  const countries = await getCountries();

  return <CountriesList countries={countries} />;
}
