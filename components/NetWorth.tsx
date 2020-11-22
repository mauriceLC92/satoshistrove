import React, { useEffect, useState } from "react";
import numeral from "numeral";
import { InformationIcon } from "./Icons";

const BITCOIN_OWNED_BY_SATOSHI = 1100000;

export const NetWorth = () => {
  const [currentPrice, setCurrentPrice] = useState(true);
  //   useEffect(() => {
  //     try {
  //       const fetchCurrentPrice = async () => {
  //         const priceObject = await fetch(
  //           "https://api.coindesk.com/v1/bpi/currentprice.json"
  //         );
  //         const priceObjectJson = await priceObject.json();
  //         const currentPrice = priceObjectJson.bpi.USD.rate;
  //         setCurrentPrice(parsePriceToInteger(currentPrice));
  //       };

  //       fetchCurrentPrice();
  //     } catch (err) {
  //       console.log("err", err);
  //     }
  //   }, []);
  return (
    <section>
      {currentPrice ? (
        <div className="text-3xl md:text-6xl">
          {/* {formattedPrice(currentPrice, BITCOIN_OWNED_BY_SATOSHI)} */}
          <p className="inline-block">
            {formattedPrice(18500, BITCOIN_OWNED_BY_SATOSHI)}
          </p>

          <InformationIcon className="inline-block" />
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </section>
  );
};

const parsePriceToInteger = (currentPrice: string) => {
  const periodIndex = currentPrice.indexOf(".");
  const parsedPrice = currentPrice.slice(0, periodIndex).replace(",", "");
  return parseInt(parsedPrice);
};

const formattedPrice = (integerPrice: number, bitcoinAmount: number) => {
  return numeral(integerPrice * bitcoinAmount).format("$0,0.00");
};
