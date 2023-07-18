import React from "react";
import classNames from "classnames";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  ModalHeader,
} from "reactstrap";
import logo from "assets/img/puskes.png";
import stei from "assets/img/stei.png";
import sith from "assets/img/sith.png";
import kirei from "assets/img/kirei.png";

function AdminNavbar(props) {
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("resize", updateColor);

    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });

  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("");
    }
  };

  return (
    <>
      <Navbar
        className={classNames("navbar-absolute", color)}
        expand="lg"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 100 }}
      >
        <Container fluid>
          <NavbarBrand>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "25px", marginRight: "5px" }}
            />
            Puskesmas
          </NavbarBrand>
            <Nav className="ml-auto" navbar>
                  <div className="photo">
                    <img className="logo-kupu" alt="Logo kupu" src={kirei} />
                  </div>
            </Nav>
        </Container>
      </Navbar>
      <div>
        {/* Add your dashboard content here */}
      </div>
    </>
  );
}

export default AdminNavbar;
