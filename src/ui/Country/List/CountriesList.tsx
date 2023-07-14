"use client";

import Link from "next/link";
import { type FC, memo, useState } from "react";
import { type CountryDto, CountryRegion } from "~/dto/Country.dto";
import CountryCard from "~/ui/Country/Card/CountryCard";
import CountryFilterAndSearch from "~/ui/Country/FilterAndSearch/CountryFilterAndSearch";
import Loading from "~/ui/Loading/Loading";
import filterCountriesByRegion from "~/utils/crud/filterCountriesByRegion";
import searchCountriesByName from "~/utils/crud/searchCountriesByName";

type Props = {
  countries: CountryDto[];
};

const CountriesList: FC<Props> = props => {
  const [countries, setCountries] = useState<CountryDto[]>(props.countries);
  const [status, setStatus] = useState<"SUCCESS" | "LOADING" | "ERROR">("SUCCESS");
  const [errorMessage, setErrorMessage] = useState("");

  const onSearchByName = async (query: string) => {
    try {
      setStatus("LOADING");

      if (query) {
        const response = await searchCountriesByName(query);
        if (response.ok) {
          const data: CountryDto[] = await response.json();
          setCountries(data);
        } else {
          const error = await response.json();
          throw new Error(error.message);
        }
      } else {
        setCountries(props.countries);
      }

      setStatus("SUCCESS");
    } catch (error) {
      setStatus("ERROR");
      setErrorMessage((error as { status: number; message: string }).message);
    }
  };

  const onFilterRegion = async (region: CountryRegion) => {
    try {
      setStatus("LOADING");
      const response = await filterCountriesByRegion(region);

      if (response.ok) {
        const data: CountryDto[] = await response.json();
        setCountries(data);
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }

      setStatus("SUCCESS");
    } catch (error) {
      setStatus("ERROR");
      setErrorMessage((error as { status: number; message: string }).message);
    }
  };

  const render = {
    LOADING: () => <Loading />,
    ERROR: () => (
      <div className="flex flex-col items-center justify-center p-16 gap-2">
        <div>{errorMessage}</div>
        <div>Please try again...</div>
      </div>
    ),
    SUCCESS: () => (
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {countries.map(country => (
          <li key={country.name.common} className="flex-1 w-full">
            <Link href={`/country/${country.cca3}`}>
              <CountryCard
                name={country.name.common}
                region={country.region}
                population={country.population}
                capital={country.capital}
                flag={{ src: country.flags.svg, alt: country.flags.alt }}
              />
            </Link>
          </li>
        ))}
      </ul>
    ),
  };

  return (
    <main className="flex flex-col gap-14 px-4">
      <CountryFilterAndSearch onSearchByName={onSearchByName} onFilterRegion={onFilterRegion} />
      <div className="w-full">{render[status]()}</div>
    </main>
  );
};

export default memo(CountriesList);
