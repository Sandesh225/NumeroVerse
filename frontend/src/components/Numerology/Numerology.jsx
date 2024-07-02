import CardNumerology from "./CardNumerology";
import { numerologyLinks } from "../../../constants";

export default function Numerology() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {numerologyLinks.map((link, index) => (
        <CardNumerology key={index} link={link} />
      ))}
    </div>
  );
}
