import { usePDF } from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import CVDocument from "./CVDocument";

const CV = () => {
  const [instance] = usePDF({ document: <CVDocument /> });

  if (instance.loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1>Test PDF viewing and downloading</h1>
        <a className="button color-secondary" href={instance.url} download="hup-CV.pdf">
          Download PDF
        </a>
      </div>
      <Document file={instance.url} className="flex flex-col items-center">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default CV;
