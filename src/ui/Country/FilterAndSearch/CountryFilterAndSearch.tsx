import { type ChangeEvent, type FC, memo, useRef } from "react";
import { CountryRegion } from "~/dto/Country.dto";

type Props = {
  onSearchByName: (q: string) => void;
  onFilterRegion: (region: CountryRegion) => void;
};

const CountryFilterAndSearch: FC<Props> = props => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchByName = () => {
    if (inputRef.current) {
      props.onSearchByName(inputRef.current.value);
    }
  };

  const onChangeRegion = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value as CountryRegion;
    props.onFilterRegion(selectedRegion);
  };

  return (
    <div className="flex items-center flex-col md:flex-row gap-4">
      <div className="flex-1 relative w-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for a country..."
          className="bg-app-paper shadow-xl w-full lg:w-2/3 pl-16 pr-2 py-4 outline-none rounded-md"
        />

        <button className="absolute left-4 top-1/2 -translate-y-1/2" onClick={onSearchByName}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="app-icon">
            <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" />
          </svg>
        </button>
      </div>

      <div className="flex-1 text-end w-full">
        <select
          name="region"
          className="bg-app-paper shadow-xl w-full md:w-44 p-4 outline-none rounded-md cursor-pointer"
          onChange={onChangeRegion}
        >
          <option disabled selected>
            Select Region
          </option>
          <option value={CountryRegion.Africa}>Africa</option>
          <option value={CountryRegion.America}>America</option>
          <option value={CountryRegion.Asia}>Asia</option>
          <option value={CountryRegion.Europe}>Europe</option>
          <option value={CountryRegion.Oceania}>Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default memo(CountryFilterAndSearch);
