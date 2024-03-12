import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <image src={bg} alt="background-image" className="w-full h-full object-cover object-center opacity-25" />
    </main>
  );
}
