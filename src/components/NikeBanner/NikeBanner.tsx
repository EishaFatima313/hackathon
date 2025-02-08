import Image from "next/image";

const NikeBanner = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center bg-gray-100">
      <Image
        src="/shoe1.png" // Make sure this is in public folder
        alt="Nike Air Max Pulse"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold">NIKE AIR MAX PULSE</h1>
        <p className="mt-2 text-lg">Extreme comfort. Hyper durable. Max volume.</p>
        <div className="mt-4 space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded-full">Notify Me</button>
          <button className="bg-black text-white px-6 py-2 rounded-full">Shop Air Max</button>
        </div>
      </div>
    </section>
  );
};

export default NikeBanner;
