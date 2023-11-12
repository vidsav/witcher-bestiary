import monstersData from '../../mosnters_new.json';
import Image from "next/image";
import BeastItem from "@/components/BeastItem";

export default function Home() {
  const monsters = monstersData;
  monsters.sort((a, b) => {
      const nameA = a.type.toUpperCase(); // ignore upper and lowercase
      const nameB = b.type.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
           return 1;
      }

        // names must be equal
      return 0;
    });
  return (
      <div className="">
          <div className="flex flex-wrap gap-4 p-8">
              {monsters.map((monster) => (
                  <BeastItem key={monster.name} beast={monster}/>
              ))}
          </div>
      </div>
  )
}
