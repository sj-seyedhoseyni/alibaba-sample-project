import { type CountryDto } from "~/dto/Country.dto";

export default async function getCountry(code: string) {
  const options = { method: "GET", next: { revalidate: 30 } };
  const res = await fetch(
    `${process.env.apiAddress}/alpha/${code}?fields=name,region,subregion,capital,population,currencies,languages,borders,flags`,
    options
  );

  return (await res.json()) as CountryDto;
}
