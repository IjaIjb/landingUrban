import { SpinnerCircularFixed } from "spinners-react";
type PropT = {
  isLoading: boolean;
  color?: string;
  size?: number;
};
const Spinner = ({ isLoading, color, size }: PropT) => {
  return (
    <SpinnerCircularFixed
      thickness={200}
      color={color ?? "#ffffff"}
      size={size ?? 24}
      enabled={isLoading}
    />
  );
};
export default Spinner;
