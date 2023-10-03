"use client";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import ErrorText from "../ErrorText/ErrorText";
import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const localStorageKey = "CARP_TRAVEL_CONTACT_US_TEMP";
const localStorageSubmitKey = "CARP_TRAVEL_CONTACT_US";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  useFormPersist(localStorageKey, {
    watch,
    setValue,
    storage: typeof window !== "undefined" && window.localStorage, // default window.sessionStorage
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (Math.random() > 0.5) {
        toast.success(
          "Accepted! Waiting for callback. Data saved in local storage."
        );
        localStorage.setItem(localStorageSubmitKey, JSON.stringify(data));
        localStorage.removeItem(localStorageKey);
        console.log(data);
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
        className="grid grid-col-1 md:grid-cols-[1fr_463px] xl:grid-cols-[1fr_294px] text-white  "
        noValidate
        autoComplete="off"
      >
        <div
          className="flex flex-col h-[76px] xl:h-[96px] md:mr-[20px] text-white"
          style={{
            color: errors.fullName?.message ? "#FF5757" : "#fff",
          }}
        >
          <label htmlFor="fullName" className="input-label">
            Full name
          </label>
          <input
            {...register("fullName", {
              required: "Required field",
              minLength: { value: 2, message: "Min lenght is 2" },
              pattern: {
                value: /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/,
                message: "Incorrect name",
              },
            })}
            type="text"
            id="fullName"
            placeholder="John Smith"
            className="input-style input-placeholder"
          />
          <ErrorText>{errors.fullName?.message}</ErrorText>
        </div>
        <div
          className="flex flex-col md:order-3 xl:order-2 md:row-span-2 h-[76px] xl:h-[96px] md:mr-[20px] xl:mr-0"
          style={{
            color: errors.contactEmail?.message ? "#FF5757" : "#fff",
          }}
        >
          <label htmlFor="contactEmail" className="input-label">
            E-mail
          </label>
          <input
            {...register("contactEmail", {
              required: "Required field",
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: "Invalid email",
              },
            })}
            type="email"
            id="contactEmail"
            placeholder="johnsmith@email.com"
            className="input-style input-placeholder"
          />
          <ErrorText>{errors.contactEmail?.message}</ErrorText>
        </div>
        <div className="flex flex-col md:order-2 xl:order-3 md:row-span-6 xl:col-span-2 ">
          <label htmlFor="contactMessage" className="input-label">
            Message
          </label>
          <textarea
            {...register("contactMessage")}
            id="contactMessage"
            rows={8}
            className="input-style input-placeholder h-[193px] xl:h-[174px] resize-none "
          />
        </div>
        <div className="w-min md:order-4 md:col-span-2 text-right flex gap-[8px] mt-[16px] xl:mt-[24px] ml-auto">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="36"
            visible={loading}
          />
          <button
            type="submit"
            className="text-[30px] xl:text-[32px] font-medium text-right  leading-[1.2] hover-effect focus-effect"
          >
            SEND
          </button>
        </div>
      </form>
      <Toaster />
    </>
  );
}
