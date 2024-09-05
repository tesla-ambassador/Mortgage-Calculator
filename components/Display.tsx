"use client";
import React, { useContext } from "react";
import { DisplayContext } from "@/context/DisplayContext";
import ItemsEmpty from "./ItemsEmpty";
import { DisplayOutputTypes } from "@/@types/DisplayOutputTypes";

export default function Display() {
  const { isSubmitted, displayTotal, displaySubtotal } = useContext(
    DisplayContext
  ) as DisplayOutputTypes;
  return (
    <div className="min-h-[30vh] w-full bg-[#133040] flex flex-col sm:flex-row items-center justify-center md:rounded-bl-[4.5rem] lg:py-24">
      {isSubmitted ? (
        <DisplayResults total={displayTotal} subtotal={displaySubtotal} />
      ) : (
        <DisplayIdle />
      )}
      <div className="py-3 sm:hidden text-gray-300 flex flex-col items-center gap-2">
        <span>A Frontend Mentor Project developed by&#58;</span>
        <a href="https://www.frontendmentor.io/profile/tesla-ambassador">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden hover:cursor-pointer hover:scale-105 active:scale-90 transition-all duration-150">
            <img src="/images/fem_pfp.jpeg" alt="Profile" />
          </div>
        </a>
      </div>
    </div>
  );
}

function DisplayIdle() {
  return (
    <div className="px-12 py-6 flex flex-col items-center">
      <div>
        <ItemsEmpty />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-white text-lg lg:text-xl">Results Shown here</h2>
        <p className="mt-4 text-slate-400">
          Complete the form and click &quot;calculate repayments&quot; to see
          what your monthly repayments will be&#46;
        </p>
      </div>
    </div>
  );
}

function DisplayResults({ total, subtotal }: DisplayBoardItems) {
  return (
    <div className="w-full h-full px-4 py-6 sm:px-12 sm:py-6 md:px-6 flex flex-col items-start">
      <div className="text-start">
        <h2 className="text-white text-lg lg:text-xl">Your Results</h2>
        <p className="mt-4 text-slate-400">
          Your results are shown below based on the information you provided. To
          adjust the results&#44; edit the form and click &quot;Calculate
          Repayments&quot; again&#46;
        </p>
      </div>
      <div className="mt-4 w-full min-h-[220px] flex justify-center items-center bg-lime relative rounded-md md:mt-12">
        <div className="absolute -bottom-1 left-0 py-3 bg-[#0e2431] w-full h-full rounded-md">
          <DispalyBoard total={total} subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}

type DisplayBoardItems = {
  total: string;
  subtotal: string;
};

function DispalyBoard({ total, subtotal }: DisplayBoardItems) {
  return (
    <div className="px-2 w-full">
      <div className="py-3 px-4">
        <h3 className="text-slate-400">Your monthly payments</h3>
        <p className="mt-3 text-lime text-4xl">£ {total}</p>
      </div>
      <div className="py-3 px-4 border-t-[#172d3a] border-t-2">
        <h3 className="text-slate-400">Total you&apos;ll pay over the term</h3>
        <p className="mt-3 text-2xl text-white">£ {subtotal}</p>
      </div>
    </div>
  );
}
