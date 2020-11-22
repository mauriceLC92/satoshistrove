import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="mr-4">
        <h1 className="text-6xl text-center">Satoshi's Trove</h1>
        <p className="pt-2 text-xl text-center">
          How much is Satoshi Nakamoto worth right now?
        </p>
      </div>

      <Image
        src="/satoshi-treasure-512.png"
        alt="treasure-chest"
        width={256}
        height={256}
      />
    </div>
  );
};
