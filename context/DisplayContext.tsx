"use client";
import React, { createContext, useState } from "react";
import { DisplayOutputTypes } from "@/@types/DisplayOutputTypes";

interface DisplayProviderProps {
  children: React.ReactNode;
}

export const DisplayContext = createContext<DisplayOutputTypes | undefined>(
  undefined
);

const DisplayProvider: React.FC<DisplayProviderProps> = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [displayTotal, setDisplayTotal] = useState<string>("")
  const [displaySubtotal, setDispalySubtotal] = useState<string>("")

  const handleDisplayTotalChange = (newValue: string) => {
    setDisplayTotal(newValue)
  }

  const handleDisplaySubtotalChange = (newValue: string) => {
    setDispalySubtotal(newValue)
  }

  return (
    <DisplayContext.Provider
      value={{ displayTotal, displaySubtotal, isSubmitted, setIsSubmitted, handleDisplayTotalChange, handleDisplaySubtotalChange }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

export default DisplayProvider;
