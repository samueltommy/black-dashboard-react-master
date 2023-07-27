/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useRef } from "react";
import { Container } from "reactstrap";

function LandingPageHeader() {
  const pageHeader = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (pageHeader.current) {
        const bgImage = new Image();
        bgImage.src = require("assets/img/bg5.jpg");
        const imageAspectRatio = bgImage.width / bgImage.height;

        const headerWidth = window.innerWidth;
        const headerHeight = headerWidth / imageAspectRatio;

        pageHeader.current.style.height = headerHeight + "px";
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 style={{ color: "#fafafa" }}>Apa itu Kartu Menuju Sehat (KMS)?</h1>
            <h3 style={{ color: "#fcfcfc" }}>
                Kartu Menuju Sehat (KMS) adalah catatan grafik perkembangan anak yang diukur berdasarkan umur, berat badan, dan jenis kelamin. 
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </h3>
            <br />
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
