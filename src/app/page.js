'use client'
import Image from "next/image";
import BeastItem from "@/components/BeastItem";
import {Link, Tab, Tabs} from "@nextui-org/react";

async function getMonsters(){
    const response = await fetch(' http://localhost:4000/monsters', {});
    return response.json();
}

export default async function Home() {
  const monsters = await getMonsters();
  // const tabs = ['Beasts','Cursed Ones','Draconids','Elementa','Hybrids',"Insectoids","Necrophages","Ogroids","Relicts","Specters","Vampires"]
  const tabs = [
      {
          id: "Beasts",
          label: "Beasts",
      },
      {
          id: "Cursed Ones",
          label: "Cursed Ones",
      },
      {
          id: "Draconids",
          label: "Draconids",
      },
      {
          id: "Elementa",
          label: "Elementa",
      },
      {
          id: "Hybrids",
          label: "Hybrids",
      },
      {
          id: "Insectoids",
          label: "Insectoids",
      },
      {
          id: "Necrophages",
          label: "Necrophages",
      },
      {
          id: "Ogroids",
          label: "Ogroids",
      },
      {
          id: "Relicts",
          label: "Relicts",
      },
      {
          id: "Specters",
          label: "Specters",
      },
      {
          id: "Vampires",
          label: "Vampires",
      }
  ]
  monsters.sort((a, b) => {
      const nameA = a.type.toUpperCase(); // ignore upper and lowercase
      const nameB = b.type.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
           return 1;
      }
      return 0;
    });
  return (
      <main>
          <Tabs aria-label="Dynamic tabs" items={tabs}>
              {(item) => (
                  <Tab key={item.id} title={item.label} color="primary">
                      <div className="flex flex-wrap gap-4 p-8">
                          {monsters.filter(filterbeast => filterbeast.type === item.id).map((beast) => (
                              <Link key={beast.name} href={`/${beast.id}`}>
                                  <BeastItem beast={beast}/>
                              </Link>
                          ))}
                      </div>
                  </Tab>
              )}
          </Tabs>
      </main>
  )
}
