"use client";

import { futuraStd } from "@/util/fonts";
import { encode } from "querystring";
import { useForm } from "react-hook-form";
import Spinner from "../loaders/Spinner";

interface IContactForm {
  FullName: string;
  Email: string;
  BusinessName: string;
  PhoneNumber: string;
  Message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({
    defaultValues: {
      FullName: "",
      Email: "",
      BusinessName: "",
      PhoneNumber: "",
      Message: "",
    },
    mode: "onTouched",
  });
  const onSubmit = async (data: IContactForm) => {
    const formData = {
      "form-name": "contact-form",
      name: data.FullName,
      business: data.BusinessName,
      email: data.Email,
      tel: data.PhoneNumber,
      message: data.Message,
    };

    fetch("/forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
    })
      .then(() => alert("Thank you for your submission"))
      .catch((error) => alert(error))
      .then(() => reset());
  };

  const baseClasses =
    "text-[#f5cea4] text-sm focus-visible:placeholder:text-[#f5cea4] placeholder:text-[#8B7257] bg-[#303030] w-full p-4 rounded-sm focus:outline-none focus-visible:outline-[#8B7257] font-thin tracking-widest ring-0 focus-visible:outline-1 focus-visible:text-[#f5cea4] focus-visible:outline-offset-0 focus:bg-[#3f3f3f] transition-all duration-500 ease-in-out";

  const errorClass = "outline outline-1 outline-offset-0 outline-red-700 placeholder:text-red-500";
  const errorTextBaseClass =
    "text-red-500 text-xs font-thin tracking-widest transition-all duration-500 ease-in-out";
  const errorTextHiddenClasses = " opacity-0 max-h-0";
  const errorTextVisibleClasses = " mt-2 mb-6 opacity-100 max-h-full";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`mx-auto max-w-xl ${futuraStd.className}`}
      name="contact-form"
    >
      <input type="hidden" name="required-field" value="contact-form" />
      <div className="w-full mb-3">
        <input
          className={`${baseClasses} ${errors["FullName"] ? errorClass : ""}`}
          type="text"
          placeholder="Full name*"
          {...register("FullName", {
            required: "Full name is required",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
            maxLength: {
              value: 50,
              message: "Name must be less than 50 characters",
            },
          })}
        />
        <p
          role="alert"
          className={errorTextBaseClass.concat(
            `${errors["FullName"] ? errorTextVisibleClasses : errorTextHiddenClasses}`,
          )}
        >
          {errors.FullName?.message}
        </p>
      </div>
      <div className="w-full mb-3">
        <input
          className={`${baseClasses} ${errors["Email"] ? errorClass : ""}`}
          type="email"
          placeholder="Email*"
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address",
            },
          })}
        />
        <p
          role="alert"
          className={errorTextBaseClass.concat(
            `${errors["Email"] ? errorTextVisibleClasses : errorTextHiddenClasses}`,
          )}
        >
          {errors.Email?.message}
        </p>
      </div>
      <div className="flex gap-3">
        <div className="w-full mb-3">
          <input
            type="text"
            className={baseClasses}
            placeholder="Business name"
            {...register("BusinessName", {})}
          />
          <p
            role="alert"
            className={errorTextBaseClass.concat(
              `${errors["BusinessName"] ? errorTextVisibleClasses : errorTextHiddenClasses}`,
            )}
          >
            {errors.BusinessName?.message}
          </p>
        </div>
        <div className="w-full">
          <input
            className={`${baseClasses} ${errors["PhoneNumber"] ? errorClass : ""}`}
            type="tel"
            placeholder="Phone number*"
            {...register("PhoneNumber", {
              onChange: (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              },
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter a number",
              },
              minLength: {
                value: 10,
                message: "Phone number must be at least 10 characters",
              },
              maxLength: {
                value: 15,
                message: "Phone number must be less than 15 characters",
              },
            })}
          />
          <p
            role="alert"
            className={errorTextBaseClass.concat(
              `${errors["PhoneNumber"] ? errorTextVisibleClasses : errorTextHiddenClasses}`,
            )}
          >
            {errors.PhoneNumber?.message}
          </p>
        </div>
      </div>
      <div className="mb-3">
        <textarea
          maxLength={500}
          placeholder="Message*"
          className={`${baseClasses.concat(" resize-none h-32 focus-visible:h-64")} ${
            errors["Message"] ? errorClass : ""
          }`}
          {...register("Message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
            maxLength: {
              value: 500,
              message: "Message must be less than 500 characters",
            },
          })}
        ></textarea>
        <p
          role="alert"
          className={errorTextBaseClass.concat(
            `${errors["Message"] ? errorTextVisibleClasses : errorTextHiddenClasses}`,
          )}
        >
          {errors.Message?.message}
        </p>
      </div>
      <button
        disabled={!isDirty || !isValid}
        type="submit"
        className="w-full leading-normal text-center flex justify-center items-center text-xs lg:text-base p-4 rounded-sm tracking-[0.15em] bg-[#8B7257] text-[#303030]"
      >
        {isSubmitting ? (
          <Spinner
            primaryColor="#3f3f3f"
            secondaryColor="#f5cea4"
            strokeWidth={3}
            height={24}
            width={24}
          />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
