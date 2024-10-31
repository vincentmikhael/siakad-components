import { CircleNotch } from "@phosphor-icons/react/dist/ssr";
import { twMerge } from "tailwind-merge";

const Spinner = ({ size = 24, weight = "bold", className = "" }) => {
  return (
    <CircleNotch
      size={size}
      weight={weight}
      className={twMerge("motion-safe:animate-spin", className)}
    />
  );
};

export default Spinner;
