import React from "react";
import "./App.css";
import BasicDocument from "./BasicDocument";
import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<BasicDocument />} fileName="test.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "クリックでPDFをダウンロード"
        }
      </PDFDownloadLink>

      <BlobProvider document={<BasicDocument />}>
        {({ blob, url, loading, error }) => {
          // Do whatever you need with blob here
          return (
            <p>
              <a
                href={url ? url : ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                別タブでPDFを表示
              </a>
            </p>
          );
        }}
      </BlobProvider>
    </div>
  );
}

export default App;
