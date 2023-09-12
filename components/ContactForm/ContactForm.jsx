"use client";
import { useForm } from "react-hook-form";
import ErrorText from "../ErrorText/ErrorText";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-col-1 md:grid-cols-[1fr_463px] xl:grid-cols-[1fr_294px] text-white  "
      noValidate
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
          color: errors.email?.message ? "#FF5757" : "#fff",
        }}
      >
        <label htmlFor="email" className="input-label">
          E-mail
        </label>
        <input
          {...register("email", {
            required: "Required field",
            pattern: {
              value:
                /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
              message: "Invalid email",
            },
          })}
          type="email"
          id="email"
          placeholder="johnsmith@email.com"
          className="input-style input-placeholder"
        />
        <ErrorText>{errors.email?.message}</ErrorText>
      </div>
      <div className="flex flex-col md:order-2 xl:order-3 md:row-span-6 xl:col-span-2 ">
        <label htmlFor="message" className="input-label ">
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={8}
          className="input-style input-placeholder h-[193px] xl:h-[174px] resize-none "
        />
      </div>
      <div className="md:order-4 md:col-span-2 text-right">
        <button
          type="submit"
          className="text-[30px] xl:text-[32px] font-medium text-right mt-[16px] xl:mt-[24px] leading-[1.2]"
        >
          SEND
        </button>
      </div>
    </form>
  );
}
