"use client";

import { futuraStd } from "@/util/fonts";
import { useTranslations } from "next-intl";
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
  const translation = useTranslations("ContactForm");
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
    " text-[#f5cea4] text-base focus-visible:placeholder:text-[#f5cea4] placeholder:text-[#8B7257] bg-[#303030] w-full p-4 rounded-sm focus:outline-none focus-visible:outline-[#8B7257] font-thin tracking-widest ring-0 focus-visible:outline-1 focus-visible:text-[#f5cea4] focus-visible:outline-offset-0 focus:bg-[#3f3f3f] transition-all duration-500 ease-in-out ";

  const errorClass =
    " outline outline-1 outline-offset-0 outline-red-700 placeholder:text-red-500 ";
  const errorTextBaseClass =
    " text-red-500 text-xs font-thin tracking-widest transition-all duration-500 ease-in-out ";
  const errorTextHiddenClasses = " opacity-0 max-h-0 ";
  const errorTextVisibleClasses = " mt-2 mb-6 opacity-100 max-h-full ";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={futuraStd.className.concat(" ").concat("mx-auto")}
      name="contact-form"
    >
      <input type="hidden" name="required-field" value="contact-form" />
      <div className="mb-3 w-full">
        <input
          className={baseClasses
            .concat(" ")
            .concat(errors["FullName"] ? errorClass : "")}
          type="text"
          placeholder={translation("placeholders.FullName")}
          {...register("FullName", {
            required: translation("validationMessages.FullName.required"),
            minLength: {
              value: 2,
              message: translation("validationMessages.FullName.minLength"),
            },
            maxLength: {
              value: 50,
              message: translation("validationMessages.FullName.maxLength"),
            },
          })}
        />
        <p
          role="alert"
          className={errorTextBaseClass
            .concat(" ")
            .concat(
              errors["FullName"]
                ? errorTextVisibleClasses
                : errorTextHiddenClasses,
            )}
        >
          {errors.FullName?.message}
        </p>
      </div>
      <div className="mb-3 w-full">
        <input
          className={baseClasses
            .concat(" ")
            .concat(errors["Email"] ? errorClass : "")}
          type="email"
          placeholder={translation("placeholders.Email")}
          {...register("Email", {
            required: translation("validationMessages.Email.required"),
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: translation("validationMessages.Email.pattern"),
            },
          })}
        />
        <p
          role="alert"
          className={errorTextBaseClass
            .concat(" ")
            .concat(
              errors["Email"]
                ? errorTextVisibleClasses
                : errorTextHiddenClasses,
            )}
        >
          {errors.Email?.message}
        </p>
      </div>
      <div className="flex gap-3">
        <div className="mb-3 w-full">
          <input
            type="text"
            className={baseClasses}
            placeholder={translation("placeholders.BusinessName")}
            {...register("BusinessName", {})}
          />
          <p
            role="alert"
            className={errorTextBaseClass
              .concat(" ")
              .concat(
                errors["BusinessName"]
                  ? errorTextVisibleClasses
                  : errorTextHiddenClasses,
              )}
          >
            {errors.BusinessName?.message}
          </p>
        </div>
        <div className="w-full">
          <input
            className={baseClasses
              .concat(" ")
              .concat(errors["PhoneNumber"] ? errorClass : "")}
            type="tel"
            placeholder={translation("placeholders.PhoneNumber")}
            {...register("PhoneNumber", {
              onChange: (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              },
              required: translation("validationMessages.PhoneNumber.required"),
              pattern: {
                value: /^[0-9]+$/,
                message: translation("validationMessages.PhoneNumber.pattern"),
              },
              minLength: {
                value: 10,
                message: translation(
                  "validationMessages.PhoneNumber.minLength",
                ),
              },
              maxLength: {
                value: 15,
                message: translation(
                  "validationMessages.PhoneNumber.maxLength",
                ),
              },
            })}
          />
          <p
            role="alert"
            className={errorTextBaseClass
              .concat(" ")
              .concat(
                errors["PhoneNumber"]
                  ? errorTextVisibleClasses
                  : errorTextHiddenClasses,
              )}
          >
            {errors.PhoneNumber?.message}
          </p>
        </div>
      </div>
      <div className="mb-3">
        <textarea
          maxLength={500}
          placeholder={translation("placeholders.Message")}
          className={"h-32 resize-none focus-visible:h-64"
            .concat(" ")
            .concat(baseClasses)
            .concat(" ")
            .concat(errors["Message"] ? errorClass : "")}
          {...register("Message", {
            required: translation("validationMessages.Message.required"),
            minLength: {
              value: 10,
              message: translation("validationMessages.Message.minLength"),
            },
            maxLength: {
              value: 500,
              message: translation("validationMessages.Message.maxLength"),
            },
          })}
        ></textarea>
        <p
          role="alert"
          className={errorTextBaseClass
            .concat(" ")
            .concat(
              errors["Message"]
                ? errorTextVisibleClasses
                : errorTextHiddenClasses,
            )}
        >
          {errors.Message?.message}
        </p>
      </div>
      <button
        // disabled={!isDirty || !isValid}
        type="submit"
        className="flex w-full items-center justify-center rounded-sm bg-[#8B7257] p-4 text-center text-base leading-normal tracking-[0.15em] text-[#303030] transition-all duration-200 ease-in-out hover:bg-gold"
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
          translation("buttons.submit")
        )}
      </button>
    </form>
  );
};

export default ContactForm;
