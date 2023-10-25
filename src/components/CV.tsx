import { usePDF } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { MdDownloadForOffline } from "react-icons/md";
import { Document, Page, pdfjs } from "react-pdf";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { languages, type Language } from "../utils/displayValues";
import CVDocument from "./CVDocument";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const CV = () => {
  const localStorageValue = localStorage.getItem("darkMode");
  const prefersDarkmode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkmode, setIsDarkmode] = useState(
    localStorageValue === "enabled" || (prefersDarkmode && localStorageValue !== "disabled")
  );
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en");
  const [pdfInstance, updateRenderedPdf] = usePDF({
    document: <CVDocument isDarkmode={isDarkmode} language={selectedLanguage} />,
  });

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
      updateRenderedPdf(<CVDocument isDarkmode={value === "enabled"} language={selectedLanguage} />);
    }

    window.addEventListener("click", checkDarkmode);

    return () => {
      window.removeEventListener("click", checkDarkmode);
    };
  }, [selectedLanguage]);

  const handleChangeSelectedLanguage = (language: Language) => {
    setSelectedLanguage(language);
    updateRenderedPdf(<CVDocument isDarkmode={isDarkmode} language={language} />);
  };

  if (pdfInstance.loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex grow flex-col md:flex-row">
          <h1>My CV</h1>
          <div className="flex items-start gap-4 md:m-auto">
            {languages.map((language) => (
              <div className="flex cursor-pointer gap-2" onClick={() => handleChangeSelectedLanguage(language)}>
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  checked={selectedLanguage === language}
                  id={`checkbox-${language}`}
                />
                <label className="cursor-pointer uppercase" htmlFor={`checkbox-${language}`}>
                  {language}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-[186px] flex-col gap-2">
          <a
            className="button has-icon color-secondary"
            href={pdfInstance.url}
            download={`hup-CV-${selectedLanguage.toUpperCase()}.pdf`}
          >
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
