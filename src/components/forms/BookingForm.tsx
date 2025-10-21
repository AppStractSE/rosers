"use client";
import { useEffect, useRef } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "appstract-form": any;
    }
  }
}

const BookingForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let iframe: HTMLIFrameElement | null = null;

    function initializeIframe(el: HTMLElement) {
      iframe = document.createElement("iframe");
      iframe.src =
        "https://karlsfors.appstract.se?theme=LS1iYWNrZ3JvdW5kOiBva2xjaCgwLjIzOTMgMCAwKTstLWZvcmVncm91bmQ6IG9rbGNoKDAuODc0NyAwLjA3MDUgNjguNzgpOy0tcHJpbWFyeTogb2tsY2goODAuMTY3JSAwLjA5NDI1IDY3Ljg2OCk7LS1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuMjM5MyAwIDApOy0tc2Vjb25kYXJ5OiBva2xjaCgwLjQwMCAwIDApOy0tYWNjZW50OiBva2xjaCg4MC4xNjclIDAuMDk0MjUgNjcuODY4KTstLWJvcmRlcjogb2tsY2goODcuNDY3JSAwLjA3MDQzIDY4Ljc1MyAvIDAuNjE2KTs/";
      iframe.style.border = "0";
      iframe.style.width = "100%";
      iframe.height = "0";
      iframe.style.transition = "height .1s ease";
      iframe.classList.add("loading");
      el.appendChild(iframe);
    }

    const handleMessage = (e: MessageEvent) => {
      const data = e.data;
      if (data && data.appstract) {
        const msg = data.message;
        if (msg.type === "height" && iframe) {
          iframe.height = Math.max(msg.data, 0).toString();
        }

        if (msg.type === "loaded" && iframe) {
          iframe.classList.remove("loading");
          iframe.classList.add("loaded");
          console.log("[Appstract] iframe loaded");
        }
      }
    };

    const appstractForm = containerRef.current.querySelector("appstract-form");
    if (appstractForm) {
      initializeIframe(appstractForm as HTMLElement);
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (iframe && iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      <appstract-form></appstract-form>
    </div>
  );
};

export default BookingForm;
