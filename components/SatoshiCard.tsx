import React from "react";
import Image from "next/image";

export const SatoshiCard = () => {
  return (
    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
      <Image
        className=""
        src="/Satoshi-Nakamoto.png"
        alt=""
        width="200"
        height="200"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">Sarah Dayan</div>
          <div className="text-gray-500">Staff Engineer, Algolia</div>
        </figcaption>
      </div>
    </figure>
  );
};
