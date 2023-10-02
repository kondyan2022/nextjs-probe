"use client";
import { useForm } from "react-hook-form";
import ErrorText from "../ErrorText/ErrorText";
import telNumberNormalize from "@/utils/telNumberNormalize";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";

export default function ChooseUsForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (Math.random() > 0.5) {
        toast.success(
          "Accepted! Waiting for callback. Data saved in local storage."
        );
        console.log(data);
        localStorage.setItem("CARP_TRAVEL_CHOOSE_US", JSON.stringify(data));
        reset();
      } else {
        toast.error("Server not answer. Try later.");
      }
    }, 3000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[463px] xl:w-auto md:h-[317px] xl:h-[394px] md:ml-[20px] xl:ml-0 
                        flex flex-col md:flex-wrap md:justify-start md:content-between xl:content-start  xl:gap-x-[24px]
                        md:row-start-4 md:row-end-5 md:col-start-2 md:col-end-4 
                        xl:row-start-3 xl:row-end-4 xl:col-start-3 xl:col-end-5 
                        "
        noValidate
        autoComplete="off"
      >
        <div
          className={`flex flex-col md:w-[222px] xl:w-[290px] h-[66px] xl:h-[76px] ${
            errors.name?.message && "text-[#FF5757]"
          }`}
        >
          <label className="input-label" htmlFor="name">
            Full name
          </label>
          <input
            {...register("name", {
              required: "Required field",
              minLength: { value: 2, message: "Min lenght is 2" },
              pattern: {
                value: /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/,
                message: "Incorrect name",
              },
            })}
            className="input-style"
            type="text"
            placeholder="John Smith"
            id="name"
          />
          <ErrorText choosus>{errors.name?.message}</ErrorText>
        </div>
        <div
          className={`flex flex-col md:w-[222px] xl:w-[290px]  h-[66px] xl:h-[76px] ${
            errors.email?.message && "text-[#FF5757]"
          }`}
        >
          <label className="input-label" htmlFor="email">
            E-mail
          </label>
          <input
            className="input-style"
            type="text"
            placeholder="johnsmith@email.com"
            id="email"
            {...register("email", {
              required: "Required field",
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: "Invalid email",
              },
            })}
          />
          <ErrorText choosus>{errors.email?.message}</ErrorText>
        </div>
        <div
          className={`flex flex-col md:w-[222px] xl:w-[290px]  h-[66px] xl:h-[76px] ${
            errors.position?.message && "text-[#FF5757]"
          }`}
        >
          <label className="input-label" htmlFor="position">
            Position
          </label>
          <input
            className="input-style"
            type="text"
            placeholder="Movie maker"
            id="position"
            {...register("position", {
              required: "Required field",
              minLength: { value: 2, message: "Min lenght is 2" },
              pattern: {
                value: /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/,
                message: "Incorrect position",
              },
            })}
          />
          <ErrorText choosus>{errors.position?.message}</ErrorText>
        </div>
        <div
          className={`flex flex-col md:w-[222px] xl:w-[290px]  h-[66px] xl:h-[76px] ${
            errors.phone?.message && "text-[#FF5757]"
          }`}
        >
          <label className="input-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="input-style"
            type="tel"
            placeholder="+ 38 (097) 12 34 567"
            id="phone"
            {...register("phone", {
              required: "Required field",
              minLength: {
                value: 17,
                message: "Minimum 10 digits",
              },
            })}
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = telNumberNormalize(value);
            }}
          />
          <ErrorText choosus>{errors.phone?.message}</ErrorText>
        </div>
        <div className="flex flex-col gap-[4px] md:w-[221px]  xl:w-[290px] md:order-5">
          <label className="input-label" htmlFor="message">
            Message
          </label>
          <textarea
            {...register("message")}
            className="input-style resize-none col-span-6 h-[196px] md:h-[228px]"
            id="message"
          />
        </div>
        <div
          className={`flex flex-col gap-[4px] mt-[16px] md:mt-0  md:w-[221px] md:order-4 ${
            errors.confirm?.message && "text-[#FF5757]"
          }`}
        >
          <input
            {...register("confirm", {
              validate: (value) => {
                return value || "error";
              },
            })}
            type="checkbox"
            id="confirm"
            className="peer hidden"
          />
          <label
            className={`checkbox-label relative tracking-normal pl-[30px] transition-colors duration-300 cursor-pointer
                        before:content-[''] before:h-[22px] before:w-[22px] before:border-[1px] before:border-white
                         before:duration-500
                        before:absolute before:top-0 before:left-0
                        after:content-[''] after:h-[14px] after:w-[14px]
                        after:absolute after:bg-white after:opacity-10 peer-checked:after:opacity-100 after:top-[4px] after:left-[4px]
                        after:transition-opacity  
                        ${
                          errors.confirm?.message && "before:border-[#FF5757]"
                        }`}
            htmlFor="confirm"
          >
            I confirm my consent to the processing of personal data.
          </label>
        </div>
        <div className="w-min  md:order-6 self-end flex gap-[8px] mt-[16px]  xl:mt-[24px]">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="36"
            visible={loading}
          />
          <button
            type="submit"
            className="text-[30px] xl:text-[32px] font-medium text-right  leading-[1.2] 
                         hover-effect focus-effect"
          >
            SEND
          </button>
        </div>
      </form>
      <Toaster />
    </>
  );
}
