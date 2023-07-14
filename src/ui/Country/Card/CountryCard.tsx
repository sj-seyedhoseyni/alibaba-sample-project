import Image from "next/image";
import { type FC, memo } from "react";
import CountryProperty from "~/ui/Country/Property/CountryProperty";

type Props = {
  flag: { src: string; alt: string };
  name: string;
  population: number;
  region: string;
  capital: string[];
};

const CountryCard: FC<Props> = props => {
  return (
    <div className="bg-app-card shadow-2xl rounded-md w-full">
      <div className="relative h-52 bg-white overflow-hidden">
        <Image src={props.flag.src} alt={props.flag.alt} fill style={{ objectFit: "cover" }} loading="lazy" />
      </div>

      <div className="flex-1 px-6 pt-6 pb-10 flex flex-col gap-4">
        <div className="text-lg font-bold">{props.name}</div>

        <div className="flex flex-col gap-2">
          <CountryProperty label="Population" value={Intl.NumberFormat().format(props.population)} />
          <CountryProperty label="Region" value={props.region} />
          <CountryProperty label="Capital" value={props.capital.join(", ")} />
        </div>
      </div>
    </div>
  );
};

export default memo(CountryCard);
