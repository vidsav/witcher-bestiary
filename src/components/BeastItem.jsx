'use client'

// import Image from "next/image";
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";

export default function BeastItem({beast}) {

    const showFullBeastDetails = (beast) => {

    }


    return (
        <Card onClick={showFullBeastDetails} className="p-8 m-8 bg-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                {/*<p className="text-tiny uppercase font-bold">{beast.name}</p>*/}
                <small className="text-black font-light">{beast.type}</small>
                <h4 className="text-black font-semibold text-large">{beast.name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                {beast.type === 'Beasts' || beast.type === 'CursedOnes' ? <Image src={beast.image} alt={beast.name} height={200} width={200}/> : <p>No image found</p>}
            </CardBody>
        </Card>


        // <div key={beast.name}>
        //     <p>{beast.name}</p>
        //     <p>{beast.type}</p>
        //     <p>{beast.desc}</p>
        //     {beast.type === 'Beasts' ? <Image src={beast.image} alt={beast.name} height={200} width={200}/> : <p>No image found</p>}
        // </div>
    )
}