export type CountryFlags = { png: string; svg: string; alt: string };
export type CountryName = { official: string; common: string };
export type CountryCurrencies = Record<string, { name: string; symbol: string }>;
export type CountryCapital = string[];
export type CountryLanguages = Record<string, string>;
export type CountryBorders = string[];

export enum CountryRegion {
  Africa = "Africa",
  America = "America",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export interface CountryDto {
  flags: CountryFlags;
  name: CountryName;
  currencies: CountryCurrencies;
  capital: CountryCapital;
  region: CountryRegion;
  subregion: string;
  languages: CountryLanguages;
  borders: CountryBorders;
  population: number;
  cca3: string;
}
