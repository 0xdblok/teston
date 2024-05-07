import React from "react";
import Image from "next/image";
import wallet from "../asset/wallet.png";
import wall from "../asset/wall.png";
import uni from "../asset/uni.png";
import wave from "../asset/wave.png";
export default function Buy() {
  return (
    <div>
      {" "}
      <div className="pt-40 font-sans pb-16">
        <h1 className="lg:text-4xl font-extrabold font-sans text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ffd29d] to-neutral-400 ">
          HOW TO BUY
        </h1>
        <div className="lg:flex px-10 lg:gap-8 space-y-8 lg:space-y-0 pt-4 font-medium ">
          <div className="border-2 border-yellow-400 shadow-xl bg-[#ffd29d] p-8 rounded-lg lg:w-1/4">
            <div className="flex justify-center">
              {" "}
              <Image
                src={wall}
                className=""
                alt="Isaac Neewton"
                width="150"
                height="150"
              />
            </div>{" "}
            <h1 className="text-center font-semibold">Create a Wallet</h1>
            <p className="text-sm text-center">
              Download Phantom wallet from the app store or google play store
              for free. Desktop users, download the google chrome extension by
              going to phantom.app
            </p>
          </div>
          <div className="border-2 border-yellow-400 shadow-xl bg-[#ffd29d] p-8 rounded-lg lg:w-1/4">
            <div className="flex justify-center">
              {" "}
              <Image
                src={wallet}
                className=""
                alt="Isaac Neewton"
                width="150"
                height="150"
              />
            </div>{" "}
            <h1 className="text-center font-semibold">Get Some SOL</h1>
            <p className="text-sm text-center break-words">
              Have SOL in your wallet to switch to $NEWTON. If you don’t have
              any SOL, you can buy SOL from an exchange and send it to Solana.
            </p>
          </div>
          <div className="border-2 border-yellow-400 shadow-xl bg-[#ffd29d] p-8 rounded-lg lg:w-1/4">
            <div className="flex justify-center">
              {" "}
              <Image
                src={uni}
                className=""
                alt="Isaac Neewton"
                width="150"
                height="150"
              />
            </div>{" "}
            <h1 className="text-center font-semibold">Go to Jupiter</h1>
            <p className="text-sm text-center">
              Google jup.ag website. Connect your wallet. Paste the $NEWTON
              token address into Jupiter and then confirm the swap. Then sign.
            </p>
          </div>
          <div className="border-2 border-yellow-400 shadow-xl bg-[#ffd29d] p-8 rounded-lg lg:w-1/4 ">
            <div className="flex justify-center">
              {" "}
              <Image
                src={wave}
                className=""
                alt="Isaac Neewton"
                width="150"
                height="150"
              />
            </div>
            <h1 className="text-center font-semibold">Ride the wave</h1>
            <p className="text-sm text-center">
              Base Season is at its early stages. Just sit back and relax. The
              worst thing most people do, is they sell their bags early
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<div>
{" "}
<div className="pt-36 font-sans pb-16">
  <h1 className="lg:text-4xl font-extrabold font-sans text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ffd29d] to-neutral-400 ">
    HOW TO BUY
  </h1>
  <div className="lg:flex px-10 lg:gap-8 space-y-8 lg:space-y-0 pt-4 font-medium ">
    <div className="border-2 border-yellow-400 shadow-xl bg-[#ffd29d] p-8 rounded-lg lg:w-1/4">
      <div className="flex justify-center">
        {" "}
        <Image
          src={wall}
          className=""
          alt="Isaac Neewton"
          width="150"
          height="150"
        />
      </div>{" "}
      <h1 className="text-center font-semibold">Create a Wallet</h1>
      <p className="text-sm text-center">
        Download Phantom wallet from the app store or google play store
        for free. Desktop users, download the google chrome extension by
        going to phantom.app
      </p>
    </div>
    <div className="border-2 border-yellow-400 shadow-xl bg-[#ffd29d] p-8 rounded-lg lg:w-1/4">
      <div className="flex justify-center">
        {" "}
        <Image
          src={wallet}
          className=""
          alt="Isaac Neewton"
          width="150"
          height="150"
        />
      </div>{" "}
      <h1 className="text-center font-semibold">Get Some SOL</h1>
      <p className="text-sm text-center break-words">
        Have ETH in your wallet to switch to MOTION$. If you don’t have
        any ETH, you can buy ETH from an exchange and send it to Base or
        cross chain swap here
        https://www.orbiter.finance/?source=Arbitrum&dest=Base&token=ETH
      </p>
    </div>
    <div className="border-2 border-yellow-400 shadow-xl bg-[#ffd29d] p-8 rounded-lg lg:w-1/4">
      <div className="flex justify-center">
        {" "}
        <Image
          src={uni}
          className=""
          alt="Isaac Neewton"
          width="150"
          height="150"
        />
      </div>{" "}
      <h1 className="text-center font-semibold">Go to UniSwap</h1>
      <p className="text-sm text-center">
        Google uniswap.org website. Connect your wallet. Paste the $MOTION
        token address into Uniswap and then confirm the swap. Then sign.
      </p>
    </div>
    <div className="border-2 border-yellow-400 shadow-xl bg-[#ffd29d] p-8 rounded-lg lg:w-1/4 ">
      <div className="flex justify-center">
        {" "}
        <Image
          src={wave}
          className=""
          alt="Isaac Neewton"
          width="150"
          height="150"
        />
      </div>
      <h1 className="text-center font-semibold">Ride the wave</h1>
      <p className="text-sm text-center">
        Base Season is at its early stages. Just sit back and relax. The
        worst thing most people do, is they sell their bags early
      </p>
    </div>
  </div>
</div>
</div>*/
