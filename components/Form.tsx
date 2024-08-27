"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface calcTypes {
  amount: string;
  term: string;
  rate: string;
}

const mortgageValues: calcTypes = {
  amount: "",
  term: "",
  rate: "",
};

export default function Form() {
  const [calcValues, setCalcValues] = useState(mortgageValues);
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1>Mortgage Calculator</h1>
        <button>Clear all</button>
      </div>
      <form>
        <Input
          value={calcValues.amount}
          label="Mortgage"
          name="amount"
          changeHandler={(e) => {
            setCalcValues({ ...calcValues, [e.target.name]: e.target.value });
          }}
        />
        <div>
          <Input
            value={calcValues.rate}
            label="Rate"
            name="rate"
            changeHandler={(e) => {
              setCalcValues({ ...calcValues, [e.target.name]: e.target.value });
            }}
          />
          <Input
            value={calcValues.term}
            label="Term"
            name="term"
            changeHandler={(e) => {
              setCalcValues({ ...calcValues, [e.target.name]: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
}

type InputVariables = {
  value: string;
  label: string;
  name: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ value, label, name, changeHandler }: InputVariables) {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        id="Mortgage"
        value={value}
        className="w-full border-bluebg border-2"
        {...register(name, { required: true })}
        aria-invalid={errors.name ? "true" : "false"}
        onChange={changeHandler}
      />
      {errors.name?.type === "required" && <span>Error</span>}
    </div>
  );
}
