"use client";
import { futuraStd, garamond } from "@/util/fonts";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Spinner from "../loaders/Spinner";

interface IContactForm {
  FullName: string;
  Email: string;
  BusinessName: string;
  PhoneNumber: string;
  Message: string;
}

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const translation = useTranslations("ContactForm");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid, isSubmitted },
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

  function generateEmailHTML(data: IContactForm) {
    const formattedMessage = data.Message.replace(/\n/g, "<br>");
    return `<div><p><strong>Namn:</strong></p><p>${data.FullName}</p><p><strong>Email:</strong></p><p><a href="mailto:${data.Email}">${data.Email}</a></p><p><strong>Telefon:</strong></p><p><a href="tel:${data.PhoneNumber}">${data.PhoneNumber}</a></p><p><strong>Företag:</strong></p><p>${data.BusinessName}</p><p><strong>Meddelande:</strong></p><p>${formattedMessage}</p></div>`;
  }

  const onSubmit = async (data: IContactForm) => {
    const formData = {
      name: data.FullName,
      email: data.Email,
      subject: `Kontaktformulär - ${data.FullName}`,
      message: data.Message,
      messageHtml: generateEmailHTML(data),
    };

    toast
      .promise(
        fetch("/api/contact-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }),
        {
          loading: translation("toasts.loading"),
          success: translation("toasts.success"),
          error: translation("toasts.error"),
        },
        {
          style: {
            minWidth: "250px",
          },
          position: "bottom-center",
          className: "!bg-charcoal-600 !text-gold",
          success: {
            duration: 8000,
          },
        },
      )
      .catch((error) => {
        console.log(error.message);
      })
      .then(() => {
        setName(formData.name.split(" ").slice(0, -1).join(" "));
        setFormSubmitted(true);
        setTimeout(() => {
          reset();
        }, 250);
      });
  };

  const baseClasses =
    " text-[#f5cea4] text-base focus-visible:placeholder:text-[#f5cea4] placeholder:text-[#dab389] bg-[#2e2e2e] w-full p-4 rounded-sm focus:outline-none focus-visible:outline-[#8B7257] font-thin tracking-widest ring-0 focus-visible:outline-1 focus-visible:text-[#f5cea4] focus-visible:outline-offset-0 focus:bg-[#3f3f3f] transition-all duration-500 ease-in-out ";

  const errorClass =
    " outline outline-1 outline-offset-0 outline-red-700 placeholder:text-red-500 ";
  const errorTextBaseClass =
    " text-red-500 text-xs font-thin tracking-widest transition-all duration-500 ease-in-out ";
  const errorTextHiddenClasses = " opacity-0 max-h-0 ";
  const errorTextVisibleClasses = " mt-2 mb-6 opacity-100 max-h-full ";

  return (
    <div className="relative">
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
                required: translation(
                  "validationMessages.PhoneNumber.required",
                ),
                pattern: {
                  value: /^[0-9]+$/,
                  message: translation(
                    "validationMessages.PhoneNumber.pattern",
                  ),
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
            className={"h-32 resize-none whitespace-pre-line focus-visible:h-64"
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
          disabled={isSubmitting || formSubmitted}
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

      <div
        className={"absolute inset-0 left-0 top-0 -m-2 overflow-hidden rounded border-[#a286688e] bg-charcoal-800/50 backdrop-blur-sm transition-all delay-75 duration-500 ease-in-out lg:backdrop-blur-sm"
          .concat(" ")
          .concat(
            formSubmitted ? "visible opacity-100" : "invisible opacity-0",
          )}
      >
        <div
          className={"flex h-full transform flex-col items-center justify-center space-y-4 transition-all duration-500 ease-in-out"
            .concat(" ")
            .concat(formSubmitted ? "translate-y-0" : "translate-y-[125%]")}
        >
          <h6
            className={futuraStd.className
              .concat(" ")
              .concat("text-3xl lg:text-center lg:text-2xl")}
          >
            {translation("messageSent.title")}
          </h6>
          <p
            className={garamond.className
              .concat(" ")
              .concat(
                "text-balance whitespace-pre-line text-xl font-thin lg:text-center lg:text-xl",
              )}
          >
            {translation("messageSent.description", { name: name })}
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className={"inline-block rounded-sm border border-gold p-2 px-4 text-center text-xs text-gold transition-all duration-200 ease-in-out hover:bg-gold hover:text-[#232323] sm:bg-transparent"
              .concat(" ")
              .concat(futuraStd.className)}
          >
            {translation("close")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
