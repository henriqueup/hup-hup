import { useEffect, useState } from "react";
import { usePDF } from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { MdDownloadForOffline } from "react-icons/md";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import CVDocument from "./CVDocument";
import useWindowDimensions from "../hooks/useWindowDimensions";

const CV = () => {
  const localStorageValue = localStorage.getItem("darkMode");
  const prefersDarkmode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkmode, setIsDarkmode] = useState(
    localStorageValue === "enabled" || (prefersDarkmode && localStorageValue !== "disabled")
  );
  const [pdfInstance, updateRenderedPdf] = usePDF({ document: <CVDocument isDarkmode={isDarkmode} /> });

  const { width: windowWidth } = useWindowDimensions();
  const isLarge = windowWidth > 1200;
  const canvasWidth = isLarge ? 1200 - 128 : windowWidth - 64;

  useEffect(() => {
    function checkDarkmode(event: MouseEvent) {
      const darkmodeToggle = document.querySelector("#darkmode-toggle");
      const target = event.target as Element;

      if (target !== darkmodeToggle && !darkmodeToggle?.contains(target)) return;

      const value = localStorage.getItem("darkMode");

      setIsDarkmode(value === "enabled");
      updateRenderedPdf(<CVDocument isDarkmode={value === "enabled"} />);
    }

    window.addEventListener("click", checkDarkmode);

    return () => {
      window.removeEventListener("click", checkDarkmode);
    };
  }, []);

  if (pdfInstance.loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex w-full justify-between">
        <h1>My CV</h1>
        <div className="flex w-[186px] flex-col gap-2">
          <a className="button has-icon color-secondary" href={pdfInstance.url} download="hup-CV.pdf">
            <MdDownloadForOffline className="h-6 w-6" /> Download PDF
          </a>
          <span className="hidden text-sm dark:block">(switch back to light theme for white page PDF)</span>
        </div>
      </div>
      <div className="w-full bg-[var(--neutral-background)] p-4 md:p-12">
        <Document file={pdfInstance.url} className="flex h-full w-full flex-col items-center">
          <Page
            pageNumber={1}
            width={canvasWidth}
            canvasBackground="transparent"
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>
    </div>
  );
};

export default CV;
