import { type FC, memo } from "react";

type Props = {
  borders: string[];
};

const CountryBorderCountries: FC<Props> = props => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-4 text-sm">
      <strong className="whitespace-nowrap mt-1.5">Border Countries:</strong>

      <ul className="flex items-center gap-2 flex-wrap">
        {props.borders.length ? (
          props.borders.map(border => (
            <li key={border} className="bg-app-paper shadow-sm px-2 py-1.5 rounded text-center max-w-sm w-24">
              {border}
            </li>
          ))
        ) : (
          <li className="mt-1.5">-</li>
        )}
      </ul>
    </div>
  );
};

export default memo(CountryBorderCountries);
