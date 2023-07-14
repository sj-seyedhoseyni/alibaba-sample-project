import { type FC, memo } from "react";

type Props = {
  label: string;
  value: string;
};

const CountryProperty: FC<Props> = props => {
  return (
    <div className="flex items-center gap-1 text-sm">
      <strong>{props.label}:</strong>
      <span>{props.value}</span>
    </div>
  );
};

export default memo(CountryProperty);
