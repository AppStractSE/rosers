"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { futuraStd, garamond } from "@/util/fonts";
import { CalendarIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import Spinner from "../loaders/Spinner";

interface Props {
  eventName: string;
}

interface IContactForm {
  FullName: string;
  Email: string;
  BusinessName: string;
  PhoneNumber: string;
  Message: string;
  Date: string;
  NumberOfGuests: number | null;
}

const BookingForm = ({ eventName }: Props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const translation = useTranslations("ContactForm");
  const locale = useLocale();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting, isDirty, isValid, isSubmitted },
  } = useForm({
    defaultValues: {
      FullName: "",
      Email: "",
      BusinessName: "",
      PhoneNumber: "",
      Message: "",
      Date: "",
      NumberOfGuests: null,
    },
    mode: "onTouched",
  });

  function generateEmailHTML(data: IContactForm) {
    const formattedMessage = data.Message.replace(/\n/g, "<br>");
    return `<div><p><strong>Namn:</strong></p><p>${data.FullName}</p><p><strong>Email:</strong></p><p><a href="mailto:${data.Email}">${data.Email}</a></p><p><strong>Telefon:</strong></p><p><a href="tel:${data.PhoneNumber}">${data.PhoneNumber}</a></p><p><strong>Företag:</strong></p><p>${data.BusinessName}</p><p><strong>Datum:</strong></p><p>${data.Date}</p><p><strong>Antal gäster:</strong></p><p>${data.NumberOfGuests}</p><p><strong>Meddelande:</strong></p><p>${formattedMessage}</p></div>`;
  }

  const onSubmit = async (data: IContactForm) => {
    if (date) {
      data.Date = date
        .toLocaleDateString(locale === "sv" ? "sv-SE" : "en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })
        .replace(/^\w/, (c) => c.toUpperCase());
    }
    const formData = {
      name: data.FullName,
      email: data.Email,
      subject: `BOKNING ${eventName} - ${data.FullName}`,
      message: data.Message,
      messageHtml: generateEmailHTML(data),
    };

    console.log(formData);

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
    " text-[#f5cea4] text-base focus-visible:placeholder:text-[#f5cea4] placeholder:text-[#dab389] bg-[#2e2e2e] w-full p-4 rounded-sm focus:outline-none focus-visible:outline-[#8B7257] font-thin tracking-widest ring-0 focus-visible:outline-1 focus-visible:text-[#f5cea4] focus-visible:outline-offset-0 focus:bg-[#3f3f3f] transition-all duration-300 ease-in-out ";

  const errorClass =
    " outline outline-1 outline-offset-0 outline-red-700 placeholder:text-red-500 ";
  const errorTextBaseClass =
    " text-red-500 text-xs font-thin tracking-widest transition-all duration-300 ease-in-out ";
  const errorTextHiddenClasses = " opacity-0 max-h-0 ";
  const errorTextVisibleClasses = " mt-2 mb-6 opacity-100 max-h-full ";

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={twMerge("mx-auto", futuraStd.className)}
        name="contact-form"
      >
        <input type="hidden" name="required-field" value="contact-form" />
        <div className="mb-3 w-full">
          <input
            className={twMerge(
              baseClasses,
              errors["FullName"] ? errorClass : "",
            )}
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
            className={twMerge(
              errorTextBaseClass,
              errors["FullName"]
                ? errorTextVisibleClasses
                : errorTextHiddenClasses,
            )}
          >
            {errors.FullName?.message}
          </p>
        </div>
        <div className="mb-3 flex flex-col gap-3 sm:flex-row">
          <div className="w-full">
            <input
              type="text"
              className={baseClasses}
              placeholder={translation("placeholders.BusinessName")}
              {...register("BusinessName", {})}
            />
            <p
              role="alert"
              className={twMerge(
                errorTextBaseClass,
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
              className={twMerge(
                baseClasses,
                errors["PhoneNumber"] ? errorClass : "",
              )}
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
              className={twMerge(
                errorTextBaseClass,

                errors["PhoneNumber"]
                  ? errorTextVisibleClasses
                  : errorTextHiddenClasses,
              )}
            >
              {errors.PhoneNumber?.message}
            </p>
          </div>
        </div>
        <div className="mb-3 w-full">
          <input
            className={twMerge(baseClasses, errors["Email"] ? errorClass : "")}
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
            className={twMerge(
              errorTextBaseClass,
              errors["Email"]
                ? errorTextVisibleClasses
                : errorTextHiddenClasses,
            )}
          >
            {errors.Email?.message}
          </p>
        </div>
        <div className="mb-3 flex flex-col gap-3 sm:flex-row">
          <div className="w-full">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  className={twMerge(
                    baseClasses,
                    errors["Date"] ? errorClass : "",
                    "flex h-auto items-center justify-between data-[state='open']:outline data-[state='open']:outline-1 data-[state='open']:outline-[#8B7257]",
                  )}
                  {...register("Date", {
                    required: translation("validationMessages.Date.required"),
                  })}
                >
                  <span className={errors["Date"] ? "text-red-500" : ""}>
                    {date
                      ? date
                          .toLocaleDateString(
                            locale === "sv" ? "sv-SE" : "en-US",
                            {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                            },
                          )
                          .replace(/^\w/, (c) => c.toUpperCase())
                      : translation("placeholders.Date")}
                  </span>
                  <CalendarIcon
                    size={18}
                    className={errors["Date"] ? "text-red-500" : ""}
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  hideNavigation
                  showOutsideDays
                  mode="single"
                  selected={date}
                  captionLayout="label"
                  onSelect={(selectedDate) => {
                    setDate(selectedDate);
                    setValue(
                      "Date",
                      selectedDate
                        ? selectedDate
                            .toLocaleDateString(
                              locale === "sv" ? "sv-SE" : "en-US",
                              {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                              },
                            )
                            .replace(/^\w/, (c) => c.toUpperCase())
                        : "",
                    );
                    setOpen(false);
                  }}
                  startMonth={new Date(2025, 11, 1)}
                  disabled={[
                    { before: new Date(2025, 11, 3) },
                    { after: new Date(2025, 11, 13) },
                    { from: new Date(2025, 11, 7), to: new Date(2025, 11, 9) },
                  ]}
                />
              </PopoverContent>
            </Popover>
            <p
              role="alert"
              className={twMerge(
                errorTextBaseClass,

                errors["Date"]
                  ? errorTextVisibleClasses
                  : errorTextHiddenClasses,
              )}
            >
              {errors.Date?.message}
            </p>
          </div>
          <div className="w-full">
            <input
              className={twMerge(
                baseClasses,

                errors["NumberOfGuests"] ? errorClass : "",
              )}
              type="tel"
              placeholder={translation("placeholders.NumberOfGuests")}
              {...register("NumberOfGuests", {
                onChange: (e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                },
                required: translation(
                  "validationMessages.NumberOfGuests.required",
                ),
                pattern: {
                  value: /^[0-9]+$/,
                  message: translation(
                    "validationMessages.NumberOfGuests.pattern",
                  ),
                },
                min: {
                  value: 1,
                  message: translation("validationMessages.NumberOfGuests.min"),
                },
                max: {
                  value: 50,
                  message: translation("validationMessages.NumberOfGuests.max"),
                },
              })}
            />
            <p
              role="alert"
              className={twMerge(
                errorTextBaseClass,

                errors["NumberOfGuests"]
                  ? errorTextVisibleClasses
                  : errorTextHiddenClasses,
              )}
            >
              {errors.NumberOfGuests?.message}
            </p>
          </div>
        </div>
        <div className="mb-3">
          <textarea
            maxLength={500}
            placeholder={translation("placeholders.Message")}
            className={twMerge(
              "h-32 resize-none whitespace-pre-line focus-visible:h-64",
              baseClasses,
              errors["Message"] ? errorClass : "",
            )}
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
            className={twMerge(
              errorTextBaseClass,

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
        className={twMerge(
          "absolute inset-0 left-0 top-0 overflow-hidden rounded border-[#a286688e] bg-charcoal-800/50 backdrop-blur-sm transition-all delay-75 duration-300 ease-in-out lg:backdrop-blur-sm",
          formSubmitted ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div
          className={twMerge(
            "flex h-full transform flex-col items-center justify-center space-y-4 transition-all duration-300 ease-in-out",
            formSubmitted ? "translate-y-0" : "translate-y-[125%]",
          )}
        >
          <h6
            className={twMerge(
              "text-3xl lg:text-center lg:text-2xl",
              futuraStd.className,
            )}
          >
            {translation("messageSent.title")}
          </h6>
          <p
            className={twMerge(
              "text-balance whitespace-pre-line text-xl font-thin lg:text-center lg:text-xl",
              garamond.className,
            )}
          >
            {translation("messageSent.description", { name: name })}
          </p>
          <button
            onClick={() => setFormSubmitted(false)}
            className={twMerge(
              "inline-block rounded-sm border border-gold p-2 px-4 text-center text-xs text-gold transition-all duration-200 ease-in-out hover:bg-gold hover:text-[#232323] sm:bg-transparent",
              futuraStd.className,
            )}
          >
            {translation("close")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
