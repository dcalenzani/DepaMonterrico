import React from 'react';
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta - Monterrico",
  description: "Departamento en Alquiler - gran oferta en Monterrico"
};

export default function Home() {
  return (
    <div>
    <main className="flex min-h-screen flex-col items-center justify-normal space-y-10 p-24">
     <h1 className="text-5xl">
        Departamento de estreno en Monterrico
     </h1>
    <h2 className="text-2xl">
        Caracteristicas 
    </h2>
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Característica</th>
          <th className="px-4 py-2">Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Área</td>
          <td className="border px-4 py-2">120 m²</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Dormitorios</td>
          <td className="border px-4 py-2">3</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Baños</td>
          <td className="border px-4 py-2">2</td>
        </tr>
      </tbody>
    </table>
    <h2 className="text-2xl">
        Ubicación
    </h2>

    <h2 className="text-2xl">
        Imágenes
    </h2>
    <div className="flex flex-col space-y-3">
      <Image
        src="/depa/1.jpg"
        alt="Picture 1"
        width={500}
        height={500}
      />
      <Image
        src="/depa/2.jpeg"
        alt="Picture 2"
        width={500}
        height={500}
      />
      <Image
        src="/depa/3.jpeg"
        alt="Picture 3"
        width={500}
        height={500}
      />
    </div>
  </main>
  </div>
  );
}
