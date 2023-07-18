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
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/wallpaper.jpg") + ")",
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
            <h1>Example page</h1>
            <h3>
                Start designing your landing page here. ijifsnfjisdfjokjdsadfjsknfjsnfskdfisjdf kdkfdsnfsdjfksjfkdsflksjdfalkjsakfjoirajsfkajsfj sfjkdsfidkfdkfmskjfisfjkl
                jsdfjasdf sdiafjks.dfniusd sdajfsdfs dsfljdsljafdsf sdfjsdfnsljdfds
                sjdflsakjdfoidsjf sdifjsifdjsfd dsoifjdskmfclisa
                sdifjsoidfjisdfjsjdf osidfjoisadjfisjdf iajdofsajdofijoisfj
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
