import monstersData from '../../mosnters_new.json';
import Image from "next/image";

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
      <>
        {monsters.map((monster) => (
            <div key={monster.name}>
                <p>{monster.name}</p>
                <p>{monster.type}</p>
                <p>{monster.desc}</p>
                {monster.type === 'Beasts' ? <Image src={monster.image} alt={monster.name} height={200} width={200}/> : <p>No image found</p>}
            </div>

        ))}
      </>
  )
}
