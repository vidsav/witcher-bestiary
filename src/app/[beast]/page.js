import monstersData from '../../../mosnters_new.json';
import {Link} from "@nextui-org/react";


export default async function Beast({params}){
    const beast = monstersData.find(item => item.name === params.beast);
    console.log(beast);
    return (
        <>
            <Link href="/">Back</Link>
            <div>{beast.name}</div>
        </>
    )
}