import {Link, Image} from "@nextui-org/react";

async function getMonsterDetails(id) {
    const res = await fetch(`http://localhost:4000/monsters/${id}`, {})

    return res.json()
}

export default async function Beast({params}){
    const monster = await getMonsterDetails(params.id)
    return (
        <>
            <Link href="/">Back</Link>
            <div>{monster.name}</div>
            <div>{monster.desc}</div>
            <Image src={monster.image} alt={monster.name} height={500} width={500}/>
        </>
    )
}