"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "appstract-form": any;
    }
  }
}

interface Props {
  eventName: string;
}

const BookingForm = ({ eventName }: Props) => {
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    const APPSTRACT_SCRIPT_ID = "appstract-script";
    if (document.getElementById(APPSTRACT_SCRIPT_ID)) {
      setScriptReady(true);
      return;
    }

    // Inject script
    const script = document.createElement("script");
    script.id = APPSTRACT_SCRIPT_ID;
    script.src = "https://karlsfors.appstract.se/appstract.js";
    script.defer = true;
    script.onload = () => setScriptReady(true);

    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!scriptReady) return;

    const observer = new MutationObserver(() => {
      const elem = document.querySelector("appstract-form iframe");
      if (
        elem instanceof HTMLIFrameElement &&
        elem.src &&
        !elem.src.includes("theme=")
      ) {
        const themeParam =
          "LS1iYWNrZ3JvdW5kOiBva2xjaCgwLjIzOTMgMCAwKTstLWZvcmVncm91bmQ6IG9rbGNoKDAuODc0NyAwLjA3MDUgNjguNzgpOy0tcHJpbWFyeTogb2tsY2goODAuMTY3JSAwLjA5NDI1IDY3Ljg2OCk7LS1wcmltYXJ5LWZvcmVncm91bmQ6IG9rbGNoKDAuMjM5MyAwIDApOy0tc2Vjb25kYXJ5OiBva2xjaCgwLjQwMCAwIDApOy0tYWNjZW50OiBva2xjaCg4MC4xNjclIDAuMDk0MjUgNjcuODY4KTstLWJvcmRlcjogb2tsY2goODcuNDY3JSAwLjA3MDQzIDY4Ljc1MyAvIDAuNjE2KTs";
        elem.src = `https://karlsfors.appstract.se/?theme=${themeParam}`;
        console.log("[Appstract] iframe theme applied");
        elem.style.border = "none";
        elem.style.outline = "none";
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [scriptReady]);

  return (
    <div>
      {scriptReady ? (
        <appstract-form></appstract-form>
      ) : (
        <p className="text-center text-gray-500">Loading booking form...</p>
      )}
    </div>
  );
};

export default BookingForm;
