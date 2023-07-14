import { CountryRegion } from "~/dto/Country.dto";

export default async function filterCountriesByRegion(region: CountryRegion) {
  const options = { method: "GET", next: { revalidate: 30 } };
  return await fetch(`${process.env.apiAddress}/region/${region}?fields=name,region,capital,population,flags,cca3`, options);
}
