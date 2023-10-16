import { useEffect, useState } from "react";
import { usePDF } from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { MdDownloadForOffline } from "react-icons/md";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import CVDocument from "./CVDocument";
import useWindowDimensions from "../hooks/useWindowDimensions";

const CV = () => {
  const [isDarkmode, setIsDarkmode] = useState(localStorage.getItem("darkMode") === "enabled");
  const [pdfInstance, updateRenderedPdf] = usePDF({ document: <CVDocument isDarkmode={isDarkmode} /> });

  const { width: windowWidth } = useWindowDimensions();
  const canvasWidth = (windowWidth > 1200 ? 1200 : windowWidth) - 128;

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
        <a className="button has-icon color-secondary" href={pdfInstance.url} download="hup-CV.pdf">
          <MdDownloadForOffline className="h-6 w-6" /> Download PDF
        </a>
      </div>
      <div className="w-full bg-[var(--neutral-background)] p-12">
        <Document file={pdfInstance.url} className="flex w-full flex-col items-center">
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
