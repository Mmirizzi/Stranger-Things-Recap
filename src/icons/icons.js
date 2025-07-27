import { FaHatWizard, FaBolt, FaGlasses, FaFistRaised, FaChild, FaShieldAlt, FaSkull, FaFemale, FaBicycle,} from "react-icons/fa";
import { MdDoorBack } from "react-icons/md";
import { GiFireRing , GiHourglass} from "react-icons/gi";

export const characterIcons = {
  "Eleven (Jane Hopper)": FaBolt,       // fulmine per poteri psichici
  "Mike Wheeler": FaHatWizard,           // mago per leader
  "Dustin Henderson": FaGlasses,         // occhiali per intelligenza
  "Lucas Sinclair": FaFistRaised,        // pugno per forza e lealtà
  "Max Mayfield": FaFemale,                 // ragazza generica
  "Will Byers": FaChild,                  // bambino
  "Jim Hopper": FaShieldAlt,              // scudo per protezione
  "Vecna / Henry Creel": FaSkull         // teschio per antagonista
};
export const seasonsIcons = {
    1: FaBicycle, // Stagione 1 - magia e mistero
    2: MdDoorBack,      // Stagione 2 - poteri psichici e minacce
    3: GiFireRing, // Stagione 3 - lotta e resistenza
    4: FaSkull,     // Stagione 4 - oscurità e antagonismo
    5: GiHourglass // Stagione 5 - attesa e conclusione
}