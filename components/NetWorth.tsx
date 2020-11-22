import React, { useEffect, useState } from "react";
import numeral from "numeral";
import { InformationIcon } from "./Icons";

const BITCOIN_OWNED_BY_SATOSHI = 1100000;

export const NetWorth = () => {
  const [currentPrice, setCurrentPrice] = useState(null);
  useEffect(() => {
    try {
      const fetchCurrentPrice = async () => {
        const priceObject = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const priceObjectJson = await priceObject.json();
        const currentPrice = priceObjectJson.bpi.USD.rate;
        setCurrentPrice(parsePriceToInteger(currentPrice));
      };

      fetchCurrentPrice();
    } catch (err) {
      console.log("err", err);
    }
  }, []);
  return (
    <section>
      {currentPrice ? (
        <>
          <div className="text-3xl md:text-6xl">
            <p className="inline-block">
              {formattedPrice(currentPrice, BITCOIN_OWNED_BY_SATOSHI)}
            </p>
            <InformationIcon className="inline ml-5 text-grey-400 hover:text-gray-500" />
          </div>
          <p className="text-xs mt-2">
            Powered by{" "}
            <a
              className="text-blue-400"
              href="https://www.coindesk.com/price/bitcoin"
            >
              CoinDesk
            </a>
          </p>
        </>
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
