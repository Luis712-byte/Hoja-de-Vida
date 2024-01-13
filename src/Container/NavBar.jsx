import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import certificaciones from "./Certification";
import { useNavigate } from "react-router-dom";

const NavBar = ({ contentRef }) => {
  const navigate = useNavigate();

  const handle = () => {
    navigate("/certificaciones");
  };

  const handlePrintToPDF = async () => {
    try {
      const content = contentRef.current;

      if (content) {
        const pdfWidth = 1658; // Ancho en mm
        const pdfHeight = 1658; // Alto en mm

        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "mm",
          format: [pdfWidth, pdfHeight],
        });

        const canvas = await html2canvas(content, {
          allowTaint: true,
          useCORS: true,
          scrollX: 0,
          scrollY: 0,
          windowWidth: pdfWidth,
          windowHeight: pdfHeight,
          scale: pdfWidth / content.offsetWidth,
          // Ajusta la orientación del lienzo de html2canvas
          width: pdfWidth,
          height: pdfHeight,
        });

        const imgData = canvas.toDataURL("image/png");

        // Agrega la imagen al PDF
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        // Guarda el PDF
        pdf.save("mi_curriculum.pdf");
      } else {
        console.error("Ref contentRef.current is undefined.");
      }
    } catch (error) {
      console.error("Error al cargar el PDF:", error);
    }
  };
  /*const content = contentRef.current;

  if (content) {
    const pdfOrientation = 'p'; // 'p' for portrait, 'l' for landscape
    const pdfSize = 'a4'; // Tamaño del PDF

    const pdf = new jsPDF(pdfOrientation, 'mm', pdfSize);

    html2canvas(content, {
      allowTaint: true,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: document.documentElement.scrollHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      // Calcula las dimensiones de la imagen en relación con el PDF
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      // Agrega la imagen al PDF
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

      // Guarda el PDF
      pdf.save('mi_curriculum.pdf');
    });
  } else {
    console.error('Ref contentRef.current is undefined.');
  }
};*/

  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
        {/*<Nav.Link onClick={handle}>Certificaciones</Nav.Link>*/}
        <Nav className="me-auto"></Nav>
        <Nav>
          <div className="containerPDF">
            <button className="download-button" onClick={handlePrintToPDF}>
              <div className="docs">
                <svg
                  className="css-i6dzq1"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line y2="13" x2="8" y1="13" x1="16"></line>
                  <line y2="17" x2="8" y1="17" x1="16"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>{" "}
                Descargar Curriculum
              </div>
              <div className="download">
                <svg
                  className="css-i6dzq1"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line y2="3" x2="12" y1="15" x1="12"></line>
                </svg>
              </div>
            </button>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
