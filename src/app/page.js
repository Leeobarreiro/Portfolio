"use client"
import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "@/components/RenderModel";
import Model from "@/components/models/Model";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25" />

    <div className="w-full h-screen">
     
      {/*Navegação e Modelos 3D*/}
      <RenderModel>
        <Model />

      </RenderModel>

    </div>



    </main>
  );
}
