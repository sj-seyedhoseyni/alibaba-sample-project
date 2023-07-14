import { type CountryDto } from "~/dto/Country.dto";

export default async function getCountries() {
  const options = { method: "GET", next: { revalidate: 30 } };
  const res = await fetch(`${process.env.apiAddress}/all?fields=name,region,capital,population,flags,cca3`, options);

  return (await res.json()) as CountryDto[];
}
