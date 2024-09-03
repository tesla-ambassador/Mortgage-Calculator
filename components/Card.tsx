import React from "react";
import Form from "./Form";
import Display from "./Display";
import DisplayProvider from "@/context/DisplayContext";

export default function Card() {
  return (
    <DisplayProvider>
      <div className="w-full overflow-hidden sm:h-fit sm:rounded-2xl bg-white flex flex-col items-stretch md:flex-row lg:max-w-4xl xl:max-w-5xl shadow-md">
        <Form />
        <Display />
      </div>
    </DisplayProvider>
  );
}
