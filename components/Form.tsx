"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

interface calcTypes {
  amount: string;
  term: string;
  rate: string;
  mortgageType: string;
}

const mortgageValues: calcTypes = {
  amount: "",
  term: "",
  rate: "",
  mortgageType: "",
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [calcValues, setCalcValues] = useState(mortgageValues);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setCalcValues(mortgageValues);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCalcValues({
      ...calcValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1>Mortgage Calculator</h1>
        <button>Clear all</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor={"amount"}>Mortgage Amount</label>
          <input
            type="number"
            id="Mortgage"
            value={calcValues.amount}
            className="w-full border-bluebg border-2"
            {...register("amount", { required: true })}
            aria-invalid={errors.amount ? "true" : "false"}
            onChange={changeHandler}
          />
          {errors.amount?.type === "required" && (
            <span role="alert">Error</span>
          )}
        </div>
        <div>
          <div>
            <label htmlFor={"term"}>Mortgage Term</label>
            <input
              type="number"
              id="Mortgage"
              value={calcValues.term}
              className="w-full border-bluebg border-2"
              {...register("term", { required: true })}
              aria-invalid={errors.term ? "true" : "false"}
              onChange={changeHandler}
            />
            {errors.term?.type === "required" && (
              <span role="alert">Error</span>
            )}
          </div>
          <div>
            <label htmlFor={"rate"}>Interest Rate</label>
            <input
              type="number"
              id="Mortgage"
              value={calcValues.rate}
              className="w-full border-bluebg border-2"
              {...register("rate", { required: true })}
              aria-invalid={errors.rate ? "true" : "false"}
              onChange={changeHandler}
            />
            {errors.rate?.type === "required" && (
              <span role="alert">Error</span>
            )}
          </div>
        </div>
        {/* Radio Buttons */}
        <div>
          <div>
            <input
              type="radio"
              value={"repayment"}
              {...register("mortgageType", { required: true })}
              aria-invalid={errors.mortgageType ? "true" : "false"}
              checked={calcValues.mortgageType === "repayment"}
              onChange={changeHandler}
            />
            <label htmlFor={"mortgageType"}>Repayment</label>
          </div>
          <div>
            <input
              type="radio"
              value={"interest"}
              {...register("mortgageType", { required: true })}
              aria-invalid={errors.mortgageType ? "true" : "false"}
              checked={calcValues.mortgageType === "interest"}
              onChange={changeHandler}
            />
            <label htmlFor={"mortgageType"}>Interest Only</label>
          </div>
          {errors.mortgageType?.type === "required" && (
            <span role="alert">Error</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// type InputVariables = {
//   value: string;
//   label: string;
//   name: string;
//   changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
// };

// function Input({ value, label, name, changeHandler }: InputVariables) {
//   const {
//     formState: { errors },
//     register,
//   } = useForm();
//   return (
//     <div>
//       <label htmlFor={name}>{label}</label>
//       <input
//         type="number"
//         id="Mortgage"
//         value={value}
//         className="w-full border-bluebg border-2"
//         {...register(name, { required: true })}
//         aria-invalid={errors.name ? "true" : "false"}
//         onChange={changeHandler}
//       />
//       {errors.name?.type === "required" && <span role="alert">Error</span>}
//     </div>
//   );
// }

// type RadioVariables = {
//   changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   name: string;
// };

// function RadioInput({ changeHandler, name }: RadioVariables) {
//   const {
//     formState: { errors },
//     register,
//   } = useForm();
//   return (
//     <div>
//       <div>
//         <input
//           type="radio"
//           value={"repayment"}
//           {...register(name, { required: true })}
//           aria-invalid={errors.name ? "true" : "false"}
//           onChange={changeHandler}
//         />
//         <label htmlFor={name}>Repayment</label>
//       </div>
//       <div>
//         <input
//           type="radio"
//           value={"interest"}
//           {...register(name, { required: true })}
//           aria-invalid={errors.name ? "true" : "false"}
//           onChange={changeHandler}
//         />
//         <label htmlFor={name}>Interest Only</label>
//       </div>
//       {errors.name?.type === "required" && <span role="alert">Error</span>}
//     </div>
//   );
// }
