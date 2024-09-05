"use client";
import React, { useState, useContext } from "react";
import { DisplayOutputTypes } from "@/@types/DisplayOutputTypes";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import CalcIcon from "./CalcIcon";
import { repayments, interest, formatDisplay } from "@/logic/mortgage";
import { DisplayContext } from "@/context/DisplayContext";
import { format } from "path";

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

// Input Class Strings
const inputValidClass: string =
  "w-full border-slate-400 border-[1.5px] rounded-md py-2 px-[60px] peer focus:border-lime outline-lime leading-[30px] overflow-hidden [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

const inputInvalidClass: string =
  "w-full border-error border-[1.5px] rounded-md py-2 px-[60px] peer focus:border-error outline-error leading-[30px] overflow-hidden [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

const input2ValidClass: string =
  "w-full border-slate-400 border-[1.5px] rounded-md py-2 px-[30px] peer focus:border-lime outline-lime leading-[30px] overflow-hidden [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

const input2InvalidClass: string =
  "w-full border-error border-[1.5px] rounded-md py-2 px-[30px] peer focus:border-error outline-error leading-[30px] overflow-hidden [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";

// Spans (Symbals) Class Strings
const spanInvalidClass: string =
  "absolute bg-error text-white left-[2px] h-[90%] w-[50px] flex items-center justify-center rounded-tl-md rounded-bl-md";

const spanValidClass: string =
  "absolute bg-bluebg peer-focus:bg-lime left-[2px] h-[90%] w-[50px] flex items-center justify-center rounded-tl-md rounded-bl-md";

const span2InvalidClass: string =
  "absolute bg-error text-white right-[2px] h-[90%] w-[60px] flex items-center justify-center rounded-tr-md rounded-br-md";

const span2ValidClass: string =
  "absolute bg-bluebg peer-focus:bg-lime right-[2px] h-[90%] w-[60px] flex items-center justify-center rounded-tr-md rounded-br-md";

