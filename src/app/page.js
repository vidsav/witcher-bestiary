import monstersData from '../../monsters.json';

export default function Home() {
  const monsters = monstersData;
  return (
      <>
        {monsters.map((monster) => (
            <div key={monster.code}>{monster.code}</div>
        ))}
      </>
  )
}
