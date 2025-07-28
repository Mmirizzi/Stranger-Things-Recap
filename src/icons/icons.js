import { FaHatWizard, FaBolt, FaHeadphones, FaFistRaised, FaAngrycreative, FaSkull, FaBicycle,} from "react-icons/fa";
import { MdDoorBack } from "react-icons/md";
import { GiFireRing , GiHourglass, GiSkateboard, GiPoliceOfficerHead} from "react-icons/gi";

export const characterIcons = {
  "Eleven (Jane Hopper)": FaBolt,       // fulmine per poteri psichici
  "Mike Wheeler": FaAngrycreative,           // mago per leader
  "Dustin Henderson": FaHeadphones,         // occhiali per intelligenza
  "Lucas Sinclair": FaFistRaised,        // pugno per forza e lealtà
  "Max Mayfield": GiSkateboard,                 // ragazza generica
  "Will Byers": FaHatWizard,                  // bambino
  "Jim Hopper": GiPoliceOfficerHead,              // scudo per protezione
  "Vecna / Henry Creel": FaSkull         // teschio per antagonista
};
export const seasonsIcons = {
    1: FaBicycle, // Stagione 1 - magia e mistero
    2: MdDoorBack,      // Stagione 2 - poteri psichici e minacce
    3: GiFireRing, // Stagione 3 - lotta e resistenza
    4: FaSkull,     // Stagione 4 - oscurità e antagonismo
    5: GiHourglass // Stagione 5 - attesa e conclusione
}