export default function Form() {
  const {
    isSubmitted,
    setIsSubmitted,
    handleDisplaySubtotalChange,
    handleDisplayTotalChange,
  } = useContext(DisplayContext) as DisplayOutputTypes;

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm();

  const [calcValues, setCalcValues] = useState(mortgageValues);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    data.amount = calcValues.amount.replace(/,/g, "");
    if (data.mortgageType === "repayment") {
      const [resultMonth, resultTerm] = repayments(
        data.amount,
        data.rate,
        data.term
      );
      if (Number.isNaN(resultMonth) || Number.isNaN(resultTerm)) {
        setError("amount", { type: "valueAsNumber" });
        return;
      } else {
        handleDisplayTotalChange(formatDisplay(resultMonth));
        handleDisplaySubtotalChange(formatDisplay(resultTerm));
      }
    } else {
      const [resultMonth, resultTerm] = interest(
        data.amount,
        data.rate,
        data.term
      );
      if (Number.isNaN(resultMonth) || Number.isNaN(resultTerm)) {
        setError("amount", { type: "valueAsNumber" });
        return;
      } else {
        handleDisplayTotalChange(formatDisplay(resultMonth));
        handleDisplaySubtotalChange(formatDisplay(resultTerm));
      }
    }
    setIsSubmitted(true);
  };

  // Make-shift function to format input
  const formatNumber = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "amount") {
      setCalcValues({
        ...calcValues,
        [e.target.name]: e.target.value.replace(/\D/g, ""),
      });
      clearErrors(e.target.name);
    } else {
      setCalcValues({
        ...calcValues,
        [e.target.name]: e.target.value,
      });
      clearErrors(e.target.name);
    }

    // Some extra feature
    if (isSubmitted) {
      if (e.target.name === "mortgageType") {
        if (
          calcValues.amount !== "" &&
          calcValues.rate !== "" &&
          calcValues.term !== ""
        ) {
          if (e.target.value === "repayment") {
            const [resultMonth, resultTerm] = repayments(
              parseFloat(calcValues.amount),
              parseFloat(calcValues.rate),
              parseFloat(calcValues.term)
            );
            handleDisplayTotalChange(formatDisplay(resultMonth));
            handleDisplaySubtotalChange(formatDisplay(resultTerm));
          } else {
            const [resultMonth, resultTerm] = interest(
              parseFloat(calcValues.amount),
              parseFloat(calcValues.rate),
              parseFloat(calcValues.term)
            );
            handleDisplayTotalChange(formatDisplay(resultMonth));
            handleDisplaySubtotalChange(formatDisplay(resultTerm));
          }
        } else {
          setIsSubmitted(false);
        }
      }
    }
  };

  return (
    <div className="p-4 py-8 w-full sm:px-12 sm:py-6 md:px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-[#133041] font-bold text-lg lg:text-xl">
          Mortgage Calculator
        </h1>
        <button
          className="underline underline-offset-2 text-slate-500/80 hover:text-slate-800 transition-all duration-75 active:scale-95"
          onClick={() => {
            setCalcValues(mortgageValues);
            setIsSubmitted(false);
            clearErrors();
          }}
        >
          Clear all
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-y-4 lg:mt-14"
      >
        <div>
          <label htmlFor={"amount"} className="text-slate-500/80">
            Mortgage Amount
          </label>
          <div className="w-full relative flex items-center">
            <input
              type="text"
              autoComplete="off"
              id="amount"
              value={formatNumber(calcValues.amount)}
              className={errors.amount ? inputInvalidClass : inputValidClass}
              {...register("amount", { required: true, valueAsNumber: true })}
              aria-invalid={errors.amount ? "true" : "false"}
              onChange={changeHandler}
            />
            <span className={errors.amount ? spanInvalidClass : spanValidClass}>
              £
            </span>
          </div>
          {errors.amount?.type === "required" && (
            <p role="alert" className="text-error text-sm mt-1">
              This field is required
            </p>
          )}
          {errors.amount?.type === "valueAsNumber" && (
            <p role="alert" className="text-error text-sm mt-1">
              This input is invalid
            </p>
          )}
        </div>
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center">
          <div>
            <label htmlFor={"term"} className="text-slate-500/80">
              Mortgage Term
            </label>
            <div className="w-full relative flex items-center">
              <input
                type="number"
                id="term"
                value={calcValues.term}
                className={errors.term ? input2InvalidClass : input2ValidClass}
                {...register("term", { required: true })}
                aria-invalid={errors.term ? "true" : "false"}
                onChange={changeHandler}
              />
              <span
                className={errors.term ? span2InvalidClass : span2ValidClass}
              >
                years
              </span>
            </div>
            {errors.term?.type === "required" && (
              <p role="alert" className="text-error text-sm mt-1">
                This field is required
              </p>
            )}
          </div>
          <div>
            <label htmlFor={"rate"} className="text-slate-500/80">
              Interest Rate
            </label>
            <div className="w-full relative flex items-center">
              <input
                type="number"
                id="rate"
                value={calcValues.rate}
                className={errors.rate ? input2InvalidClass : input2ValidClass}
                {...register("rate", { required: true })}
                aria-invalid={errors.rate ? "true" : "false"}
                onChange={changeHandler}
              />
              <span
                className={errors.rate ? span2InvalidClass : span2ValidClass}
              >
                %
              </span>
            </div>
            {errors.rate?.type === "required" && (
              <p role="alert" className="text-error text-sm mt-1">
                This field is required
              </p>
            )}
          </div>
        </div>
        {/* Radio Buttons */}
        <div className="mt-6 flex flex-col items-center gap-y-3">
          <span className="self-start text-slate-500/80">Mortgage Type</span>
          <div className="w-full flex gap-3 items-center px-[30px] py-3 border-slate-400 border-[1.5px] hover:border-lime hover:cursor-pointer has-[:checked]:border-lime has-[:checked]:bg-lime/10">
            <input
              type="radio"
              value={"repayment"}
              id="repayment"
              {...register("mortgageType", { required: true })}
              aria-invalid={errors.mortgageType ? "true" : "false"}
              checked={calcValues.mortgageType === "repayment"}
              onChange={changeHandler}
              className="appearance-none w-4 h-4 rounded-full peer border-slate-400 border-[1.5px] checked:border-lime relative
              after:absolute after:top-0 after:left-0 after:bg-white checked:after:bg-lime after:h-full after:w-full after:rounded-full after:border-white after:border-[1px]"
            />
            <label
              htmlFor={"repayment"}
              className="hover:cursor-pointer font-bold text-[#133041]"
            >
              Repayment
            </label>
          </div>
          <div className="w-full flex gap-3 items-center px-[30px] py-3 border-slate-400 border-[1.5px] hover:border-lime hover:cursor-pointer has-[:checked]:border-lime has-[:checked]:bg-lime/10">
            <input
              type="radio"
              value={"interest"}
              id="interest"
              {...register("mortgageType", { required: true })}
              aria-invalid={errors.mortgageType ? "true" : "false"}
              checked={calcValues.mortgageType === "interest"}
              onChange={changeHandler}
              className="appearance-none w-4 h-4 rounded-full peer border-slate-400 border-[1.5px] checked:border-lime relative
              after:absolute after:top-0 after:left-0 after:bg-white checked:after:bg-lime after:h-full after:w-full after:rounded-full after:border-white after:border-[1px]"
            />
            <label
              htmlFor={"interest"}
              className="hover:cursor-pointer font-bold text-[#133041]"
            >
              Interest Only
            </label>
          </div>
          {errors.mortgageType?.type === "required" && (
            <p role="alert" className="self-start text-error text-sm mt-1">
              This field is required
            </p>
          )}
        </div>
        <button
          type="submit"
          className="mt-3 w-full px-[30px] py-4 flex gap-3 items-center rounded-3xl bg-lime hover:bg-lime/50 text-[#133041] hover:text-[#133041]/80 justify-center
          active:scale-95 transition-all duration-150 lg:max-w-[300px]"
        >
          <span className="text-white">
            <CalcIcon />
          </span>
          <span>Calculate Repayments</span>
        </button>
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
