import monstersData from '../../../monsters_new.json';
import {Link, Image} from "@nextui-org/react";


export default async function Beast({params}){
    const beast = monstersData.find(item => item.id === params.id);
    console.log(beast);
    return (
        <>
            <Link href="/">Back</Link>
            <div>{beast.name}</div>
            <div>{beast.desc}</div>
            <Image src={beast.image} alt={beast.name} height={500} width={500}/>
        </>
    )
}