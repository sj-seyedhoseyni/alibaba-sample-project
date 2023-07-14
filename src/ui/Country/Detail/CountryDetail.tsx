import Image from "next/image";
import { type FC, memo, useMemo } from "react";
import type { CountryBorders, CountryCapital, CountryCurrencies, CountryLanguages } from "~/dto/Country.dto";
import CountryBorderCountries from "~/ui/Country/BorderCountries/CountryBorderCountries";
import CountryProperty from "~/ui/Country/Property/CountryProperty";

type Props = {
  flag: { src: string; alt: string };
  name: string;
  population: number;
  region: string;
  subregion: string;
  capital: CountryCapital;
  currencies: CountryCurrencies;
  languages: CountryLanguages;
  borders: CountryBorders;
};

const CountryDetail: FC<Props> = props => {
  const currencies = useMemo(() => {
    const arrayOfCurrencies: string[] = [];
    for (const [, value] of Object.entries(props.currencies)) {
      arrayOfCurrencies.push(value.name);
    }
    return arrayOfCurrencies.join(", ");
  }, [props.currencies]);

  const languages = useMemo(() => {
    const arrayOfLanguages: string[] = [];
    for (const [, value] of Object.entries(props.languages)) {
      arrayOfLanguages.push(value);
    }
    return arrayOfLanguages.join(", ");
  }, [props.currencies]);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-24">
      <div className="flex-1 relative">
        <Image
          src={props.flag.src}
          alt={props.flag.alt}
          width={800}
          height={600}
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>

      <div className="flex-1 px-6 pt-6 pb-10 flex flex-col gap-8">
        <div className="text-2xl font-bold">{props.name}</div>

        <div className="flex flex-col lg:flex-row justify-around">
          <div className="flex-1 flex flex-col gap-2">
            <CountryProperty label="Population" value={Intl.NumberFormat().format(props.population)} />
            <CountryProperty label="Region" value={props.region} />
            <CountryProperty label="Sub Region" value={props.subregion} />
            <CountryProperty label="Capital" value={props.capital.join(", ")} />
          </div>

          <div className="flex-1 flex flex-col gap-2 mt-2 lg:mt-0">
            <CountryProperty label="Currencies" value={currencies} />
            <CountryProperty label="Languages" value={languages} />
          </div>
        </div>

        <div className="mt-4">
          <CountryBorderCountries borders={props.borders} />
        </div>
      </div>
    </div>
  );
};

export default memo(CountryDetail);
