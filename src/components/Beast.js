import Image from "next/image";
import {Card, CardBody, CardHeader} from "@nextui-org/react";

export default function Beast({monster}) {
    return (

        <Card className="p-8 0 m-8 bg-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{monster.name}</p>
                <small className="text-default-500">{monster.type}</small>
                <h4 className="font-bold text-large">{monster.name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                {monster.type === 'Beasts' ? <Image src={monster.image} alt={monster.name} height={200} width={200}/> : <p>No image found</p>}
            </CardBody>
        </Card>


        // <div key={monster.name}>
        //     <p>{monster.name}</p>
        //     <p>{monster.type}</p>
        //     <p>{monster.desc}</p>
        //     {monster.type === 'Beasts' ? <Image src={monster.image} alt={monster.name} height={200} width={200}/> : <p>No image found</p>}
        // </div>
    )
}